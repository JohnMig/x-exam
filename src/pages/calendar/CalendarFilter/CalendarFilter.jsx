import { connect } from 'react-redux'

import { filterCalendar } from '../../../store/calendar/calendar.action'
import { FILTER_CALENDAR } from '../../../store/types'

import './CalendarFilter.css'

const CalendarFilter = ({ children, dispatch }) => (
  <div>
    <label>
      FILTER:
      <input 
        className="calendar-filter"
        list="status"
        onChange={(e) => dispatch(filterCalendar(FILTER_CALENDAR, e.target.value))}
      />
    </label>
    <datalist id="status">{children}</datalist>
  </div>
)

export default connect()(CalendarFilter)
