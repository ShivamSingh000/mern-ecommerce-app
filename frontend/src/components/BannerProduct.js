import React, { useState } from 'react'


import image1 from '../assest/banner/img1.webp'
import image2 from '../assest/banner/img2.webp'
import image3 from '../assest/banner/img3.jpg'
import image4 from '../assest/banner/img4.jpg'
import image5 from '../assest/banner/img5.webp'


import image1Mobile from '../assest/banner/img1_mobile.jpg'
import image2Mobile from '../assest/banner/img2_mobile.webp'
import image3Mobile from '../assest/banner/img3_mobile.jpg'
import image4Mobile from '../assest/banner/img4_mobile.jpg'
import image5Mobile from '../assest/banner/img5_mobile.png'

const BannerProduct = () => {

    const [currentImage, setCurrentImage] = useState(1)

    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]
    const mobileImages = [
        image1Mobile,
        image2Mobile,
        image3Mobile,
        image4Mobile,
        image5Mobile
    ]

    return (
        <div className='container mx-auto px-4 rounded '>
            <div className='h-72 w-full bg-slate'>
                <div className='flex h-full w-full  '>
                    {
                        desktopImages.map((imageURL, index) => {
                            return (
                                <div className='w-full h-full min-w-full min-h-full ' key={imageURL} style={{transform: `translateX(${currentImage*100}%)`}}>
                                    <img src={imageURL} className='w-full h-full' />
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default BannerProduct
