import { Outlet } from "react-router-dom"

const CitiesListLayout = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center',
                        margin: '2vh 0vh',
                        color: 'var(--primary)',
                        textDecoration: 'underline',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, .2)',
                        fontSize: '40px'}}>Cities overview</h1>
            <Outlet />
        </div>
    )
}

export default CitiesListLayout