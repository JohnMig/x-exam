import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

import CalendarContainer from '../../hoc/CalendarContainer/CalendarContainer'
import CalendarHeader from '../../layouts/CalendarHeader/CalendarHeader'
import CalendarContent from '../../layouts/CalendarContent/CalendarContent'
import CalendarFooter from '../../layouts/CalendarFooter/CalendarFooter'

import Button from '../../shared/Button/Button'
import Success from '../../shared/Success/Success'

import { get, put } from '../../utils/http'
import { UPDATED, ERROR, REQUIRED, INVALID_STATUS, CALENDAR_URL } from '../../utils/constant'
import { isValidCalendar, isValidStatus } from '../../utils/validator'

import { updateCalendar } from '../../store/calendar/calendar.action'
import { UPDATE_CALENDAR } from '../../store/types'

const CalendarStatus = ({ dispatch }) => {
  const id = useParams()?.id
  const [item, setItem] = useState({
    title: '',
    date: '',
    status: ''
  })
  const [redirect, setRedirect] = useState(false)
  const [error, setError] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    (async () => {
      if (!isNaN(id)) {
        const selectedId = Math.trunc(id)
        const data = await get(`${CALENDAR_URL}/${selectedId}`)
        if (data) setItem(data)
        else setRedirect(true)
      }
    })()
  }, [])

  const handleChangeValue = (name, value) => {
    const newItem = { ...item }
    newItem[name] = name === 'title' ? value.toUpperCase() : value
    setItem(newItem)
  }

  const handleClick = async () => {
    if (isValidCalendar(item)) {
      if (isValidStatus(item.status)) {
        const data = await put(`${CALENDAR_URL}/${item.id}`, item)
        if (data) {
          setMessage(UPDATED)
          setError(false)
          dispatch(updateCalendar(UPDATE_CALENDAR, data))
        } else setMessage(ERROR)
      } else setMessage(INVALID_STATUS)
    } else setMessage(REQUIRED)
  }

  return redirect
    ? <Navigate to="/" />
    : <CalendarContainer>
        <CalendarHeader title={item.title} />
        <CalendarContent item={item} onChangeValue={handleChangeValue} />
        <CalendarFooter>
          <Success message={message} error={error} />
          <Button value="UPDATE" onClick={handleClick} />
        </CalendarFooter>
      </CalendarContainer>
}

export default connect()(CalendarStatus)
