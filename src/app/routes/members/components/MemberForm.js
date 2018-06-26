import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class AddMember extends Component {
	saveMember = (memberObj) => {
    const { addNewMember } = this.props		
		if(memberObj){
      addNewMember(memberObj);
      browserHistory.push('/');
		}
  }
  
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

	render() {    
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-6 text-left">
						<h3 className="p-0 m-0 page-header">Add Member Form</h3>            
            <form name="memberForm" onSubmit={e => {
              e.preventDefault();
              let fname = document.memberForm.firstName.value;
              let lname = document.memberForm.lastName.value;
              let email = document.memberForm.email.value;
              let gender = document.memberForm.gender.value;
                
              if (fname == null || fname == "" || lname == null || lname == "" || email == null || email == "" || gender == null || gender == "") {
                if (fname == null || fname == "") {
                  document.getElementById("fNameErr").innerHTML = "Please input first name";
                }
                if (lname == null || lname == "") {
                  document.getElementById("lNameErr").innerHTML = "Please input Last name";
                }
                if (email == null || email == "") {
                  document.getElementById("emailErr").innerHTML = "Please input email";
                }
                if (gender == null || gender == "") {
                  document.getElementById("genderErr").innerHTML = "Please input gender";
                }
                return false;
              } else {
                if (this.validateEmail(email)) {
                     let newMemberObj = {
                        firstName: fname,
                        lastName: lname,
                        email: email,
                        gender: gender
                      };
        
                  this.saveMember(newMemberObj);
                  e.target.reset();
                } else {
                  document.getElementById("emailErr").innerHTML = "Please input valid email";
                  return false;
                }
              }
            }}
              className="form-horizontal m-t-15"
            >
              <div className="form-group">
                <label className="col-sm-4 control-label">First Name: </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control" />
                  <span id="fNameErr"></span>
                </div>
              </div>
              <br />
              <div className="form-group">
                <label className="col-sm-4 control-label">Last Name: </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control" />
                  <span id="lNameErr"></span>
                </div>
              </div>
              <br />
              <div className="form-group">
                <label className="col-sm-4 control-label">Email: </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="email"
                    className="form-control" />
                  <span id="emailErr"></span>
                </div>
              </div>
              <br />
              <div className="form-group">
                <label className="col-sm-4 control-label">Gender: </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="gender"
                    className="form-control" />
                  <span id="genderErr"></span>
                </div>
              </div>
              {/*<div className="form-group">
                <label className="col-sm-4 control-label">Gender: </label>
                <div className="col-sm-8">
                    <label className="radio-inline">
                    <input type="radio" name="gender" value="male" checked="true"/>Male
                    </label>
                    <label className="radio-inline">
                    <input type="radio" name="gender" value="female"/>Female
                    </label>
                    <span id="genderErr"></span>
                </div>
              </div>*/}
              <br />
              <div className="form-group">
                <div className="col-sm-offset-4 col-sm-8">
                  <input type="submit" className="btn btn-default" />
                </div>
              </div>
            </form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddMember