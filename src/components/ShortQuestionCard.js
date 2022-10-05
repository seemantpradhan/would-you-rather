import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Avatar from './Avatar';


class ShortQuestionCard extends React.Component {

    render(){
        const { question, author } = this.props;
        const { optionOne, id } = question;
        const { name, avatarUrl } = author;
        
        return (
            <div className="ShortQuestionCard">
                <div className="card mb-3 mt-3" style={{'maxWidth': '540px','border': '2px solid #009688','margin': '16px'}}>
                    <div className="person-header">
                        <h6 className="card-title">{name} asks:</h6>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-4 vertical-line">
                            <Avatar avatarUrl= {avatarUrl}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body text-left">
                                <h3 className="card-title">Would You Rather...</h3>
                                <p className="card-text">...{optionOne.text.slice(0, 50)}...</p>
                                <Link to={`/questions/${id}`}>
                                    <button type="button" className="btn submit-btn btn-sm">View Poll</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, users }, { id }) {
    //console.log("id",id)
	const question = questions[id];
    //console.log("question",question)
	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(ShortQuestionCard);
