import { CALENDAR_OPTIONS } from '../../../../utils/constant'

const FilterOptions = () => {
  return CALENDAR_OPTIONS.map((opt) => <option key={opt} value={opt} />)
}

export default FilterOptions
