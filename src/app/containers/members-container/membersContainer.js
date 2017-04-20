import { connect } from 'react-redux';
import Members from '../../components/members/members.component';
import * as memberAction from '../../actions/memberAction';


const mapStateToProps = (state, ownProps) => {
  return {
    membersList: state.members
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMembersList : () => {
      dispatch(memberAction.fetchMembers());
    },
    deleteMember : (removeMember) => {
      dispatch(memberAction.deleteMember(removeMember));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Members);
