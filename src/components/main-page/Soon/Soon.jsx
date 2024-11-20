import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';

import "./style.scss";


const Soon = () => {
    return (
        <section className="soon">
            <header>
                <p>Soon</p>
            </header>

            <Swiper
                cssMode={true}
                slidesPerGroup={1}
                slidesPerView={1}
                grabCursor={true}
                navigation={true}
                centeredSlides={false}
                modules={[Navigation, Pagination]}
                className="cover-swipper"
            >
                <SwiperSlide>
                    <div className="soon__content">
                        <div className="soon__conent-text">
                            <h3>FASHION SHOW</h3>
                            <p>OUR FASHIOM SHOW SOON</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="soon__content">
                        <div className="soon__conent-text">
                            <h3>FASHION SHOW</h3>
                            <p>OUR FASHIOM SHOW SOON</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}


export default Soon;