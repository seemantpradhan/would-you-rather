import { Fragment } from 'react';
import ShortQuestionCard from './ShortQuestionCard';
//import QuestionCard from './QuestionCard';

function ShortQuestionsList(props) {
	const { questionIdsArray } = props;

	return (
		<Fragment>
			{questionIdsArray.length ? (
                questionIdsArray.map((id) => <ShortQuestionCard key={id} id={id} />)
			) : (
				<p className="text-center"> No Data </p>
			)}
		</Fragment>
	);
}

export default ShortQuestionsList;