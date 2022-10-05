import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import NewQuestionSection from './NewQuestionCard';
import LeaderBoard from './LeaderBoard';
import NavBar from './NavBar';
import Home from './Home';
import NotFound from './NotFound';

class Navigation extends React.Component {
	componentDidMount() {
    //console.log("in Navigation",this.props)
	}
  
  render(){
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
							<Route path="/" exact component={Home} />
							<Route path="/questions/:id" component={QuestionCard} />
							<Route path="/add" component={NewQuestionSection} />
							<Route path="/leaderboard" component={LeaderBoard} />
              <Route component={NotFound} />
						</Switch>
        </BrowserRouter>
  );
  }
}

function mapStateToProps({ authenticatedUser, loadingBar }) {
	return {
		authenticatedUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(Navigation);
