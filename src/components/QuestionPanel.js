import './style.css'
import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { submitAnswer } from '../actions/questionsAction';

class QuestionPanel extends React.Component {
    state = {
        errorMessage: '',
        selectedOption: null
	};

    handleSubmit = (e) => {
		e.preventDefault();
        const { dispatch, question } = this.props;
        const { id } = question
        const { selectedOption } = this.state;

		if (selectedOption) {
            this.setState({ errorMessage: '' });
            dispatch(submitAnswer(id, selectedOption))
                // .then(()=>console.log(this.props));
		} else {
			this.setState({ errorMessage: 'Please select an option!' });
		}
    };
    
    render(){
        const { errorMessage } = this.state;
        const { question } = this.props;
        const { optionOne, optionTwo } = question

        return (
            <div className="QuestionPanel">
                <h3 className="card-title">Would You Rather...</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="QuestionPanel" 
                            onChange={ (e)=>this.setState({selectedOption: e.target.value}) }>
                        {errorMessage ? (
                                <p className="text-danger">{errorMessage}</p>
                            ) : null}
                        <Form.Check 
                            type='radio'
                            id='optionOne'
                            value='optionOne'
                            label={optionOne.text}
                            name= 'QuestionPanel'
                        />
                        <Form.Check 
                            type='radio'
                            id='optionTwo'
                            value='optionTwo'
                            label={optionTwo.text}
                            name= 'QuestionPanel'
                        />
                        <Button type="submit" className="btn submit-btn btn-sm" style={{'width': '100%'}}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

// const mapStateToProps = ({ users }) => {
//     //console.log("users",users)
// 	return {
// 		// userNames: Object.keys(users).map((id) => ({
// 		// 	value: id,
// 		// 	label: users[id].name
//         // })),
// 	};
// }

export default connect()(QuestionPanel);
