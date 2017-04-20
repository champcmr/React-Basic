import { connect } from 'react-redux';
import Tasks from '../../components/tasks/tasks.component';
import * as taskAction from '../../actions/taskAction';


const mapStateToProps = (state, ownProps) => {
  return {
    tasksList: state.tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasksList: (memberId) => {
      dispatch(taskAction.fetchTasks(memberId));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
