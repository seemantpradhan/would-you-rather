import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';  

function NotFound(props) {

    return (
        <div className="NotFound">
            <div className="card" style={{'maxWidth': '400px','border': '2px solid #009688','margin': '16px'}}>
                <div className="card-header">
                    <h2 className="card-title text-danger"> 404 - PAGE NOT FOUND </h2>
                </div>
                <div className="card-body" style={{'textAlign': '-webkit-center'}}>
                    <Avatar avatarUrl = '/notfound.png'/>
                </div>
                <div className="card-footer">
                    <Link to='/' style={{'color': '#009688'}}>
                        <strong>GO TO HOME</strong>
                    </Link>
                </div>
            </div>
        </div>
    );
}



export default connect()(NotFound);