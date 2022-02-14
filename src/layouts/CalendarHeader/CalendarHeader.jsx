import { Link } from "react-router-dom"
import './CalendarHeader.css'

const CalendarHeader = ({ title }) => {
  return (
    <div className="calendar-shared-header">
      <Link to="/">BACK</Link>
      <div>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default CalendarHeader
