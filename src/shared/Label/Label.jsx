const Label = ({ title, children }) => {
  return (
    <label>
      {title}:
      {children}
    </label>
  )
}

export default Label