'use client'
import { useState } from 'react';
import Link from 'next/link';
// import $ from 'jquery';

const ExpandableText = ({ children, descriptionLength }) => {
    const fullText = children;

    // Set the initial state of the text to be collapsed
    const [isExpanded, setIsExpanded] = useState(false);

    // This function is called when the read more/less button is clicked
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='text'>
            {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}..`}
            <pre>
                <span onClick={toggleText} className='toggle-button'>
                    {isExpanded ? 'See less' : 'See more...'}
                </span>
            </pre>
        </div>
    );
};

export default function Page() {
    return (
        <div className='px-5 sm:px-14'>
            <div className="py-10" style={{ display: "grid" }}>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto" }} className="">
                    
                </div>
                <div className="grid grid-cols-1 gap-y-5 pt-20" contextMenu="false">
                    <h6 className="" style={{ width: "50%" }}></h6>
                    
                    {/* <a href="#" @click = "truncate = false" x-show="truncate" x-on: click.prevent = "tab = 'view'" style = "font-weight:bold; font-size:14pt;">See more...</a>
                    <a x-show="!truncate" href="#" @click = "truncate = true" x-on: click.prevent = "tab = 'view'" style = "font-weight:bold; font-size:14pt;">See less</a> */}
                    
                </div>
            </div>
        </div >
    );
}
