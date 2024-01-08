import { useRef, useState } from "react"
import SectionHeader from "./SectionHeader";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import './TestiMonial.css'
import { testimonials_data } from "../data";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Testimonials() {
    const sliderRef = useRef(null)


    // useEffect(()=>{
    //     setInterval(()=>{
    //         HandleIndexInc()
    //     },1000)
    // },[])

    const HandleIndexInc = () => {
        sliderRef.current.slickNext();
    }
    const HandleIndexDec = () => {
        sliderRef.current.slickPrev();
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const testi = testimonials_data.map(({ name, quotes, position, image }) => {
        return( <div className="testimonial">
             <p><FaQuoteLeft style={{ marginRight: "10px", color: "var(--color-secondary)" }} />{quotes}<FaQuoteRight style={{ marginLeft: "10px", color: "var(--color-secondary)" }} /></p>
             <div>
                 <div>
                     <h4>{name}</h4>
                     <p>{position}</p>
                 </div>
                 <img src={image} alt={name} />
             </div>
         </div>)
     })


    return <section className="container testimonials__section">
        <div>
            <SectionHeader icon={<FaQuoteLeft />} heading="Testimonials" />
        </div>
        <div className="testimonials__wrapper">
            {/* <Card id={id} info={quates} title={name} path={image}/> */}

            <Slider ref={sliderRef} {...settings}>
                {testi}
            </Slider>

            <div className="testimonials__btn">
                <button onClick={HandleIndexDec}><FaArrowAltCircleLeft /></button>
                <button onClick={HandleIndexInc}><FaArrowAltCircleRight /></button>
            </div>
        </div>
    </section>
}