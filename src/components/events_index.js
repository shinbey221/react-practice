import React, { Component } from 'react'
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class EventsIndex extends Component {
  componentDidMount () {
    this.props.readEvents()
  }

  renderEvents () {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  renderFloatingActionButton () {
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12
    }
    return (
      <FloatingActionButton style={style}>
        <ContentAdd />
      </FloatingActionButton>
    )
  }

  render () {
    return (
      <React.Fragment>
        <Link to="events/new">
          {this.renderFloatingActionButton()}
        </Link>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { events: state.events }
}
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
