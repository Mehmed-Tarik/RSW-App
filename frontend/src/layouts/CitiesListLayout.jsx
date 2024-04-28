import { Outlet } from "react-router-dom"

const CitiesListLayout = () => {
    return (
        <div className="trending-layout">
            <h1 style={{textAlign: 'center',margin: '2vh 0vh'}}>All Cities</h1>
            <Outlet />
        </div>
    )
}

export default CitiesListLayout