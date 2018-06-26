import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class AddTask extends Component{
    saveTask = (newTaskObj) => {
       this.props.addNewTask(newTaskObj);
       browserHistory.push('/task-list/'+newTaskObj.refMemberId);
    }

    render(){
        const { params } = this.props
        let title , dueDate = null;

        return(
            <div className="container">
                <div className="row">
                     <div className="col-xs-6 text-left">
                        <h3 className="p-0 m-0 page-header">Add Task Form</h3>
                        <form onSubmit={e => {
                            e.preventDefault();
                            let taskObject = {
                              refMemberId: params.memberId,
                              title: title.value,
                              status: false,
                              dueDate: dueDate.value
                            };
                            this.saveTask(taskObject);
                            e.target.reset();
                          }}
                            className="form-horizontal m-t-15"
                      >
                        <div className="form-group">
                          <label className="col-sm-4 control-label">Title: </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              name="taskTitle"
                              ref={node => title = node}
                              className="form-control" />
                          </div>
                        </div>
                        <br/>
                        <div className="form-group">
                          <label className="col-sm-4 control-label">Due Date: </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              name="taskDueDate"
                              ref={node => dueDate = node}
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
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask