import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';
import { useState } from 'react';

import ProductCard from "../../cards/ProductCard/ProductCard";
import useMediaQuery from "../../../shared/useMediaQuery";
import collections from "../../../mock/collections.json";


import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Collection = () => {
    const matches = useMediaQuery("(max-width: 780px)");

    
    return (
        <section className="collection">
            <header>
                <p>NEW COLLECTION</p>
            </header>


            {
                matches ? (
                    <Swiper
                        cssMode={true}
                        slidesPerGroup={1}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="collection-content collection-swipper"
                    >
                        {
                            collections.length ? (
                                collections.map(
                                    i => (
                                        <SwiperSlide key={i.id}>
                                            <ProductCard card={i} />
                                        </SwiperSlide>
                                    )
                                )
                            ) : ""
                        }
                    </Swiper>
                ) : (
                    <div className="collection-content">
                        {
                            collections.length ? (
                                collections.map(
                                    i => <ProductCard card={i} key={i.id} />
                                )
                            ) : ""
                        }
                    </div>
                )
            }
        </section>
    )
}


export default Collection;