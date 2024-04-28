import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found!</h2>
            <p>Go to the <Link to='/'>Homepage</Link>.</p>
        </div>
    )
}

export default NotFound