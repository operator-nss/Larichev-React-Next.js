import {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react'
import styles from './header.module.scss'
import cn from 'classnames'

export interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const Header: FC<IHeader> = ({...props}) => {
  return (
    <div {...props}>
      Header
    </div>
  );
};

export default Header;