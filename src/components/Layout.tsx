// import { useLocation } from "react-router-dom";
// import { useMemo } from "react";
import Header from "./navigation/Header";

type Props = {
     children: React.ReactNode;
     routes?: {name: string, path: string}[]
}

const Layout = ({...props}:Props) => {
    return <div className='demo-layout px-7 pt-7 md:pt-9 md:px-14'>
        <Header />
        <main>{props.children}</main>
        {/* <Footer isHomePage={isRedesignPage}/> */}
      </div>
}

export default Layout;
