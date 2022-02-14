import { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Calendar from './pages/calendar'
import CalendarNew from './pages/calendar-new'
import CalendarStatus from './pages/calendar-status'

import { storeCalendar } from './store/calendar/calendar.action'
import { STORE_CALENDAR } from './store/types'

import { get } from './utils/http'
import { CALENDAR_URL } from './utils/constant'

import './App.css'

const App = ({ dispatch }) => {

  useEffect(() => {
    (async () => {
      const data = await get(`${CALENDAR_URL}`)
      if (data) dispatch(storeCalendar(STORE_CALENDAR, data))
    })()
  }, [])

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="new" element={<CalendarNew />} />
          <Route path="status/:id" element={<CalendarStatus />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default connect(
  ({ calendar }) => ({ calendar })
)(App)
