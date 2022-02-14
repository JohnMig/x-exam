import { useState } from 'react'
import { connect } from 'react-redux'

import CalendarContainer from '../../hoc/CalendarContainer/CalendarContainer'
import CalendarHeader from '../../layouts/CalendarHeader/CalendarHeader'
import CalendarContent from '../../layouts/CalendarContent/CalendarContent'
import CalendarFooter from '../../layouts/CalendarFooter/CalendarFooter'

import Button from '../../shared/Button/Button'
import Success from '../../shared/Success/Success'

import { post } from '../../utils/http'
import { CREATED, ERROR, REQUIRED, INVALID_STATUS, CALENDAR_URL } from '../../utils/constant'
import { isValidCalendar, isValidStatus } from '../../utils/validator'

import { createCalendar } from '../../store/calendar/calendar.action'
import { CREATE_CALENDAR } from '../../store/types'

const CalendarNew = ({ dispatch }) => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState(true)
  const [item, setItem] = useState({
    title: '',
    date: '',
    status: 'PENDING'
  })

  const handleChangeValue = (evt) => {
    const { name, value } = evt.target
    const newItem = { ...item }
    newItem[name] = value
    setItem(newItem)
  }

  const handleClick = async () => {
    if (isValidCalendar(item)) {
      if (isValidStatus(item.status)) {
        const data = await post(`${CALENDAR_URL}`, item)
        if (data) {
          setMessage(CREATED)
          setError(false)
          dispatch(createCalendar(CREATE_CALENDAR, data))
        } else setMessage(ERROR)
      } else setMessage(INVALID_STATUS)
    } else setMessage(REQUIRED)
  }

  const title = 'CREATE'

  return (
    <CalendarContainer>
      <CalendarHeader title={title} />
      <CalendarContent item={item} onChangeValue={handleChangeValue} />
      <CalendarFooter>
        <Success message={message} error={error} />
        <Button value="ADD" onClick={handleClick} />
      </CalendarFooter>
    </CalendarContainer>
  )
}

export default connect()(CalendarNew)
