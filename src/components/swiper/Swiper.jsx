import  {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './swiper.css';

import { Navigation, Pagination, Scrollbar, Grid} from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';



const PhotosSwiper = () =>{
    return (
        <>
            <Swiper
                modules={[Grid, Navigation, Pagination, Scrollbar]}
                
                pagination={{
                    clickable: true,
                }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
                grabCursor={true}
                initialSlide={1}
                spaceBetween={15}
                // navigation
                breakpoints={{
                    560: {
                    slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 3,
                    },
                    976: {
                    slidesPerView: 4,
                    }
                }}
                
                className='h-[300px]'
                           
            >
                <SwiperSlide className=' group' >
                    <div className='flex flex-col items-center justify-center rounded-2xl group-hover:scale-105 transition duration-300 object-cover'>
                        <img src="finn.svg" className='h-[240px]' alt=""/>
                        <h1 className='bg-green-medium h-full w-full'>Titulo do produto</h1>
                    </div>
                </SwiperSlide >
                <SwiperSlide className=' group' >
                    <div className='flex flex-col items-center justify-center rounded-2xl group-hover:scale-105 transition duration-300 object-cover'>
                        <img src="logo1.jpeg" className='h-[240px]' alt=""/>
                        <h1 className='bg-green-medium h-full w-full'>Titulo do produto</h1>
                    </div>
                </SwiperSlide >
                <SwiperSlide className=' group' >
                    <div className='flex flex-col items-center justify-center rounded-2xl group-hover:scale-105 transition duration-300 object-cover'>
                        <img src="logo2.jpeg" className='h-[240px]' alt=""/>
                        <h1 className='bg-green-medium h-full w-full'>Titulo do produto</h1>
                    </div>
                </SwiperSlide >
                <SwiperSlide className=' group' >
                    <div className='flex flex-col items-center justify-center rounded-2xl group-hover:scale-105 transition duration-300 object-cover'>
                        <img src="brazil.svg" className='h-[240px]' alt=""/>
                        <h1 className='bg-green-medium h-full w-full'>Titulo do produto</h1>
                    </div>
                </SwiperSlide >
                <SwiperSlide className=' group' >
                    <div className='flex flex-col items-center justify-center rounded-2xl group-hover:scale-105 transition duration-300 object-cover'>
                        <img src="packman.svg" className='h-[240px]' alt=""/>
                        <h1 className='bg-green-medium h-full w-full'>Titulo do produto</h1>
                    </div>
                </SwiperSlide >
                <SwiperSlide className=' group' >
                    <div className='flex flex-col items-center justify-center rounded-2xl group-hover:scale-105 transition duration-300 object-cover'>
                        <img src="menu-hamburguer.svg" className='h-[240px]' alt=""/>
                        <h1 className='bg-green-medium h-full w-full'>Titulo do produto</h1>
                    </div>
                </SwiperSlide >
            </Swiper>
        </>
    )
}

export default PhotosSwiper;