import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { resetUser} from '../actions/authenticationAction';
import Avatar from './Avatar';

function NavBar(props) {
    const { user, dispatch } = props;
    const { name, avatarUrl } = user;
    //console.log(avatarUrl)
	const handleLogout = () => {
		dispatch(resetUser());
    };
    
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ 'backgroundColor': '#009688', 'marginBottom': '20px' }}>
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand h1" aria-current="page">Would You Rather?</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/add' className="nav-link">New Question</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/leaderboard' className="nav-link">Leader Board</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item mt-1">
                                <div className='nav-link active'>Hello, { name }</div>
                            </li>
                            <li className="nav-item">
                                <Avatar avatarUrl={avatarUrl} dimention={'30px'}/>
                            </li>
                            <li className="nav-item mt-1">
                                <Button 
                                    type="button" 
                                    className="btn logout"
                                    style={{ 'marginTop': 'auto', 'marginRight': '10px' }}
                                    onClick={ handleLogout }
                                >
                                    Logout
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

function mapStateToProps({ users, authenticatedUser }) {
	return {
		user: users[authenticatedUser]
	};
}

export default connect(mapStateToProps)(NavBar);
