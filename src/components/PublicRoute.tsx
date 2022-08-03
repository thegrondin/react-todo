
import {
    Navigate
} from 'react-router-dom';

function PublicRoute({ children, authRefresh, isAuthenticated, redirect} : any) {

    authRefresh();
    return (
        !isAuthenticated ? children : <Navigate to={{pathname: redirect}} />
    )
}

export default PublicRoute;