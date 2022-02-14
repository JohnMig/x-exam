import { useState } from 'react'
import { connect } from 'react-redux'

import Label from '../../../shared/Label/Label'
import InputList from '../../../shared/InputList/InputList'
import DataList from '../../../shared/DataList/DataList'

import { filterCalendar } from '../../../store/calendar/calendar.action'
import { FILTER_CALENDAR } from '../../../store/types'

import './CalendarFilter.css'

const CalendarFilter = ({ dispatch }) => {
  const [value, setValue] = useState('')

  const onChangeValue = (evt) => {
    const data = evt.target.value
    setValue(data)
    dispatch(filterCalendar(FILTER_CALENDAR, data))
  }

  return (
    <div>
      <Label title="FILTER">
        <InputList list="status" value={value}  handleChangeValue={onChangeValue} />
      </Label>
      <DataList id="status" />
    </div>
  )
}

export default connect()(CalendarFilter)
