import {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react'
import styles from './tag.module.scss'
import cn from 'classnames'

export interface IP extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary'
  href?: string
}

const Tag: FC<IP> = ({size = 's', className, color = 'ghost', href, children}, ...props) => {

  return (
    <div className={cn(styles.tag, className, {
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
      [styles.ghost]: color === 'ghost',
      [styles.red]: color === 'red',
      [styles.grey]: color === 'grey',
      [styles.green]: color === 'green',
      [styles.primary]: color === 'primary'
    })}>
      {href
        ? <a href={href}>{children}</a>
        : <>{children}</>}

    </div>
  )

};

export default Tag;