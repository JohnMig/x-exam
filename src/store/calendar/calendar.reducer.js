import { CALENDAR_OPTIONS } from '../../utils/constant'
import {
  CREATE_CALENDAR,
  UPDATE_CALENDAR,
  DELETE_CALENDAR,
  FILTER_CALENDAR,
  STORE_CALENDAR
} from '../types'

const initialState = {
  filtered: [],
  data: []
}

export const calendar = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case STORE_CALENDAR:
      return { filtered: payload, data: payload }
    case CREATE_CALENDAR:
      return {
        filtered: [payload, ...state.data],
        data: [payload, ...state.data]
      }
    case UPDATE_CALENDAR:
      const newData = state.data.map((d) => (
        d.id === payload.id ? payload : d
      ))
      return { filtered: newData, data: newData }
    case DELETE_CALENDAR:
      const deletedData = state.data.filter((d) => d.id !== payload)
      return { filtered: deletedData, data: deletedData }
    case FILTER_CALENDAR:
      const data = state.data

      if (!payload || !CALENDAR_OPTIONS.includes(payload))
        return { data, filtered: data }

      return {
        data,
        filtered: data.filter(({ status }) => (
          status?.toUpperCase() === payload
        ))
      }
    default:
      return state
  }
}
