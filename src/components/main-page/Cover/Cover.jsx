import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import { useEffect, useState } from "react";
import $ from "jquery";

import Menu from "../../Menu/Menu";
import useMediaQuery from "../../../shared/useMediaQuery";
import MobileHeader from "../../headers/MobileHeader/MobileHeader";
import DesktopHeader from "../../headers/DesktopHeader/DesktopHeader";

import "./style.scss";


const Cover = () => {
    const matches = useMediaQuery("(max-width: 1024px)");

    const [menuShow, setMenuShow] = useState(false);


    useEffect(
        () => {
            if (menuShow) {
                $("#menu").animate({
                    left: "0vw"
                }, 300);
            } else {
                $("#menu").animate({
                    left: "-100vw"
                }, 700);
            }
        }, [menuShow]
    )


    return (
        <section className="cover" id="top">
            <div className="cover-content">
                {
                    matches ? (
                        <MobileHeader setMenuShow={setMenuShow} />
                    ) : (
                        <DesktopHeader setMenuShow={setMenuShow} />
                    )
                }
            </div>

            <Swiper
                cssMode={true}
                slidesPerGroup={1}
                slidesPerView={1}
                centeredSlides={false}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="cover-swipper"
            >
                <SwiperSlide>
                    <div className="cover-background">
                        <div className="cover-footer">
                            <ul>
                                <li>Be feminiNe - choose us</li>
                                <li className="look-all"><a href="/catalog">LOOK ALL</a></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cover-background">
                        <div className="cover-footer">
                            <ul>
                                <li>Be feminiNe - choose us</li>
                                <li className="look-all"><a href="/catalog">LOOK ALL</a></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


            <Menu setMenuShow={setMenuShow} />
        </section>
    )
}


export default Cover;