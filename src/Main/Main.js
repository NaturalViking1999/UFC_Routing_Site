import './Main.css'

const Main = () => {

    const clickHandler = () => {
        window.location.href = 'http://localhost:3000/news';
    }

    return (
        <div className='home'>
            <header id='home-header'>
                <h1>News and Results of the Tournament from Last 7 Days:</h1>
            </header>
            <main className='main'>
                <p id='results'>Results</p>
                <p id='title' onClick={clickHandler}>Results and bonuses UFC Vegas 48:
                    <br />
                    Walker VS Hill</p>
                <p id='text' onClick={clickHandler}>Jamal Hill knockout Johnny Walker, Jim Miller beat Nicolas Motta and another results last tournament.</p>
            </main>
        </div>
    )

}

export default Main;