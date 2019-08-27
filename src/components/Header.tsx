import * as React from 'react';
import { Link } from 'gatsby';

const Header : React.FunctionComponent = () => (
    <div className="p-3 sticky top-0 bg-gray-900">
        <Link to="/"><h1 className="text-center text-xl text-white underline">INPF</h1></Link>
    </div>
);

export default Header;
