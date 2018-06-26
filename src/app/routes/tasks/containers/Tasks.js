import { connect } from 'react-redux';
import Tasks from '../components/Tasks';
import { fetchTasks, deleteTask } from '../actions';
 
const mapStateToProps = (state) => {
  return {
    tasksList: state.tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTasksList: function(memberId){
      dispatch(fetchTasks(memberId));
    },
    deleteTask : function(removeTask){
      dispatch(deleteTask(removeTask));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
