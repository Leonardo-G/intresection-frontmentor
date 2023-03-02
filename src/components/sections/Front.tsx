import React from 'react';
import Image from 'next/image'

import style from "./Front.module.css"

export const Front = () => {
    return (
        <div className='flex col-center mt-3 f-column-rev-xl col-gap-5'>
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
                <div className='flex mt-full col-center col-gap-3 jus-center-xl f-wrap row-gap-5'>
                    <div className="relative">
                        <Image 
                            src="/client-databiz.svg"
                            alt='imagen marca'
                            width={ 90 }
                            height={ 25 }
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="relative">
                        <Image 
                            src="/client-audiophile.svg"
                            alt='imagen marca'
                            width={ 100 }
                            height={ 40 }
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="relative">
                        <Image 
                            src="/client-meet.svg"
                            alt='imagen marca'
                            width={ 100 }
                            height={ 20 }
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="relative">
                        <Image 
                            src="/client-maker.svg"
                            alt='imagen marca'
                            width={ 90 }
                            height={ 30 }
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>
            </div>
            <div className={ style['container-image'] }>
                <picture>
                    <source srcSet='image-hero-mobile.png' media='(max-width: 720px)'/>
                    <img 
                        alt='Imagen Portada'
                        className='contain'
                        src='/image-hero-desktop.png'
                    />
                </picture>
            </div>
        </div>
    )
}
