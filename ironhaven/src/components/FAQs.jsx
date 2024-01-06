import SectionHeader from "./SectionHeader";
import {FaQuestion} from 'react-icons/fa'
import { faqs } from "../data";
import FAQ from "./FSQ";
import './FAQs.css'


export default function FAQs() {



    return <section className="faqs">
        <div className="container faqs__container">
            <SectionHeader icon={<FaQuestion/>} heading="FAQs"/>
            <div className="faqs__wrapper">
                {
                    faqs.map(({id,question,answer})=>{
                        console.log(id)
                        return <FAQ key={id} Question={question} Answer={answer}/>
                    })
                }
            </div>

        </div>
    </section>
}