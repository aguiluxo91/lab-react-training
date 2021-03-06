import profiles from '../../data/berlin.json';
import React from 'react';

class Facebook extends React.Component {
  state = {
    profiles,
  };

  render() {
    const { profiles } = this.state;
    return profiles.map((profiles, i) => (
      <div key={i} className="row border border-dark my-3 d-flex align-items-center w-75">
        <div className="col-3">
          <img src={profiles.img} alt="profileImg" className="w-100" />
        </div>
        <div className="col-6 fs-4">
          <p><b>First name:</b> {profiles.firstName}</p>
          <p><b>Last name:</b> {profiles.lastName}</p>
          <p><b>Country:</b> {profiles.country}</p>
          <p><b>Type:</b> {profiles.isStudent ? 'Student' : 'Teacher'}</p>
        </div>
      </div>
    ));
  }
}

export default Facebook;
