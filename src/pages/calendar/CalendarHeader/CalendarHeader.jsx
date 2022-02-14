import './CalendarHeader.css'

const CalendarHeader = ({ title, children }) => (
  <div className="calendar-header">
    <div>
      <h2 className="calendar-header_text">{title}</h2>
    </div>
    <div>
      {children}
    </div>
  </div>
)

export default CalendarHeader
