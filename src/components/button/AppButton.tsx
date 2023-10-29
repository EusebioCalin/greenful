const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      className='bg-color-ternary  hover:bg-color-fourth  py-2 px-4 rounde text-white'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
