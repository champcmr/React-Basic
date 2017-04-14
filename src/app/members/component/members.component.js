import React from 'react';

export default class Members extends React.Component {
    constructor(props) {
        super(props);
        console.log('called Member constructor', props);
        this.state = {
            membersList: []
        };
    }

    componentDidMount() {
        this.loadMembers();
    }

    componentWillUnmount() {

    }

    loadMembers() {
        fetch('http://localhost:3000/api/members', {
            method: 'GET'
        }).then((response) => {
            return response.json()
        }).then((json) => {
            this.setState({ membersList: json });
        });
    }

    memberData = () => {
       return this.state.membersList.map((member) => {
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
        );
    }
}

