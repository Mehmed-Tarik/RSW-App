
import { useEffect, useState } from "react"
import { QuizWrapper } from '../QuizWrapper'
import './Section.scss'

const Population = ({ updateFields, title, quizData }) => {

        const [population, setPopulation] = useState(quizData.population)
        const [cityType, setCityType] = useState('')

        const handlePopulation = (e) => {
            setPopulation(parseInt(e.target.value))
            updateFields({ fieldName: `population`, value: parseInt(e.target.value) })
        }

        useEffect(() => {

            if(population > 1000 && population < 10000) setCityType('Village')
            if(population > 10000 && population < 100000) setCityType('Town')
            if(population > 100000 && population < 1000000) setCityType('City')
            if(population > 1000000) setCityType('Big City')

            console.log(cityType);
        },[population])

    return (
        <QuizWrapper title={title}>
                <div className="progress-container">
                    <label htmlFor="progressInput" style={{color: "#ffca00"}}>IMDb Rating:</label>
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
                </div>
        </QuizWrapper>
    )
}

export default Population