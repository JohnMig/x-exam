
import { CALENDAR_OPTIONS } from './constant'

export const isValidCalendar = (item) => {
  return item.title && item.date && item.status
}

export const isValidStatus = (status) => {
  return CALENDAR_OPTIONS.includes(status.toUpperCase())
}
