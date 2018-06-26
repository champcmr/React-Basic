import { connect } from 'react-redux';
import Members from '../components/Members';
import { fetchMembers, deleteMember } from '../actions';

const mapStateToProps = (state) => {
  return {
    membersList: state.members
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMembersList : function () {
      dispatch(fetchMembers());
    },
    deleteMember : function(removeMember){
      dispatch(deleteMember(removeMember));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Members);
