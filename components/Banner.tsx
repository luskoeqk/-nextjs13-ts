
import Image from "next/image";
import { Movie } from "../typings";
import { baseUrl } from '../constants/movie'

import { useEffect, useState } from "react";


interface Props {
    netflixOriginals: Movie[];
}


export default function Banner({ netflixOriginals }: Props) {

    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])


    return (
        <div>
            <div className="absolute top-0 left-0 h-[95vh] w-[100vw]">
                <Image
                    // src=`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`
                    src='/fightclub.jpg'
                    alt=""
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
        </div>
    )
}
