require('./Profile.scss');

import React from 'react';

class Profile extends React.Component {
	render() {
		return (
			<div className="wp-profile">
				<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
	                Launch demo modal
	            </button>
	            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	                <div className="modal-dialog">
	                    <div className="modal-content">
	                        <div className="modal-header">
	                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	                            <h4 className="modal-title" id="myModalLabel">Modal title</h4>
	                        </div>
	                        <div className="modal-body">
	                            ...
	                        </div>
	                        <div className="modal-footer">
	                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
	                            <button type="button" className="btn btn-primary">Save changes</button>
	                        </div>
	                    </div>
	                </div>
	            </div>
			    <div className="wp-profile-image"></div>
			    <h1 className="wp-profile-title">React</h1>
			    <button className="btn btn-info">Hello</button>
			    <div className="wp-big-image"></div>
			</div>
		);
	}
}

export default Profile;
