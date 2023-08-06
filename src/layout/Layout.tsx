import {Component, DetailedHTMLProps, FC, FunctionComponent, HTMLAttributes, ReactNode} from 'react'
import cn from 'classnames'
import Header from "@/layout/Footer/Header";
import Sidebar from "@/layout/Sidebar/Sidebar";
import Footer from "@/layout/Header/Footer";

export interface ILayout {
  children: ReactNode
}


const Layout: FC<ILayout> = ({children}) => {
  return (
    <div>
      <Header/>
      <div>
        <Sidebar/>
        <div>
          {children}
        </div>
      </div>
      <Footer/>
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