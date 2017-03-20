import React, {PropTypes} from 'react'
import {container, innerContainer} from './styles.css';
import {connect} from 'react-redux'
import {Navigation} from 'components'
const MainContainer = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool.isRequired,
  },
  render () {
    console.log('props ',this.props)
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  },
})

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(MainContainer)
