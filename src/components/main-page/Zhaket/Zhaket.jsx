import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';

import voali from "../../../assets/images/voali.png";
import voali_mobile from "../../../assets/images/voali-mobile.png";

import ProductCard from "../../cards/ProductCard/ProductCard";
import useMediaQuery from "../../../shared/useMediaQuery";

import "./style.scss";


const Zhaket = () => {
    const matches = useMediaQuery("(max-width: 780px)");

    return (
        <section className="zhaket">
            <div className="img"  style={{
                backgroundImage: `url("${matches ? voali_mobile : voali}")`
            }} />

            <div className="zhaket">
                {
                    matches ? (
                        <Swiper
                            cssMode={true}
                            slidesPerGroup={1}
                            slidesPerView={1}
                            navigation={true}
                            modules={[Navigation, Pagination, Autoplay]}
                            className="zhaket-content zhaket-swipper"
                        >
                                <SwiperSlide>
                                    <ProductCard card={{
                                        id: 1,
                                        name: "Жакет",
                                        price: 12990,
                                        photo: "/static/zhaket.png"
                                    }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductCard card={{
                                        id: 1,
                                        name: "Жакет",
                                        price: 12990,
                                        photo: "/static/zhaket.png"
                                    }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ProductCard card={{
                                        id: 1,
                                        name: "Жакет",
                                        price: 12990,
                                        photo: "/static/zhaket.png"
                                    }} />
                                </SwiperSlide>
                        </Swiper>
                    ) : (
                        <ProductCard card={{
                            id: 1,
                            name: "Жакет",
                            price: 12990,
                            photo: "/static/zhaket.png"
                        }} />
                    )
                }
            </div>
        </section>
    )
}


export default Zhaket;