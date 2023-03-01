import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { links } from 'database/links';
import { LinkNav } from './LinkNav';

import style from "./NavBar.module.css";

export const NavBar = () => {

    const [openNav, setOpenNav] = useState(false);

    return (
        <header>
            <nav className='flex p-4 f-auto s-between col-center'>
                <div className='flex col-center col-gap-5'>
                    <p className='size-6 bold'>snap</p>
                    <div className='flex d-none-xl'>
                        {
                            links.map( l => (
                                <LinkNav 
                                    key={ l.title }
                                    { ...l }
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='flex d-none-xl'>
                    <LinkNav 
                        title='Login'
                    />
                    <LinkNav 
                        title='Register'
                        border
                    />
                </div>
                <div 
                    className='d-none d-visible-xl pointer'
                    onClick={ () => setOpenNav( true ) }
                >
                    <FontAwesomeIcon 
                        icon={ faBars }
                        size="2x"
                    />
                </div>
            </nav>
            <div className={` ${ style['nav-responsive'] } ${ openNav ? style['nav-responsive-open'] : ""} `}>
                <div 
                    className='txt-right pointer'
                    onClick={ () => setOpenNav( false ) }
                >
                    <FontAwesomeIcon 
                        icon={ faXmark }
                        size="2x"
                    />
                </div> 
                <div className='flex f-column mt-5'>
                    {
                        links.map( l => (
                            <LinkNav 
                                key={ l.title }
                                { ...l }
                                block
                            />
                        ))
                    }
                    <div className='mt-5'>
                        <LinkNav 
                            title='Login'
                            center
                        />
                        <LinkNav 
                            title='Register'
                            border
                            center
                        />
                    </div>
                </div>   
            </div>
        </header>
    )
}
