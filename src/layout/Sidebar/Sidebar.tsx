import {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react'
import styles from './sidebar.module.scss'
import cn from 'classnames'

export interface ISidebar extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const Sidebar: FC<ISidebar> = ({...props}) => {
  return (
    <div {...props}>
      Sidebar
    </div>
  );
};

export default Sidebar;