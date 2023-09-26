import cn from 'classnames'
import styles from './CustomButton.module.scss'

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      className={cn(
        styles.customBtn,
        `
        rounded-md 
        hover:rounded-sm
        cursor-pointer transition-all relative w-36  

        shadow-new-custom-button
        btn-7

        before:absolute
        before:right-0
        before:bottom-0
        after:absolute
        after:right-0
        after:bottom-0

        before:bg-color-secondary
        after:bg-color-secondary

        before:transition-all
        after:transition-all

        before:h-0
        after:w-0

        before:w-0.5
        after:h-0.5

        hover:bg-transparent
        hover:text-color-secondary
        
        hover:before:h-full
        hover:after:w-full
        leading-10
        text-center
        bg-color-primary
        hover:bg-gradient-to-r hover:from-transparent hover:to-transparent
        `,
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          styles.customSpan,
          `
          relative w-full h-full
          block
          before:absolute
          before:left-0
          before:top-0
          after:absolute
          after:left-0
          after:top-0

          before:bg-color-secondary
          after:bg-color-secondary
      
          before:transition-all
          after:transition-all

          before:h-0
          after:w-0

          before:w-0.5
          after:h-0.5

          hover:before:h-full
          hover:after:w-full

          custom-span
      `,
        )}
      >
        {text}
      </span>
    </button>
  )
}

export default Button
