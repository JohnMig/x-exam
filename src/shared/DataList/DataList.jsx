import { CALENDAR_OPTIONS } from '../../utils/constant'

const DataList = ({ id }) => {
  return (
    <datalist id={id}>
      {CALENDAR_OPTIONS.map((opt) => <option key={opt} value={opt} />)}
    </datalist>
  )
}

export default DataList
