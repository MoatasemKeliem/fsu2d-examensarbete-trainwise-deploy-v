import { useEffect } from 'react'
import useTrainingPlan from '../hooks/useTrainingPlan'
import { Link } from 'react-router-dom'
import "../style/render.css"

const TrainingplansComponent = () => {
    const { getAllTrainingPlans, allTrainingPlans } = useTrainingPlan()

    useEffect(() => {
        getAllTrainingPlans()
    }, [])

    if (!allTrainingPlans.length) {
        return (
            <div className="no-plans">
                <div className="admin-content">
                    <h2>You don't have any training plans</h2>
                    <p className='no-plans-text'>Generate New Training Plans</p>
                    <Link to={`/my-journey`}><button>Generate Here</button></Link>
                </div>
            </div>
        )
    }

    return (
        <div className='render-page-div'>
            {
                allTrainingPlans.map((plan) => {
                    return (
                        <div className='render-item' key={plan.id}>
                            <h2 className='render-sub-title'>{plan.title}</h2>
                            <p className='render-date'>{plan.createdAt.slice(0, 10)}</p>

                            <Link to={`/training-plans/${plan.id}`}><button>View Training Plan</button></Link>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default TrainingplansComponent
