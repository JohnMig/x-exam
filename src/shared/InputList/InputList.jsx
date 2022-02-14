import './InputList.css'

const InputList = ({ list, value, name, placeholder, handleChangeValue, className }) => (
  <input 
    list={list}
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={(e) => handleChangeValue(e)}
    className={className}
  />
)

InputList.defaultProps = {
  value: '',
  name: '',
  placeholder: '',
  className: ''
}

export default InputList
