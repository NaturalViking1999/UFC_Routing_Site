import './Fighters.css';

const Fighters = () => {

    return (
        <div className=''>
            <header className='fighters-header'>
                <div id='fighters-menu'>
                    <p id='fighters-results'>Fighters</p>
                    <p id='fighters-title'>Knockouts by Russian UFC fighters:</p>
                    <p id='fighters-text'>Recall merciless knockouts by our fighters Islam Makhachev, Alexey Oleinik, Alexander Volkov, Petr Yan and another russian figthers.</p>
                    <hr />
                    <p id='fighters-date'>From UFC Russia - 24.02.2022</p>
                </div>
            </header>
            <div className='fighters-grid'>
                <main className='fighters-main'>
                    <div>
                        <h2>Муслим Салихов vs Нордин Талеб, 7 сентября 2019 года, UFC 242</h2>
                        <p>Муслим Салихов начал свой путь в UFC с поражения, но в следующих двух боях наглядно продемонстрировал, почему его называют королём кунг-фу.
                            <br />
                            Сначала россиянин нокаутировал Рики Рэйни, а затем жёстко выключил свет Нордину Талебу, которого вы можете знать не только как профессионального бойца, но и человека, подрабатывавшего в качестве телохранителя одного из самых популярных футболистов современности Неймара. Согласитесь, не каждый может похвастать победой над человеком с таким резюме. </p>
                        <iframe className='video' width="603" height="315" src="https://www.youtube.com/embed/pRmgAi9P3XY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h2>Майрбек Тайсумов vs Фелипе Силва, 2 сентября 2017 года, UFC Fight Night 115</h2>
                        <p>Перед поединком с Фелипе Силвой Майрбек Тайсумов шёл на впечатляющей серии из четырёх досрочных побед, но, кажется, бразилец всё-таки недооценил ударную мощь россиянина.
                            <br />
                            Силва довольно решительно шёл вперёд, но оказался застигнут врасплох, когда короткий правый боковой внезапно влетел его челюсть. Спустя несколько секунд Фелипе непонимающе смотрел на рефери, а Тайсумов готовился забрать уже третий подряд бонус в 50 тысяч долларов за лучшее выступление вечера.  </p>
                        <h2>Ислам Махачев vs Глейсон Тибау, 20 января 2018 года, UFC 220</h2>
                        <p>В июле 2012 года Глейсон Тибау дал тяжелейший бой будущему чемпиону UFC Хабибу Нурмагомедову, а спустя 5,5 лет должен был стать серьёзной проверкой для Ислама Махачева.
                            <br />
                            На деле всё оказалось немного иначе - в самом начале поединка россиянин поймал бразильца роскошным ударом слева и дальнейшее добивание было уже пустой формальностью. После такого выступления многие болельщики и представители СМИ ещё лучше поняли, почему именно Махачева называют наследником Хабиба Нурмагомедова.  </p>
                        <h2>Махмуд Мурадов vs Тревор Смит, 7 декабря 2019 года, UFC on ESPN 7</h2>
                        <p>Махмуд Мурадов - настоящий мастер коротких уведомлений. Представитель Узбекистана дебютировал в UFC в конце сентября 2019 года, согласившись принять бой с Алессио Ди Кирико в самые сжатые сроки. Получилось тяжеловато, но вполне успешно - Махмуд победил итальянца единогласным решением судей.
                            <br />
                            Мурадов не стал слишком долго праздновать и спустя 70 дней вновь вышел в октагон, согласившись спасти тренировочный лагерь Тревору Смиту. Но едва ли американец может был благодарен своему сопернику - недавний дебютант кинематографично нокаутировал опытного американца в самом конце поединка. И только взгляните на этот шедевр.  </p>
                        <h2>Алексей Олейник vs Джэред Рошолт, 22 ноября 2014 года, UFC Fight Night 57</h2>
                        <p>В 2014 году Алексей Олейник пробивал себе путь в крупнейшей мировой организации. Сначала "Удав" оправдал своё прозвище в бою с Энтони Хэмилтоном, задушив американца через несколько дней после своего тридцать седьмого (!) дня рождения, а спустя несколько месяцев вышел на бой с Джэредом Рошолтом в статусе почти безнадёжного андердога примерно 3 к 1.
                            <br />
                            На видео ниже наглядное пособие о том, как нужно доказывать неправоту подобных раскладов и всех тех, кто в тебе сомневается.  </p>
                        <p><strong>Также в этом видео:</strong> брутальные нокауты в исполнении Петра Яна, Никиты Крылова и Валентины Шевченко, которые вы могли видеть в нашей подборке самых жёсткий нокаутов ударами ногой в голову от наших бойцов UFC. </p>
                        <iframe className='video' id='video' width="603" height="315" src="https://www.youtube.com/embed/nQvT1n2ci1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </main>
                <aside className='fighters-aside'>Empty Container :)</aside>
                <hr />
            </div>
        </div>
    )

}

export default Fighters;