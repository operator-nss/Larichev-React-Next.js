import {Component, DetailedHTMLProps, FC, FunctionComponent, HTMLAttributes, ReactNode} from 'react'
import cn from 'classnames'
import Header from "@/layout/Footer/Header";
import Sidebar from "@/layout/Sidebar/Sidebar";
import Footer from "@/layout/Header/Footer";
import styles from './layout.module.scss'

export interface ILayout {
  children: ReactNode
}


const Layout: FC<ILayout> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <div className={styles.main}>
        {children}
      </div>
      <Footer className={styles.footer}/>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    )
  }
}