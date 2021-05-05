import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from '../components/test/About'; 
import Home from '../components/test/Home'; 
import Users from '../components/test/Users'; 

class Index extends React.Component {
    render() {
        return(
            <Router>                
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">users</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/users">
                            <Users></Users>
                        </Route>
                        <Route path="/">
                            <Home></Home>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Index;