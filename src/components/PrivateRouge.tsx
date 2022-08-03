
import {
    Route,
    Navigate
} from 'react-router-dom';

function PrivateRoute({ children, authRefresh, isAuthenticated, redirect, ...rest } : any) {

    authRefresh();
    return (
        isAuthenticated ? children : <Navigate to={{pathname: redirect}} />
    )
}

export default PrivateRoute;