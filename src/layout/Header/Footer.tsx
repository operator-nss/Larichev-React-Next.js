import {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react'
import styles from './footer.module.scss'
import cn from 'classnames'

export interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const Footer: FC<IFooter> = ({...props}) => {
  return (
    <div {...props}>
      Footer
    </div>
  );
};

export default Footer;