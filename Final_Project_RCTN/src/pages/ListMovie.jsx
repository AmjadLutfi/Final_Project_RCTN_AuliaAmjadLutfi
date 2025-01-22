import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllMovies, searchMovies } from "../store/action";
import {Link, useParams} from "react-router"
import './list.css'


export default function List(){
    const dataMovies = useSelector(state => state.dataMovies)
    
    const dispatch = useDispatch()

    const {param, query} = useParams()

    useEffect(()=>{
        // console.log(query,"===> query");
        // console.log(param,"===> param");

        if(query){
            dispatch(searchMovies(query))
        }else if(param){
            dispatch(getAllMovies(param)) 
        }else{
            dispatch(getAllMovies())
        }
    },[param, query])

    
    return(
        <>
            <div className="container py-5">
                <div className="row g-4">
                {dataMovies.map((el, idx) => (
                    <div className="col-md-4" key={idx}>
                        <div className="service-card hover-lift">
                            <div className="service-card-inner">
                                <div className="service-card-front" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${el.poster_path})`,backgroundSize: "cover", backgroundPosition: "center"}}>
                                    <div className="icon-wrapper">
                                    <svg width="109px" height="109px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 5V19M17 5V19M3 8H7M17 8H21M3 16H7M17 16H21M3 12H21M6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.0799 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    </div>
                                    <div className="info-card">
                                        <h3 className="h4 mb-2">{el.title}</h3>
                                        <p className="text-center mb-0">{el.overview}</p>
                                    </div>
                                    
                                </div>
                                <div className="service-card-back">
                                    <h4 className="mb-3">{el.title}</h4>
                                    <ul className="feature-list">
                                        <li>
                                            <b>Release:</b> 
                                            <p>{el.release_date}</p>
                                        </li>
                                        <li>
                                            <b>
                                                Popularity: 
                                            </b>
                                            <p>{el.popularity}</p>
                                        </li>
                                        <li>Vote: {el.vote_count}</li>
                                        <li>Rating: {el.vote_average}</li>
                                    </ul>
                                    <Link to={`/movie/${el.id}`}>
                                    <button className="btn btn-primary mt-4">
                                        Go Movies
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}