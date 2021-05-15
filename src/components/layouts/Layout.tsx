import Header from "../sections/Header"
import { Main, Footer } from "grommet"

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer>
        <p>This is the footer.</p>
      </Footer>
    </>
  )
}
