import ironMan from '../images/IronMan.png'
import './Header.css'


export default function Header() {


    return <header className="main__header">
        <div className="container main__header-container">
            <div className="main__header-left">
                <h4>#100DaysOfworkout</h4>
                <h1>Join the Legends of fitness world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. dolores incidunt laboriosam qui ratione consequuntur ducimus id provident corrupti vel quo! Animi, odit consectetur.</p>
                <button className='btn lg'>Get Started</button>
            </div>
            <div className="main__header-right">
                <div className="main__header-circle">

                </div>
                <div className="main__header-image">
                    <img src={ironMan} alt="Iron man" />
                </div>
            </div>
        </div>
    </header>
}