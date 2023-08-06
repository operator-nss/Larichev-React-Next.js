import {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react'
import styles from './p.module.scss'
import cn from 'classnames'

export interface IP extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  size?: 's' | 'm' | 'l'
  children: ReactNode
}

const P: FC<IP> = ({size = 'm',className, children}, ...props) => {

  return (
    <p className={cn(styles.p, className, {
      [styles.m]: size === 'm',
      [styles.l]: size === 'l',
      [styles.s]: size === 's'
    })}
       {...props}
    >
      {children}
    </p>
  )

};

export default P;