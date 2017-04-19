import React from 'react';
import { connect } from 'react-redux';
import configureStore from '../../store/configureStore';

import * as memberAction from '../../actions/memberAction';

const store = configureStore();


export default class Members extends React.Component {
    constructor(props) {
        super(props);
        console.log('called Member constructor', props);
        // this.state = {
        //     membersList: []
        // };
    }

    componentDidMount() {
        // this.loadMembers();
    }

    componentWillMount() {
         this.loadMembers(); 
    }

    loadMembers() {
        console.log('called loadMembers');
        let {getMembersList} = this.props;
        getMembersList();
        // memberAction.fetchMembers();
    }

    memberData = () => {
       return this.props.membersList.map((member) => {
            return (
                <tr key={member._id} >
                    <td>{member.firstName}</td>
                    <td>{member.lastName}</td>
                    <td>{member.email}</td>
                    <td>{member.gender}</td>
                    <td>
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-primary"><span className="glyphicon glyphicon-edit"></span></button>
                            <button type="button" className="btn btn-sm btn-danger"><span className="glyphicon glyphicon-trash"></span></button>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 text-left">
                        <h3 className="p-0 m-0 page-header">Members List</h3>
                    </div>
                    <div className="col-xs-6 text-right">
                        <button className="btn btn-primary">Add Member</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12"> 
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.memberData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     membersList: state.members
//   }
// };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     createBook: book => dispatch(bookActions.createBook(book))
// //   }
// // };

// export default connect(mapStateToProps)(Members);
