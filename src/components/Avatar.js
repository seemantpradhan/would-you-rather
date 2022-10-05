import {Image} from 'react-bootstrap';
import './style.css';

function Avatar(props) {
	const { avatarUrl, dimention} = props;
    //console.log('avatarUrl',avatarUrl)
	return (
		<Image className ="avatar" src={avatarUrl} roundedCircle alt='User Photo' 
			style={{'width':dimention, 'height':dimention}} fluid/>
	);
}

export default Avatar;