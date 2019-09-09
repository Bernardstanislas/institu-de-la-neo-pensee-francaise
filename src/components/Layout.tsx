import * as React from 'react';
import '../style/index.css';
import Header from "./Header";

type Props = {
    children: React.ReactNode
}
const Layout : React.FunctionComponent<Props> = ({ children }) => (
    <div className="h-screen">
        <Header/>
        <div className="h-full">
            {children}
        </div>
    </div>
);

export default Layout;
