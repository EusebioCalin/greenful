const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      className='bg-color-primary  hover:bg-primary-darker  py-2 px-4 rounded'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
