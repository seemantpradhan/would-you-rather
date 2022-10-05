import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

function ScorePanel(props) {
    const { score , rank } = props;

    return (
        <div className="ScorePanel card text-center">
            <div className="card-header">
                Score
            </div>
            <div className="card-body" style={{'textAlign': '-webkit-center'}}>
                <h2 className="card-title score">{ score }</h2>
            </div>
            { (rank === 1) ? 
                <div className="card-footer" style={{'color': '#009688'}}><strong>Winner</strong></div>
                    :<div className="card-footer text-muted"> Rank: { rank }</div>
            }
        </div>
    );
}



export default connect()(ScorePanel);
