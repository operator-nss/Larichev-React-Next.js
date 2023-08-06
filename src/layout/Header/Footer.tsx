import {DetailedHTMLProps, FC, HTMLAttributes, ReactNode} from 'react'
import styles from './footer.module.scss'
import cn from 'classnames'
import {format} from "date-fns";

export interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const Footer: FC<IFooter> = ({className,...props}) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a href="#" target='_blank'>Пользовательское соглашение</a>
      <a href="#" target='_blank'>Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;