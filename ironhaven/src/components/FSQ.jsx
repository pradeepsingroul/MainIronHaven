import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import './FAQ.css'



export default function FAQ({ Question, Answer }) {
    const [show, setShow] = useState(false)

    const handleShowing = () => {
        setShow((prev) => !prev);
    }



    return <article className="faq">
        <div className='question__sec'>
            <h4>{Question}</h4>
            <button className="faq__icon" onClick={handleShowing}>
                {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>

        </div>
        {show ? <p>{Answer}</p> : null}
    </article>
}