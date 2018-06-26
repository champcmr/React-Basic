import { connect } from 'react-redux';
import AddTask from '../components/TaskForm';
import { saveTask } from '../actions';
 
const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: task => dispatch(saveTask(task))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddTask);
