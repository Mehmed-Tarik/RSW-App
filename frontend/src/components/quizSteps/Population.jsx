
import { useEffect, useState } from "react"
import { QuizWrapper } from '../QuizWrapper'
import './Section.scss'

const Population = ({ updateFields, title, quizData }) => {

        const [population, setPopulation] = useState(quizData.population)
        const [cityType, setCityType] = useState('')
        const [doMetter, setDoMetter] = useState(false)

        const handlePopulation = (e) => {
            setPopulation(parseInt(e.target.value))
            updateFields({ fieldName: `population`, value: parseInt(e.target.value) })

            if(population > 1000 && population < 10000) setCityType('Village')
            if(population > 10000 && population < 100000) setCityType('Town')
            if(population > 100000 && population < 1000000) setCityType('City')
            if(population > 1000000) setCityType('Big City')
        }

        const doesntMetter = () => {
            updateFields({ fieldName: `population`, value: 3645000 })
            setDoMetter(!doMetter)
            console.log(doMetter);
        }

    return (
        <QuizWrapper title={title}>
                <div className="progress-container">
                    <label htmlFor="progressInput" style={{color: "var(--primary)"}}>City Population:</label>
                    <div className="progress-inOut">
                        <input
                            id="progressInput"
                            type="range" // Use range input type for a slider
                            min="0" 
                            max="3645000" 
                            value={population} 
                            onChange={handlePopulation} 
                        />
                        <span className="progressOutput">{population}</span>
                    </div>
                    <p>{cityType}</p>

                    <div className={`option-container ${doMetter ? 'selected' : ''}`}
                    // key={sl} 
                    onClick={() => doesntMetter()}
                    >
                        <div>
                        <span>Doesn't metter</span>
                        <i className="material-icons">{doMetter ? 'check_box ' : 'check_box_outline_blank'}</i>
                        </div>
                    </div>
                </div>
        </QuizWrapper>
    )
}

export default Population