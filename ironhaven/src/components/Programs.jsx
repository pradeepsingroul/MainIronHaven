import SectionHeader from "./SectionHeader";
import { GiQueenCrown } from 'react-icons/gi'
import Card from "../UI/Card";
import { programs } from "../data";
import './Programs.css'

export default function Programs() {



    return <section className="programs">
        <div className="container programs__container">
            <SectionHeader icon={<GiQueenCrown />} heading="Programs" />

            <div className='programs__wrapper'>
                {
                    programs.map((item) => {
                        return <Card id={item.id} title={item.title} icon={item.icon} info={item.info} path={item.path} months={item.months} date={item.date} />
                    })
                }

            </div>
        </div>
    </section>
}