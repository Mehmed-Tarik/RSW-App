import { Link } from "react-router-dom"
import './CityCard.scss'

const CityCard = ({ city }) => { // instead of doing (props)

    return (
        <div className="city-card">
            <img className="city-card-img" src={`/src/assets/${city.cityName}.webp`} alt={city.cityName} />  
            <div className="city-card-text">
                <h3>{city.cityName}</h3>
                <span>{city.population}</span>
            </div>
            <p className="btn">read more</p>
        </div>
    )
}

export default CityCard