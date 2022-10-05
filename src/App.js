  
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { connect } from 'react-redux';
import Login from './components/Login';
import { handleInitialData } from './actions/initialDataAction';
import Navigation from './components/Navigation';


class App extends React.Component {
	componentDidMount() {
    this.props.dispatch(handleInitialData());
	}
  
  render(){
    const { authenticatedUser, loadingBar } = this.props;
    //console.log("authenticatedUser",authenticatedUser,loadingBar)
    if (loadingBar.default === undefined || loadingBar.default === 1) {
			//for loading
      return (
        <div className="App">
          <div className="d-flex justify-content-center" style={{ 'marginTop': '20%'}}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )
    }
    else {
      //console.log("rendered in app")
      return (
        <div className="App">
          {authenticatedUser ? <Navigation/> : <Login/>}
        </div>
      )
    }
  }
}

function mapStateToProps({ authenticatedUser, loadingBar }) {
  //console.log("App mapStateToProps",authenticatedUser,loadingBar)
	return {
		authenticatedUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(App);
