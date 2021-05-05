import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Test from './test'; 
import Comment from './comment'; 
import { renderAllRoutes } from "../utils/route-loader";
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return state;
}
const Index = (props) => {
    const routes = renderAllRoutes(props.routes);   
    return(     
            <Router>                
                <div>
                    <ul>
                        <li>
                            <Link to="/test">测试</Link>
                        </li>
                        <li>
                            <Link to="/comment">评论</Link>
                        </li>                     
                    </ul>
                    <Switch>
                        {routes}
                    </Switch>
                    {/* <Switch>
                        <Route path="/test">
                            <Test></Test>
                        </Route>
                        <Route path="/comment">
                            <Comment></Comment>
                        </Route>                     
                    </Switch> */}
                </div>
            </Router>
    )
    
}
export default connect(mapStateToProps)(Index);