import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from './Avatar';  
import ScorePanel from './ScorePanel';
import { connect } from 'react-redux';

function ScoreCard(props) {
    const { user,rank } = props;
    const { name, answers, questions, avatarUrl } = user;

    return (
        <div className="ScoreCard">
            <div className="card mb-3 mt-3" style={{'maxWidth': '650px','border': '2px solid #009688','margin': '16px'}}>
                <div className="row g-0">
                    <div className="col-md-4 vertical-line">
                        <Avatar avatarUrl = { avatarUrl }/>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body text-left">
                            <h4 className="card-title"> {name} </h4>
                            <br />
                            <p className="card-text text-left" style={{'fontSize': 'medium','marginBottom': '5px'}}>
                                Answered questions: {Object.keys(answers).length}
                            </p>
                            <p className="card-text text-left" style={{'fontSize': 'medium'}}>
                                Created questions: {questions.length}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body text-left">
                            <ScorePanel score={Object.keys(answers).length + questions.length} rank={rank}/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps({ users, authenticatedUser, questions }, {id}) {
    return {
        user: users[id],
    };
}

export default connect(mapStateToProps)(ScoreCard);
