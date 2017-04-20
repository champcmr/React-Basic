import React from 'react';

const AddMemberForm = (props) => {
    let firstName, lastName, email, gender = null;
    return (
      <form onSubmit={e => {
            e.preventDefault();
            var input = {
              firstName: firstName.value,
              lastName: lastName.value,
              email: email.value,
              gender: gender.value
            };
            props.submitMember(input);
            e.target.reset();
          }}
            className="form-horizontal m-t-15"
      >
        <div className="form-group">
          <label className="col-sm-4 control-label">First Name: </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="firstName"
              ref={node => firstName = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="form-group">
          <label className="col-sm-4 control-label">Last Name: </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="lastName"
              ref={node => lastName = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="form-group">
          <label className="col-sm-4 control-label">Email: </label>
          <div className="col-sm-8">
            <input
              type="email"
              name="email"
              ref={node => email = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="form-group">
          <label className="col-sm-4 control-label">Gender: </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="gender"
              ref={node => gender = node}
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="form-group">
          <div className="col-sm-offset-4 col-sm-8">
            <input type="submit" className="btn btn-default"/>
          </div>
        </div>
      </form>
    );
};

export default AddMemberForm;
