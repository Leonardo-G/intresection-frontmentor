import React, { FC, useState } from 'react'

import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    title: string;
    icon?: IconDefinition;
    border?: boolean;
}

export const LinkNav: FC<Props> = ({ icon, title, border }) => {

    //Clase de css en caso de no estar HOVER. 
    //COL-DARK en caso de estar en HOVER;
    const [isHover, setIsHover] = useState("col-grey");

    if ( icon ){
        return (
            <div 
                className='flex col-gap-1 pointer py-3 px-5'
                onMouseOver={ ( ) => setIsHover( "col-dark" ) } 
                onMouseOut={ ( ) => setIsHover( "col-grey" ) }   
            >
                <p className={ isHover }>{ title }</p>
                <FontAwesomeIcon
                    icon={ icon }
                    size="sm"
                    className={`transition ${ isHover === "col-dark" ? "rotate" : "" } ${isHover} `}
                />
            </div>
        ) 
    }

    return (
        <div 
            className={`flex col-gap-1 py-3 px-5 pointer ${ isHover === "col-dark" && border ? "border-dark" : border ? "border-grey" : "" }`}
            onMouseOver={ ( ) => setIsHover( "col-dark" ) }
            onMouseOut={ ( ) => setIsHover( "col-grey" ) }
        >
            <p className={ isHover }>{ title }</p>
        </div>
    )
}
