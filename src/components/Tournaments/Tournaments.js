import './Tournaments.css'

const Tournaments = () => {

    return (
        <div className=''>
            <header className='tournaments-header'>
                <div id='tournaments-menu'>
                    <p id='tournaments-results'>Tournaments</p>
                    <p id='tournaments-title'>Tournment's card UFC Vegas 4:
                        <br />
                        Makhachev VS Green</p>
                    <p id='tournaments-text'>Islam Makhachev goes to 10th 10 win in a row, dangerous test for Arman Tsarukyan, first fight of Armen Petrosyan at UFC and another fights next tournament.</p>
                    <hr />
                    <p id='tournaments-date'>From UFC Russia - 24.02.2022</p>
                </div>
            </header>
            <div className='tournaments-grid'>
                <main className='tournaments-main'>
                    <div>
                        <p><span id='big-symbol'>В</span> ночь с 26 на 27 февраля в UFC Apex (Лас-Вегас) состоится турнир UFC Вегас 49: Махачев vs Грин. В главном бою вечера четвёртый номер рейтинга лёгкой весовой категории Ислам Махачев встретится с Бобби Грином и постарается одержать десятую (!) победу подряд.</p>
                        <p>Чуть раньше в октагон выйдет ещё один талантливый боец из лёгкой весовой категории Арман Царукян, которому предстоит столкнуться с крайне опасным Йоэлем Альварезом. Отметим, что оба бойца идут на победных сериях из четырёх поединков.</p>
                        <p>   Открывать главный кард будет дебютант UFC Армен Петросян - представитель Армении проведёт бой с Грегори Родригесом.</p>
                        <p> Предлагаем вашу вниманию полный кард предстоящего турнира.</p>
                    </div>
                    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2022-02/022622-ufc-fight-night-makhachev-vs-green-sg-hero.jpg?itok=vjO06B4u" width="804" height="452" loading="lazy" class="image-style-inline"></img>
                    <div>
                        <h2>Главный кард:</h2>
                        <h3>Промежуточный вес:</h3>
                        <p>Ислам Махачев (#4 рейтинга лёгкого веса | 21-1 | 3 КО/ТКО, 10 SUB) vs Бобби Грин (29-12-1 | 10 KO/TKO, 8 SUB);</p>
                        <h3>Средний вес:</h3>
                        <p>Миша Циркунов (15-7 | 5 KO/TKO, 8 SUB) vs Веллингтон Турман (17-5 | 4 КО/ТКО, 7 SUB);</p>
                        <h3>Женский наилегчайший вес:</h3>
                        <p>Джи Йон Ким (9-4-2 | 2 КО/ТКО, 3 SUB) vs Присцила Качоэйра (10-4 | 6 КО/ТКО);</p>
                        <h3>Лёгкий вес:</h3>
                        <p>Арман Царукян (#13 рейтинга лёгкого веса | 17-2 | 6 KO/TKO, 5 SUB) vs Йоэль Альварез (19-2 | 3 КО/ТКО, 16 SUB);</p>
                        <h3>Средний вес:  </h3>
                        <p>Армен Петросян (6-1 | 6 КО/ТКО) vs Грегори Родригес (11-3 | 5 КО/ТКО, 4 SUB).</p>
                        <h2>Прелимы</h2>
                        <p>Лёгкий вес: Жу Ронг (18-4 | 12 КО/ТКО, 4 SUB) vs Игнасио Бахамондес (12-4 | 9 KO/TKO);</p>
                        <p>Женский легчайший вес: Жозиане Нунес (8-2 | 3 КО/ТКО, 3 SUB) vs Рамона Паскуал ( 6-2 | 4 КО/ТКО, 1 SUB);</p>
                        <p>Лёгкий вес: Терренс МакКинни (11-3 | 5 КО/ТКО, 6 SUB) vs Фарес Зиам (12-3 | 5 КО/ТКО, 4 SUB);</p>
                        <p>Легчайший вес: Алехандро Перез (22-8-1 | 9 КО/ТКО, 6 SUB) vs Джонатан Мартинез (14-4 | 7 КО/TKO, 2 SUB);</p>
                        <p>Полусредний вес: Рамиз Брахимай (9-4 | 9 SUB) vs Мичел Гиллмор (6-4 | 3 КО/ТКО);</p>
                        <p>Наилегчайший вес: Виктор Альтамирано (10-1 | 1 КО/ТКО, 4 SUB) vs Карлос Хернандез (7-1 | 4 SUB).</p>
                        <h4>Трансляция прелимов начнётся в 00:00 по Москве, главного карда – в 03:00.</h4>
                    </div>
                </main>
                <aside className='tournaments-aside'>Empty Container :)</aside>
                <hr />
            </div>
        </div>
    )

}

export default Tournaments;