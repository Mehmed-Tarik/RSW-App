import { useLoaderData, Link  } from "react-router-dom"

const CitiesList = () => {
    const cities = useLoaderData()
    console.log(cities);

        // Add error handling for undefined or empty cities array
        if (!cities || cities.length === 0) {
            return <p>No cities found.</p>
        }
    return (
        <div>
            {cities.map(c => (
                <Link to={c.cityName} key={c._id}>
                    <p>{c.cityName}</p>
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