import SectionHeader from "./SectionHeader"
import { GiQueenCrown } from "react-icons/gi"
import { programs } from "../data"
import Card from "../UI/Card"
import vaouesMain from '../images/afterHover.jpg'
import vaouesMain2 from '../images/afterHover2.jpg'
import vaouesMain3 from '../images/afterHover3.jpg'
import vaouesMain4 from '../images/afterHover4.jpg'
import vaouesMain5 from '../images/afterHover5.jpg'
import './OurValues.css'


export default function OurValues() {




    return <section className="values__section">
        <div className="container ourValues__container">
            <SectionHeader icon={<GiQueenCrown />} heading="Our Values" />
            <div className="values">
                <div className="valueImages">
                    <img className="img__values" src={vaouesMain} alt="values" />
                    <img className="img__values" src={vaouesMain2} alt="values" />
                    <img className="img__values" src={vaouesMain3} alt="values" />
                    <img className="img__values" src={vaouesMain4} alt="values" />
                    <img className="img__values" src={vaouesMain5} alt="values" />
                </div>
                <div className='values__wrapper'>
                    {
                        programs.map((item) => {
                            return <Card id={item.id} title={item.title} icon={item.icon} info={item.info} path={item.path} months={item.months} date={item.date} classi="valueCard" />
                        })
                    }

                </div>
            </div>

        </div>
    </section>
}