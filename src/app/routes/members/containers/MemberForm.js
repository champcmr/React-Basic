import { connect } from 'react-redux';
import AddMember from '../components/MemberForm';
import { saveMember } from '../actions';

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMember: member => dispatch(saveMember(member))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
