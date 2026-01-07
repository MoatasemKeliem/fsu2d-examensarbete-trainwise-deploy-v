import dotenv from "dotenv";
import passport, { Profile } from "passport"
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { Strategy as DiscordStrategy } from "passport-discord"

dotenv.config({ quiet: true });

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL,
    DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_CALLBACK_URL
} = process.env

passport.serializeUser((user: any, done) => done(null, user));
passport.deserializeUser((obj: any, done) => done(null, obj));

const createOrFetchuser = async (profile: any, provider: string) => {
    const userRepository = AppDataSource.getRepository(User);
    const email = profile.emails?.[0].value || profile.email
    const providerId = profile.id;
    const name = profile.displayName || profile.global_name


    let user = await userRepository.findOne({ where: { provider, providerId } })

    if (!user) {
        user = userRepository.create({
            email,
            name,
            provider,
            providerId
        })
        await userRepository.save(user)
    }
    return user
}

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID!,
            clientSecret: GOOGLE_CLIENT_SECRET!,
            callbackURL: GOOGLE_CALLBACK_URL,
        },
        async (accessToken: string, refreshToken: string, profile: Profile, done: any) => {
            try {
                const user = await createOrFetchuser(profile, "google")
                return done(null, user)
            } catch (error) {
                return done(error, null)
            }
        }
    )
)

passport.use(
    new DiscordStrategy(
        {
            clientID: DISCORD_CLIENT_ID!,
            clientSecret: DISCORD_CLIENT_SECRET!,
            callbackURL: DISCORD_CALLBACK_URL,
            scope: ["identify", "email"]
        },
        async (accessToken: string, refreshToken: string, profile: Profile, done: any) => {
            try {
                const user = await createOrFetchuser(profile, "discord")
                return done(null, user)
            } catch (error) {
                return done(error, null)
            }
        }
    )
)