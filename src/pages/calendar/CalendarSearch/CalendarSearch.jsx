import { useState } from 'react'
import { connect } from 'react-redux'

import Label from '../../../shared/Label/Label'
import Input from '../../../shared/Input/Input'

import { searchCalendar } from '../../../store/calendar/calendar.action'
import { SEARCH_CALENDAR } from '../../../store/types'

import './CalendarSearch.css'

const CalendarSearch = ({ dispatch }) => {
  const [value, setValue] = useState('')

  const onChangeValue = (evt) => {
    const data = evt.target.value
    setValue(data)
    dispatch(searchCalendar(SEARCH_CALENDAR, data))
  }

  return (
    <div className="calendar-search-filter">
      <Label title="SEARCH">
        <Input value={value} handleChangeValue={onChangeValue} className="calendar-search" />
      </Label>
    </div>
  )
}

export default connect()(CalendarSearch)
