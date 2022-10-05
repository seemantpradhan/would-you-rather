import '../App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';  

function ResultPanel(props) {
    const {question} = props;
    const { optionOne, optionTwo } = question
    const favoredOptionOne= optionOne.votes.length;
    const favoredOptionTwo= optionTwo.votes.length;
    const totalVotes= favoredOptionOne + favoredOptionTwo;
    const percentOptionOne= favoredOptionOne*100/totalVotes;
    const percentOptionTwo= favoredOptionTwo*100/totalVotes;
    //const { name, avatarUrl } = author;

    return (
        <div className="QuestionPanel">
            <h3 className="card-title">Results: </h3>
            <div className="card" style={{'width': '18rem', 'border': '0px' }}>
                <div className="card-body result">
                    <h6 className="card-title">Would you rather {optionOne.text} ? </h6>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
                            aria-valuenow={percentOptionOne} aria-valuemin="0" aria-valuemax="100" style={{'width': `${ percentOptionOne }%`,'backgroundColor': '#009688'}}>
                        </div>
                    </div>
                    <p className="card-text text-center" ><small className="text-muted">{favoredOptionOne} out of {totalVotes} votes</small></p>
                </div>
                <div className="card-body result">
                    <h6 className="card-title">Would you rather {optionTwo.text} ? </h6>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
                            aria-valuenow={percentOptionTwo} aria-valuemin="0" aria-valuemax="100" style={{'width': `${ percentOptionTwo }%`,'backgroundColor': '#009688'}}>
                        </div>
                    </div>
                    <p className="card-text text-center" ><small className="text-muted">{favoredOptionTwo} out of {totalVotes} votes</small></p>
                </div>
            </div>
        </div>
    );
}

export default ResultPanel;
