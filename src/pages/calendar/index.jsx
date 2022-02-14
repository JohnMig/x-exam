import CalendarContainer from './CalendarContainer/CalendarContainer'
import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarContent from './CalendarContent/CalendarContent'
import CalendarFilter from './CalendarFilter/CalendarFilter'
import CalendarFooter from './CalendarFooter/CalendarFooter'

const Calendar = () => {
  const title = 'Calendar App'

  return (
    <CalendarContainer>
      <CalendarHeader title={title}>
        <CalendarFilter />
      </CalendarHeader>
      <CalendarContent />
      <CalendarFooter />
    </CalendarContainer>
  )
}

export default Calendar
