import '../App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from './Avatar';  
import QuestionPanel from './QuestionPanel';
import ResultPanel from './ResultPanel';
import { connect } from 'react-redux';
import NotFound from './NotFound';

function QuestionCard(props) {
    const {question, user, author} = props;
    if (!question) return <NotFound/>

    const { name, avatarUrl } = author;
    let chooseYourVote= !user.answers.hasOwnProperty(question.id);
    //console.log(question )
    // console.log(user.answers.hasOwnProperty(question.id))
    return (
        <div className="QuestionCard">
            <div className="card mb-3 mt-3" style={{'maxWidth': '540px','border': '2px solid #009688','margin': '16px'}}>
                <div className="person-header">
                    {chooseYourVote ? 
                        <h6 className="card-title"> {name} asks : </h6>
                            : <h6 className="card-title"> Asked by {name} : </h6>
                    }
                </div>
                <div className="row g-0">
                    <div className="col-md-4 vertical-line">
                        <Avatar avatarUrl = { avatarUrl }/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-left">
                            {chooseYourVote ? 
                                <QuestionPanel question= {question} author= {author} /> 
                                    : <ResultPanel question= {question} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps({ users, authenticatedUser, questions }, props) {
    const paramId = props.match.params.id;
    const question = questions[paramId];
    //console.log("question",question)

    return {
        question: question ? question : null,
        user: users[authenticatedUser],
        author: question ? users[question.author] : null
    };
}

export default connect(mapStateToProps)(QuestionCard);
