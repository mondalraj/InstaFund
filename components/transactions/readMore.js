import { useState } from "react";
export default function ReadMore({ children }){
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {setIsReadMore(!isReadMore)};
    return (
        <p className="text-base py-2">
            {isReadMore ? text.slice(0, 230): text }
            {text.length > 230 &&
                <span onClick={toggleReadMore} className="cursor-pointer">
                    {isReadMore ? '...read more' : ' ...show less'}
                </span>
            }
        </p>
    );
}