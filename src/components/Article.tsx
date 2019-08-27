import * as React from 'react';
import {Link} from "gatsby";

type Props = {
    title: string,
    date: string,
    description: string,
    link: string,
    id: string
    position: number
}

const Article : React.FunctionComponent<Props> = ({ link, title, date, description, id, position }) => {
    const odd = position % 2;
    return (
        <Link to={link} key={id}>
            <div className={`p-4 ${odd ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex justify-between mb-2">
                    <div><h1 className={`text-xl ${odd ? 'text-white' : 'text-black'}`}>{title}</h1></div>
                    <div className={`text-sm ${odd ? 'text-gray-200' : 'text-gray-600'}`}><i>{date}</i></div>
                </div>
                <div className={`text-sm ${odd ? 'text-white' : 'text-black'}`}>
                    {description}
                </div>
            </div>
        </Link>
    );
};

export default Article;
