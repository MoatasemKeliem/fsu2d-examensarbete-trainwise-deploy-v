import { useEffect } from 'react'
import useTrainingPlan from '../hooks/useTrainingPlan'
import useNutrition from '../hooks/useNutrition';
import useTrainingLogs from '../hooks/useTrainingLogs';
import { Link } from 'react-router-dom';

const RenderPlansDashboard = () => {
    const { getAllTrainingPlans, allTrainingPlans } = useTrainingPlan();
    const { getAllNutritionPlans, allNutrition } = useNutrition();
    const { getAllTrainingLogs, allTrainingLogs } = useTrainingLogs();

    useEffect(() => {
        getAllTrainingPlans()
        getAllNutritionPlans()
        getAllTrainingLogs()
    }, [])

    const trainingPlan = allTrainingPlans[0]
    const nutritionPlan = allNutrition[0]
    const trainingLog = allTrainingLogs[0]

    if (!trainingLog && !nutritionPlan && !trainingPlan) {
        return (
            <div>
                <h2>Generate new plans or logs</h2>
            </div>
        )
    }


    return (
        <div className='dashboard-plans'>
            <h1>Your Latest Workouts</h1>
            <div className='dashboard-div-plans'>
                {
                    trainingPlan ?
                        <div className='render-item'>
                            <h2 className='render-sub-title'>{trainingPlan?.title}</h2>
                            <p className='render-date'>{trainingPlan?.createdAt.slice(0, 10)}</p>
                            <Link to={`/training-plans/${trainingPlan?.id}`}><button>View Training Plan</button></Link>
                        </div> : ""
                }

                {
                    nutritionPlan ?
                        <div className='render-item'>
                            <h2 className='render-sub-title'>{nutritionPlan?.title}</h2>
                            <p className='render-date'>{nutritionPlan?.createdAt.slice(0, 10)}</p>
                            <Link to={`/nutritions/${nutritionPlan?.id}`}><button>View Nutrition Plan</button></Link>
                        </div>
                        : ""
                }

                {
                    trainingLog ?
                        <div className='render-item'>
                            <p>{trainingLog?.workoutSummary.slice(0, 200)}...</p>
                            <p className='render-date'>{trainingLog?.createdAt.slice(0, 10)}</p>
                            <Link to={`/training-logs/${trainingLog?.id}`}><button>View Training Log</button></Link>
                        </div>
                        : ""
                }
            </div>

        </div>
    )
}

export default RenderPlansDashboard
