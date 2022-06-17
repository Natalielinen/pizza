import {NavLink} from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h1>Not found</h1>
            <NavLink to="/">back to home page</NavLink>
        </>
    )
}

export default NotFound;