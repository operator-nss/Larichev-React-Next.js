import {ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode} from 'react'
import styles from './button.module.scss'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  appearance?: 'primary' | 'ghost'
  arrow?: 'right' | 'down' | 'none'
}

const Button: FC<IButton> = ({appearance = 'primary',arrow = 'none', children, ...props}) => {
  return (
    <button className={cn(styles.button, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost'
    })}
            {...props}
    >
      {children}
      {arrow !== 'none' && <span className={cn(styles.arrow, {
        [styles.down]: arrow === 'down',
        [styles.right]: arrow === 'right'
      })}><ArrowIcon /></span>}
    </button>
  );
};

export default Button;