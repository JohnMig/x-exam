const Input = ({ value, name, placeholder, handleChangeValue }) => (
  <input 
    type="text"
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={(e) => handleChangeValue(e)}
  />
)

Input.defaultProps = {
  value: '',
  name: '',
  placeholder: ''
}

export default Input
