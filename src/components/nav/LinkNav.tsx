import React, { FC, useState } from 'react'

import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from "./LinkNav.module.css";
import { faBell, faCalendar, faCalendarDays, faClockFour } from '@fortawesome/free-solid-svg-icons';

interface Props {
    title: string;
    icon?: IconDefinition;
    border?: boolean;
}

export const LinkNav: FC<Props> = ({ icon, title, border }) => {

    //Vamos agregar una clase de css en caso de no estar HOVER. 
    //en caso de estar en HOVER se le cambiara;
    const [isHover, setIsHover] = useState(false);

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
                    isHover &&
                    <div className={` ${style.modalNav}`}>
                        <div className='flex col-gap-3'>
                            <FontAwesomeIcon 
                                icon={ faCalendarDays }
                                color="#3f51b5"
                            />
                            <p>Todo List</p>
                        </div>
                        <div className='flex col-gap-3 mt-3'>
                            <FontAwesomeIcon 
                                icon={ faCalendar }
                                color="#03a9f4"
                            />
                            <p>Calendar</p>
                        </div>
                        <div className='flex col-gap-3 mt-3'>
                            <FontAwesomeIcon 
                                icon={ faBell }
                                color="#cddc39"
                            />
                            <p>Reminders</p>
                        </div>
                        <div className='flex col-gap-3 mt-3'>
                            <FontAwesomeIcon 
                                icon={ faClockFour }
                                color="hsl(266deg 75% 44%)"
                            />
                            <p>Planning</p>
                        </div>
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
