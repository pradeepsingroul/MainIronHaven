import OurValues from '../../components/OurValues'
import Programs from '../../components/Programs'
import ironMan from '../../images/IronMan.png'
import './Home.css'


export default function Home() {


    return <div>
        <header className="main__header">
            <div className="container main__header-container">
                <div className="main__header-left">
                    <h4>#100DaysOfWorkout</h4>
                    <h1>Join the Legends of fitness world</h1>
                    <p>"Redefine Your Limits: Sculpt Your Ideal Body and Boost Your Well-being with Our State-of-the-Art Gym Facilities and Personalized Fitness Plans!"</p>
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
        <Programs />
        <OurValues/>
    </div>


}