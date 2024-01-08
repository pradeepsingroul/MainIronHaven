import SectionHeader from "./SectionHeader";
import { GiQueenCrown } from 'react-icons/gi'
import Card from "../UI/Card";
import { programs } from "../data";
import './Programs.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";


export default function Programs() {
    const slideReg = useRef(null)
    const handleNext = ()=>{
        slideReg.current.slickNext()
    }
    const handlePrev = ()=>{
        slideReg.current.slickPrev()
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return <section className="programs">
        <div className="container programs__container">
            <SectionHeader icon={<GiQueenCrown />} heading="Programs" />

            <div className='programs__wrapper'>
                <Slider ref={slideReg} {...settings}>
                    {
                        programs.map((item) => {
                            return <Card id={item.id} title={item.title} icon={item.icon} info={item.info} path={item.path} months={item.months} date={item.date} classi="program" />
                        })
                    }
                </Slider>

            </div>
            <div className="testimonials__btn">
                <button><FaArrowAltCircleLeft  onClick={handlePrev} /></button>
                <button><FaArrowAltCircleRight onClick={handleNext} /></button>
            </div>
        </div>
    </section>
}