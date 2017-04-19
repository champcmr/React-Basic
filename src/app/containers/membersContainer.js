import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import Members from '../components/member/members.component';
import * as memberAction from '../actions/memberAction';


const mapStateToProps = (state, ownProps) => {
  return {
    membersList: state.members
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMembersList: function() {
      dispatch(memberAction.fetchMembers());
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Members);
