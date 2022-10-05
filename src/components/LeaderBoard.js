// import { Fragment } from 'react';
import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';

function LeaderBoard(props) {
	const { userIds } = props;

	return (
		<div className="LeaderBoard">
            <h6 className="">
                <u>Leader Board</u>
            </h6>
			{userIds.length ? (
                userIds.map((id) => <ScoreCard key={id} id={id} rank={userIds.indexOf(id)+1}/>)
			) : (
				<p className="text-center"> No User </p>
			)}
		</div>
	);
}

function mapStateToProps({ users }) {
	//sorting the users according to their score
	const sortedUserIds = Object.keys(users).sort((idA, idB) => {
		const scoreA =
			Object.keys(users[idA].answers).length + users[idA].questions.length;
		const scoreB =
			Object.keys(users[idB].answers).length + users[idB].questions.length;

		return scoreB - scoreA;
	});

	return {
		userIds: sortedUserIds
	};
}

export default connect(mapStateToProps)(LeaderBoard);