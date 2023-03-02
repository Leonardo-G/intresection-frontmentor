import React from 'react';
import Image from 'next/image'

import style from "./Front.module.css"

export const Front = () => {
    return (
        <div className='flex col-center mt-3 f-column-rev-xl'>
            <div className='f-auto mt-5'>
                <h1 className='h1 txt-center-xl'>Make remote work</h1>
                <p className='mt-5 size-2 col-grey width80 txt-center-xl size-auto-xs'>
                    Get your team in sync, no matter your location.
                    Streamline precesses, create team rituals, and 
                    watch productivity soar.
                </p>
                <div className='txt-center-xl'>
                    <button className='mt-5 btn btn-dark btn-hover-transparent'>Learn more</button>
                </div>
            </div>
            <div className={ style['container-image'] }>
                <Image 
                    src="/image-hero-desktop.png"
                    alt='Imagen Portada'
                    fill
                    className='contain'
                />
            </div>
        </div>
    )
}
