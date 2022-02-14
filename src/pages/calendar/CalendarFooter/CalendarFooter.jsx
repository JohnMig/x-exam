import { Link } from 'react-router-dom'
import './CalendarFooter.css'

const CalendarFooter = () => {
  return (
    <div className="calendar-footer">
      <div>
        <Link to="new">
          <button className="btn-primary">ADD</button>
        </Link>
      </div>
    </div>
  )
}

export default CalendarFooter
