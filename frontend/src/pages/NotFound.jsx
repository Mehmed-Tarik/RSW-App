import { Link } from "react-router-dom";
import './NotFound.scss'

const NotFound = () => {
    return (
        <div className="notFound-container">
            <h2 className="notFound-title">Page Not Found!</h2>
            <p className="notFound-goto">Go to the <Link to='/'>Homepage</Link>.</p>
        </div>
    )
}

export default NotFound