
import './Card.css'



export default function Card({id,icon,title,info,path,date,months}) {


    return <div className="parent">
        <div className="card ">
            <div className="content-box">
                <h1 className="card-title">{title}</h1>
                <p className="card-content">
                    {info}
                </p>
                <button className='btn lm'>Learn more</button>
            </div>
            <div className="date-box">
                <span className="month">{months}</span>
                <span className="date">{date}</span>
            </div>
            
        </div>
    </div>
}