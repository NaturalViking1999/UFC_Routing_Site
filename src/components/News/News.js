import './News.css'

const News = () => {

    return (
        <div className=''>
            <header className='news-header'>
                <div id='news-menu'>
                    <p id='news-results'>Results</p>
                    <p id='news-title'>Results and bonuses UFC Vegas 48:
                        <br />
                        Walker VS Hill</p>
                    <p id='news-text'>Jamal Hill knockout Johnny Walker, Jim Miller beat Nicolas Motta and another results last tournament.</p>
                    <hr />
                    <p id='news-date'>From UFC Russia - 22.02.2022</p>
                </div>
            </header>
            <div className='news-grid'>
                <main className='news-main'>
                    <div>
                        <p><span id='big-symbol'>В</span> ночь с 19 на 20 февраля в UFC Apex (Лас-Вегас) состоялся турнир UFC Вегас 48: Уокер vs Хилл. В главном бою вечера двенадцатый номер рейтинга полутяжёлой весовой категории Джамал Хилл нокаутировал десятого в списке лучших бойцов дивизиона Джонни Уокера в первом раунде. </p>
                        <p>Чуть раньше рекордсмен UFC по количеству поединков в организации Джим Миллер вышел в октагон в тридцать девятый (!) раз и победил Николаса Мотту техническим нокаутом во втором раунде.</p>
                    </div>
                    <div>
                        <h2>Результаты и бонусы UFC Вегас 48: Уокер vs Хилл</h2>
                        <h3>Прелимы:</h3>
                        <p>Марио Баутиста победил Джея Перрина единогласным решением судей (30-27, 30-27, 30-26);</p>
                        <p>Джонатан Пирс победил Кристиана Родригеза единогласным решением судей (30-27, 29-28, 29-28);</p>
                        <p>Чэд Энхелигер победил Джесси Стрэйдера техническим нокаутом в третьем раунде (3:33);</p>
                        <p>Глория де Паула победила Диану Белбиту единогласным решением судей (29-28, 29-28, 29-28);</p>
                        <p>Чэс Скелли победил Марка Штригля техническим нокаутом во втором раунде (2:01);</p>
                        <p>Стефани Эггер победила Джессику-Роуз Кларк болевым приёмом на руку в первом раунде (3:44);</p>
                        <p>Давид Онама победил Габриэля Бенитеза техническим нокаутом в первом раунде (4:24).</p>
                        <h3>Главный кард:</h3>
                        <p>Хоакин Бакли победил Абдула Раказа Альхассана раздельным решением судей (29-28, 28-29, 29-28);</p>
                        <p>Джим Миллер победил Николаса Мотту техническим нокаутом во втором раунде (1:58);</p>
                        <p>Паркер Портер победил Алана Баду единогласным решением судей (29-28, 29-28, 29-28);</p>
                        <p>Кайл Дакас победил Джейми Пикетта удушающим приёмом в первом раунде (4:59);</p>
                        <h3>Главный бой вечера:</h3>
                        <p>Джамал Хилл нокаутировал Джонни Уокера в первом раунде (2:55).</p>
                        <h4>***</h4>
                        <h3>Бонусы:</h3>
                        <p><strong>Лучшее выступление вечера – Джамал Хилл, Кайл Дакас, Давид Онама и Стефани Эггер.</strong></p>
                    </div>
                </main>
                <aside className='news-aside'>Empty Container :)</aside>
                <hr />
            </div>
        </div>
    )

}

export default News;