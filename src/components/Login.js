import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setUser } from '../actions/authenticationAction';

class Login extends React.Component {
	state = {
		errorMessage: ''
	};

	handleSubmit = (e) => {
		e.preventDefault();
        //console.log("user selected", this.userID.value);
		const userID = this.userID.value;
		const { dispatch } = this.props;
		if (userID !== '') {
            this.setState({ errorMessage: '' });
			dispatch(setUser(userID));
		} else {
			this.setState({ errorMessage: 'Please select a user!' });
		}
	};

	render() {
		const { userNames } = this.props;
		const { errorMessage } = this.state;

		return (
            <div className="Login" style={{ 'marginTop': '10%'}}>
                <div className="card" style={{'maxWidth': '540px','border': '2px solid #009688'}}>
                    <h5 className="card-header bold">Welcome to the Would You Rather App!</h5>
                    <div className="card-body text-left">
                        <p className="card-text text-center" style={{'fontSize': 'small'}}>Please sign in to continue</p>
                        <h5 className="card-title text-center mb-3">Sign In</h5>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="LoginForm">
                                {errorMessage ? (
                                    <p className="text-danger">{errorMessage}</p>
                                ) : null}
                                <Form.Control as="select" ref={(id) => (this.userID = id)}>
                                    <option value="">Select user</option>
                                    {userNames.map((item) => (
                                        <option value={item.value} key={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Button type="submit" className="btn submit-btn btn-sm" style={{'width': '100%'}}>
                                Submit
                            </Button>
						</Form>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = ({ users }) => {
    //console.log("users",users)
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login);