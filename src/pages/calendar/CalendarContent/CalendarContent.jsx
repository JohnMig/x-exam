import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteCalendar } from '../../../store/calendar/calendar.action'
import { DELETE_CALENDAR } from '../../../store/types'

import { destroy } from '../../../utils/http'
import { CALENDAR_URL } from '../../../utils/constant'

import './CalendarContent.css'

const CalendarContent = ({ calendar, dispatch }) => {
  const handleClick = async (id) => {
    const result = confirm('Are you sure you want to delete?')
    if (result) {
      const data = await destroy(`${CALENDAR_URL}/${id}`)
      if (data) dispatch(deleteCalendar(DELETE_CALENDAR, id))
    }
  }

  return (
    calendar.filtered.map(({ id, title, status, date }) => (
      <div className="calendar-content" key={id}>
        <div className="calendar-content_delete" onClick={() => handleClick(id)}>&#10006;</div>
        <Link to={`status/${id}`}>
          <div className="calendar-content_title">{title}</div>
          <div className="calendar-content_status">
            <div className={`calendar-content_status-text ${status?.toLowerCase()}`}>{status}</div>
            <div className="calendar-content_status-date">{`${date?.charAt(0)?.toUpperCase()}${date?.slice(1)}`}</div>
          </div>
        </Link>
      </div>
    ))
  )
}

export default connect(
  ({ calendar }) => ({ calendar })
)(CalendarContent)
