import { Link } from "react-router-dom"
import './CityCard.scss'

const CityCard = ({ city }) => { // instead of doing (props)

    return (
        <div className="city-card">
            <img className="city-card-img" src={`/src/assets/${city.cityName}.webp`} alt={city.cityName} />
            <h3 className="city-card-text cName">{city.cityName}</h3>
            <p className="city-card-text lMore">Learn more about <span style={{color: '#000',textTransform: 'capitalize'}}>{city.cityName}</span></p>
        </div>
    )
}

export default CityCard