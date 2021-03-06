import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import routesConfig from "./routers/index";
import { renderRoutes } from "./utils/route-loader";
import history from './store/history';
import store from './store'

class App extends React.Component {
   constructor(props) {
     super(props);
    //  this.state = {
    //    comments: []
    //  }
    //  this.onAddComment = this.onAddComment.bind(this);
   }
  //  onAddComment(comment) {
  //    console.log('app onAddComment', comment)
  //    this.setState({
  //     comments: [...this.state.comments, comment]
  //    })
  //  }
  //  onDelButton(index) {
  //    let comments = this.state.comments.splice(index, 1);
  //    this.setState({
  //      comments: comments
  //    })
  //  }
   render() {    
     console.log('render')
     return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>          
        </header>
         <Provider store={store}>
            <ConnectedRouter history={history}>
                 {renderRoutes(routesConfig)}
            </ConnectedRouter>
         </Provider>
      </div>
     )
   }
}


export default App;
