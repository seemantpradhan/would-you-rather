import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { submitNewQuestion } from '../actions/questionsAction';

class NewQuestionSection extends React.Component {
    state = {
		optionOne: '',
		optionTwo: '',
		redirect: false
	};

    handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		const { optionOne, optionTwo } = this.state;
		const { dispatch } = this.props;

		e.preventDefault();

		this.setState(
			{
				optionOne: '',
				optionTwo: '',
				redirect: true
			},
			() => dispatch(submitNewQuestion(optionOne, optionTwo))
		);
    };
    render(){
        const { optionOne, optionTwo, redirect } = this.state;
        if (redirect === true) return <Redirect to="/" />;

        return (
            <div className="NewQuestionCard">
                <div className="card" style={{'maxWidth': '540px','border': '2px solid #009688'}}>
                    <h5 className="card-header bold">Create New Question</h5>
                    <div className="card-body text-left">
                        <p className="card-text" style={{'fontSize': 'small'}}>Complete the question: </p>
                        <h5 className="card-title">Would you rather...</h5>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="optionOne">
                                <Form.Control
                                    type="text"
                                    name="optionOne"
                                    value={optionOne}
                                    placeholder="Enter option one text here"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <p className="card-text text-center bold mb-0" >OR</p>
                            <Form.Group controlId="optionTwo">
                                <Form.Control
                                    type="text"
                                    name="optionTwo"
                                    value={optionTwo}
                                    placeholder="Enter option two text here"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Button 
                                type="submit" 
                                className="btn submit-btn btn-sm" 
                                disabled={optionOne === '' || optionTwo === ''} 
                                style={{'width': '100%'}}
                            >
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(NewQuestionSection);
