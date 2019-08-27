import * as React from 'react';
import '../style/index.css';
import Header from "./Header";

type Props = {
    children: React.ReactNode,
    padding?: boolean
}
const Layout : React.FunctionComponent<Props> = ({ children, padding = true }) => (
    <div className="container">
        <Header/>
        <div className={padding ? "p-5" : ""}>
            {children}
        </div>
    </div>
);

export default Layout;
