import React, { FC, useState } from 'react'

import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from "./LinkNav.module.css";
import { faBell, faCalendar, faCalendarDays, faClockFour } from '@fortawesome/free-solid-svg-icons';
import { links } from 'database/links';

interface Props {
    title: string;
    icon?: IconDefinition;
    border?: boolean;
}

export const LinkNav: FC<Props> = ({ icon, title, border }) => {

    //Vamos agregar una clase de css en caso de no estar HOVER. 
    //en caso de estar en HOVER se le cambiara;
    const [isHover, setIsHover] = useState(false);
    const [modalLinksState, setModalLinksState] = useState(links.filter( l => l.title === title )[0]);

    if ( icon ){
        return (
            <div 
                className='flex col-gap-1 pointer py-3 px-5 relative'
                onMouseOver={ ( ) => setIsHover( true ) } 
                onMouseOut={ ( ) => setIsHover( false ) }   
            >
                <p className={ isHover ? "col-dark" : "col-grey" }>{ title }</p>
                <FontAwesomeIcon
                    icon={ icon }
                    size="sm"
                    className={`transition ${ isHover ? "rotate" : "" } ${ isHover ? "col-dark" : "col-grey" } `}
                />
                {
                    isHover && modalLinksState.modalLinks?.find( m => m.icon ) 
                    ?
                        <div className={` ${style.modalNav}`}>
                            {
                                modalLinksState.modalLinks.map( (m, idx) => (
                                    <div key={ m.title } className={`flex col-gap-3 ${ idx !== 0 ? "mt-3" : "" }`}>
                                        <FontAwesomeIcon 
                                            icon={ m.icon! }
                                            color={ m.color }
                                        />
                                        <p>{ m.title }</p>
                                    </div>
                                ))
                            }
                        </div>
                    : isHover && modalLinksState.modalLinks &&
                        <div className={` ${style.modalNav}`}>
                            {
                                modalLinksState.modalLinks.map( (m, idx )=> (
                                    <div key={ m.title } className={`flex col-gap-3 ${ idx !== 0 ? "mt-3" : "" }`}>
                                        <p>{ m.title }</p>
                                    </div>
                                ))
                            }
                        </div>
                } 
            </div>
        ) 
    }

    return (
        <div
            className={`flex col-gap-1 py-3 px-5 pointer ${ isHover && border ? "border-dark" : border ? "border-grey" : "" }`}
            onMouseOver={ ( ) => setIsHover( true ) }
            onMouseOut={ ( ) => setIsHover( false ) }
        >
            <p className={ isHover ? "col-dark" : "col-grey" }>{ title }</p>
        </div>
    )
}
