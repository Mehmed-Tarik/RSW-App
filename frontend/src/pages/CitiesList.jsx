import { useLoaderData, Link  } from "react-router-dom"

// components
import CityCard from "../components/CityCard";

// style
import './CitiesList.scss'

const CitiesList = () => {
    const cities = useLoaderData()

    if (!cities || cities.length === 0) {
        return <p>No cities found.</p>
    }
    return (
        <div className="card-container">
            {cities.map(city => (
                <Link style={{textDecoration: 'none'}} to={city.cityName} key={city._id}>
                    <CityCard city = { city }/>
                </Link>
            ))}
        </div>
    )
}

export default CitiesList

export const citiesLoader = async () => {
    const res = await fetch('http://localhost:4000/api/city')

    if(!res.ok){ 
        throw Error('Could not fetch')
    } 

    return res.json()
}