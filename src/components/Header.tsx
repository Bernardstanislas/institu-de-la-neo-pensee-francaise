import * as React from 'react';
import { Link } from 'gatsby';

const Header : React.FunctionComponent = () => (
    <div className="sticky top-0 bg-gray-900 z-10">
        <Link to="/"><div className="text-center text-4xl lg:text-5xl text-white tracking-widest">INPF</div></Link>
    </div>
);

export default Header;
