import { useState, useEffect } from "react"
import './QuizResult.scss'

const QuizResult = ({quizData}) => {

    const [fetchedCities, setFetchedCities] = useState([])
    // for changing displayed cities:
    const [counter, setCounter] = useState(0)

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
                console.log(quizData);
            }
        }

        fetchCities()
    }, [])
    
    useEffect(() => {
        console.log("Fetched Cities:", fetchedCities);
    }, [fetchedCities]);
    

    return(
        <div>
            {fetchedCities.length > 0 ? (
                <div className="result-container">
                    <div className="result-section" >
                        <img className="result-img" src={`/src/assets/${fetchedCities[counter].cityName}.webp`} alt={fetchedCities[counter].cityName} />    
                    </div>
                    <div className="result-section">
                        <h2>{fetchedCities[counter].cityName}</h2>
                        <p>{fetchedCities[counter].description}</p>
                        {counter < fetchedCities.length - 1 && <button className="result-buttons" onClick={() => setCounter(prevCount => prevCount + 1)}>next city</button>}
                        {counter > 0 && <button className="result-buttons" onClick={() => setCounter(prevCount => prevCount - 1)}>previous city</button>}
                    </div>

                </div>
            ) : (
                <h2 style={{textAlign: 'center'}}>Sorry, No cities available</h2>
            )}
        </div>
    )
}

export default QuizResult