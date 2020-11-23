import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header.js';

function ProtectedRoute({component: Component, ...props}) {
    console.log(props)
    return (
        <Route>
            {() => props.isLoggedIn ? 
            <>
                <Header userEmail={props.userEmail} link='/signin' linkText='Sign Out' onClick={props.onHandleSignOut} />
                <Component {...props} />
            </>
            : <Redirect to='/signin' />}
        </Route>
    )
}

export default ProtectedRoute;