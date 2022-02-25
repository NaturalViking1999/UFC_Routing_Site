import { useEffect, useState } from 'react';
import './Main.css'

const Main = () => {

    const clickHandler1 = () => {
        window.location.href = 'http://localhost:3000/news';
    }

    const clickHandler2 = () => {
        window.location.href = 'http://localhost:3000/tournaments';
    }

    const clickHandler3 = () => {
        window.location.href = 'http://localhost:3000/fighters';
    }

    const main = [
        {
            main:
                <main className='main main-1'>
                    <p id='results'>Results</p>
                    <p id='title' onClick={clickHandler1}>Results and bonuses UFC Vegas 48:
                        <br />
                        Walker VS Hill</p>
                    <p id='text' onClick={clickHandler1}>Jamal Hill knockout Johnny Walker, Jim Miller beat Nicolas Motta and another results last tournament.</p>
                </main>
        },
        {
            main:
                <main className='main main-2'>
                    <p id='results'>Announcement</p>
                    <p id='title' onClick={clickHandler2}>Changes on tournament UFC Vegas 49:</p>
                    <p id='text' onClick={clickHandler2}>Look at last and actual changes on tournament UFC Vegas 49: Makhachev VS Green.</p>
                </main>
        },
        {
            main:
                <main className='main main-3'>
                    <p id='results'>Fighters</p>
                    <p id='title' onClick={clickHandler3}>Knockouts by Russian UFC fighters:</p>
                    <p id='text' onClick={clickHandler3}>Recall merciless knockouts by our fighters Islam Makhachev, Alexey Oleinik, Alexander Volkov, Petr Yan and another russian fightres.</p>
                </main>
        }
    ]

    const Slider = () => {
        const [activeIndex, setActiveIndex] = useState(0);

        useEffect(() => {
            setInterval(() => {
                setActiveIndex((current) => {
                    const res = current === main.length - 1 ? 0 : current + 1
                    return res
                })
            }, 5000)
            // return () => clearInterval()
        }, [])

        const prevImgIndex = activeIndex ? activeIndex - 1 : main.length - 1
        const nextImgIndex = activeIndex === main.length - 1 ? 0 : activeIndex + 1

        return (
            <div className='slider'>
                <div className="main-prev"
                    key={prevImgIndex}>
                    {main[prevImgIndex].main}
                </div>
                <div className="main-actual"
                    key={activeIndex}>
                    {main[activeIndex].main}
                </div>
                <div className="main-next"
                    key={nextImgIndex}>
                    {main[nextImgIndex].main}
                </div>
                <div className='buttons'>
                    <div><button id='btn-1' onClick={() => setActiveIndex(0)}><i class="fa fa-circle-o" aria-hidden="true"></i></button></div>
                    <div><button id='btn-2' onClick={() => setActiveIndex(1)}><i class="fa fa-circle-o" aria-hidden="true"></i></button></div>
                    <div><button id='btn-3' onClick={() => setActiveIndex(2)}><i class="fa fa-circle-o" aria-hidden="true"></i></button></div>
                </div>
            </div>
        )
    }

    return (
        <div className='home'>
            <header id='home-header'>
                <h1 id="main-h1" >News and Results of the Tournament from Last 7 Days:</h1>
            </header>
            {Slider()}
        </div>
    )

}

export default Main;