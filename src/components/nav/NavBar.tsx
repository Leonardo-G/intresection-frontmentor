import React from 'react';

import { links } from 'database/links';
import { LinkNav } from './LinkNav';


export const NavBar = () => {
    return (
        <header>
            <nav className='flex p-4 f-auto s-between col-center'>
                <div className='flex col-center col-gap-5'>
                    <p className='size-6 bold'>snap</p>
                    <div className='flex'>
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
                <div className='flex'>
                    <LinkNav 
                        title='Login'
                    />
                    <LinkNav 
                        title='Register'
                        border
                    />
                </div>
            </nav>
        </header>
    )
}
