const DataList = ({ id, options }) => {
  return (
    <datalist id={id}>
      {options.map((opt) => <option key={opt} value={opt} />)}
    </datalist>
  )
}

export default DataList
