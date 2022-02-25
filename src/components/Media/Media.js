import { useEffect, useState } from 'react';
import './Media.css'

const Media = () => {

    const [media, setMedia] = useState([]);
    const img = "http://image.tmdb.org/t/p/original"

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/547460-ufc-229-khabib-vs-mcgregor?api_key=789301ce29a6cbcd3c1f0b8e606815b6')
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    console.log(data);
                    setMedia(data)
                }
            })
    }, [])

    return (
        <div className='media'>
            <h1>Media</h1>
            <div>
                <h1>{media.title}</h1>
                <img src={img + media.backdrop_path} alt="" />
                <p>{media.tagline}</p>
                <p>{media.overview}</p>
                <a href={media.homepage}>Click here to watch this tournament.</a>
            </div>
        </div>
    )
}

export default Media;