import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { postEvent } from '../actions'
import { Link } from 'react-router-dom'
class EventsNew extends Component {
  render () {
    return (
      <React.Fragment>
        foo
      </React.Fragment>
    )
  }
}

// const mapStateToProps = state => ({ events: state.events })
// const mapDispatchToProps = ({ readEvents })

export default connect(null, null)(EventsNew)
