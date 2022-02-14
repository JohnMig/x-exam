import { CALENDAR_OPTIONS } from '../../utils/constant'
import './CalendarContent.css'

const CalendarContent = ({ item, onChangeValue }) => {
  const { title, date, status } = item

  return (
    <div className="calendar-shared-content">
      <div>
        <label>
          TITLE: 
          <input 
            type="text"
            value={title}
            name="title"
            placeholder="TITLE"
            onChange={(e) => onChangeValue(e.target.name, e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          DATE: 
          <input 
            type="text" 
            value={date} 
            name="date" 
            placeholder="DATE"
            onChange={(e) => onChangeValue(e.target.name, e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          STATUS: 
          <input 
            list="status" 
            value={status} 
            name="status" 
            placeholder="STATUS"
            onChange={(e) => onChangeValue(e.target.name, e.target.value)}
          />
        </label>
        <datalist id="status">
          {CALENDAR_OPTIONS.map((opt) => <option key={opt} value={opt} />)}
        </datalist>
      </div>
    </div>
  )
}

export default CalendarContent
