import React from 'react';
import {   
    Route,
    Redirect
} from "react-router-dom";

export function renderAllRoutes(routesConfig, extraProps) {    
    let routes = renderRoutes(routesConfig, extraProps);
    return [...routes];
}

export function renderRoutes(routesConfig, extraProps=[]) {
    return routesConfig.map((item, index) => {
        const {path, exact, isProtected, isDynamic, component: Component, routes = [], loadingFallback} = item;
        return(
            <Route
                key={path}
                path={path}
                exact={exact}
                component={props => {
                    if (isProtected && !localStorage.getItem('login')) {
                        return <Redirect key={'login-redirect'} to={'/login'}/>
                    }
                    if (isDynamic) {
                        return <React.Suspense  fallback={loadingFallback || "正在加载中..."}>
                            <Component {...props} {...extraProps} routes={routes}></Component>
                        </React.Suspense>
                    }
                    return <Component {...props} {...extraProps} routes={routes}></Component>
                }
            } 
            >
            </Route>
        )
    })
}