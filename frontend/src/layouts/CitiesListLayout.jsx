import { Outlet } from "react-router-dom"

const CitiesListLayout = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center',
                        margin: '2vh 0vh',
                        color: '#fff',
                        textShadow: '0 5px 10px rgba(0,0,0,.2)',
                        fontSize: '40px'}}>All Cities</h1>
            <Outlet />
        </div>
    )
}

export default CitiesListLayout