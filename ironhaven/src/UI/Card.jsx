
import './Card.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";



export default function Card({ id, icon, title, info, path, date, months, classi }) {


    return <div className="parent">
        <div className={`card ${classi}`}>
            <div className="date-box">
                <span className="month">{months}</span>
                <span className="date">{date}</span>
            </div>
            <div className="content-box">
                <h1 className="card-title">{title}</h1>
                <p className="card-content">
                    {info}
                </p>

                <button className='btn sm'>
                    <span>Learn more</span>
                    <span>{<IoIosArrowDroprightCircle />}</span>
                </button>
            </div>

        </div>
    </div>
}