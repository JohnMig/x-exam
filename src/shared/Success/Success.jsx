import './Success.css'

const Success = ({ message, error }) => {
  const color = message && error ? '#f32323' : '#3d8b3d'

  return (
    <div 
      className="calendar-shared-message"
      style={{ color }}
    >
      {message}
    </div>
  )
}

export default Success
