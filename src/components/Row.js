import axios from 'axios';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import React, { useState, useEffect  } from 'react';
import Movie from './Movie';

const Row = ({ title, fetchURL,rowId }) => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
        })

    }, [fetchURL]);
    const slideLeft=()=>{
        let slider=document.getElementById('slider'+rowId)
        slider.scrollLeft=slider.scrollLeft-500
    }
    const slideRight=()=>{
        let slider=document.getElementById('slider'+rowId)
        slider.scrollLeft=slider.scrollLeft+500
    }
   
    return (
        <>
            <h2 className='text-white font-bold md-text-xl p-4'>{title}</h2>
            <div className=' relative flex items-center group'>
               <MdChevronLeft onClick={slideLeft} size={40}className='left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursos-pointer z-10 hidden group-hover:block'/>
                <div id={'slider'+rowId}className='w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                  {movies.map((item,id)=>(
                 <Movie key={id} item={item}/>
                  ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40}className='right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursos-pointer z-10 hidden group-hover:block'/>
            </div>
        </>
    );
}

export default Row;
