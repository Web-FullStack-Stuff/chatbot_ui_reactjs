import ToggleIconImg from '/src/assets/chatbot.png'

const ToggleIcon = () => {
  const toggleChat = () => {
    console.log('toggle')
  }
  return (
    <>
      <span className='ToggleIcon' onClick={toggleChat}>
        <img className='ToggleIconImg' src={ToggleIconImg} alt='chatbot_icon' />
      </span>
    </>
  )
}

export default ToggleIcon
