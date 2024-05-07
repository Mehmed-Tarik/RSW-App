import { useEffect } from "react"
import { useParams, useLoaderData } from "react-router-dom";
import './CityDetail.scss'

const CityDetail = () => {

    const { cityName } = useParams();
    const cityDetail = useLoaderData(); 

    return (
        <div className="cityDetail-container">
            <h2 className="cityDetail-cityName">{cityDetail[0].cityName}</h2>
            <div className="cityDetail-population">
                <span className="material-icons">group</span>
                <p>{cityDetail[0].population}</p>
            </div>
            <p>{cityDetail[0].description}</p>
        </div>
    )
}

export default CityDetail

export const cityDetailLoader = async ({ params }) => {

    const { cityName } = params

    const res = await fetch(`http://localhost:4000/api/city/${cityName}`);

    if (!res.ok) { 
        throw Error('Could not fetch');
    } 

    return res.json();
}