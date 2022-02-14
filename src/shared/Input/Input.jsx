import './Input.css'

const Input = ({ value, name, placeholder, handleChangeValue, className }) => (
  <input 
    type="text"
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={(e) => handleChangeValue(e)}
    className={className}
  />
)

Input.defaultProps = {
  value: '',
  name: '',
  placeholder: '',
  className: ''
}

export default Input
