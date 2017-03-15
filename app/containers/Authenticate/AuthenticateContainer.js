import React, {PropTypes} from 'react';
import {Authenticate} from 'components';
import auth from 'helpers/auth';
import {connect} from 'react-redux';
import * as userActionCreators from 'redux/modules/users';
console.log(userActionCreators);
const AuthenticateContainer = React.createClass({
    propTypes: {
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.string.isRequired
    },
  handleAuth(){
    this.props.dispatch(userActionCreators.fetchingUser());
    auth().then((user) => {
      this.props.dispatch(userActionCreators.fetchingUserSuccess(user.uid, user, Date.now()));
      this.props.dispatch(userActionCreators.authUser(user.uid));
    }).catch((error) => this.props.dispatch(userActionCreators.fetchingUserFailure(error)))
  },
  render() {
    console.log('Is Fetching ', this.props.isFetching);
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    );
  }
});
function mapStateToProps(state) {
  console.log('State ', state)
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}
export default connect(mapStateToProps)(AuthenticateContainer);
