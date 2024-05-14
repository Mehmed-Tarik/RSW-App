import { useState, useEffect } from "react"

// components
import Calculate from "./Calculate"

// style
import './QuizResult.scss'

const QuizResult = ({quizData}) => {

    const [fetchedCities, setFetchedCities] = useState([])
    // for changing displayed cities:
    const [counter, setCounter] = useState(0)
    const [showCalculate, setShowCalculate] = useState(false)

    useEffect(() => {
        const fetchCities = async () => {
            const response = await fetch('http://localhost:4000/api/city/quizresult', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quizData })
            })

            const json = await response.json();

            if(response.ok){
                setFetchedCities(json)
            }
        }

        fetchCities()
    }, [])

    return(
        <div>
            {fetchedCities.length > 0 ? (
                <div>
                <div className="result-container">
                    <div className="result-section" >
                        <img className="result-img" src={`/src/assets/${fetchedCities[counter].cityName}.webp`} alt={fetchedCities[counter].cityName} />    
                    </div>
                    <div className="result-section">
                        <h2>{fetchedCities[counter].cityName}</h2>
                        <p>{fetchedCities[counter].description}</p>
                        {counter < fetchedCities.length - 1 && <button className="result-buttons" onClick={() => { setCounter(prevCount => prevCount + 1); setShowCalculate(false); }}>next city</button>}
                        {counter > 0 && <button className="result-buttons" onClick={() => { setCounter(prevCount => prevCount - 1); setShowCalculate(false); }}>previous city</button>}
                        
                        
                        
                        {<button className="result-buttons calculate" onClick={() => setShowCalculate(!showCalculate)}>Calculate cost of a trip</button>}
                    </div>
                </div>
                {showCalculate && (
                    <Calculate city={fetchedCities[counter]} />
                )}
                </div>
            ) : (
                <h2 className="noCities">Sorry, No cities available</h2>
            )}
        </div>
    )
}

export default QuizResult