import * as React from 'react';
import '../style/index.css';

type Props = {
    children: React.ReactNode
}
const Layout : React.FunctionComponent<Props> = ({ children }) => (
    <div className="container p-5">
        {children}
    </div>
);

export default Layout;
