import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ShortQuestionsList from './ShortQuestionsList';


class Home extends React.Component {
    state = {
        key: 'unanswered'
    };

    componentDidMount() {
        //this.props.dispatch(getQuestions())
    }

    render(){
        const { unansweredIdsArray, answeredIdsArray } = this.props;

        return (
            <div className="Home">
                <div className="card" style={{'maxWidth': '580px','border': '2px solid #009688'}}>
                    {/* <h5 className="card-header bold">Welcome to the Would You Rather App!</h5> */}
                    <div className="card-body text-center" style={{'padding': '0px'}}>
                        <Tabs
                            id="home-questions-tabs"
                            activeKey={this.state.key}
                            onSelect={(k) => this.setState({key: k})}
                            className="mb-3"
                            // style={{'backgroundColor':'aliceblue'}}
                        >
                            <Tab eventKey="unanswered" title="Unanswered Questions">
                                <ShortQuestionsList questionIdsArray= { unansweredIdsArray } />
                            </Tab>
                            <Tab eventKey="answered" title="Answered Questions">
                                <ShortQuestionsList questionIdsArray= { answeredIdsArray } />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users, authenticatedUser, questions }) {
    //console.log("questions",questions)
    const answeredIdsArray = Object.keys(questions)
        .filter((id) => users[authenticatedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const unansweredIdsArray = Object.keys(questions)
        .filter((id) => !users[authenticatedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	return {
		answeredIdsArray,
		unansweredIdsArray
	};
}

export default connect(mapStateToProps)(Home);
