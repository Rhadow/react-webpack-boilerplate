require('./Profile.scss');

import React from 'react';

class Profile extends React.Component {
	render() {
		return (
			<div className="wp-profile">
			    <div className="wp-profile-image"></div>
			    <h1 className="wp-profile-title">React</h1>
			    <div className="wp-big-image"></div>
			</div>
		);
	}
}

export default Profile;
