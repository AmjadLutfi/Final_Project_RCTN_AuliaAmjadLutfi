import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetailMovies } from "../store/action";


export default function Movie(){
    const detailMovies = useSelector(state => state.detailMovies)
    const [dataDetail, setDatadetail] = useState([])

    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        // console.log("amjad masuk");
        setDatadetail(detailMovies)
        // console.log(detailMovies,"=====>datadetail");
        
    },[detailMovies]) 

    useEffect(()=>{
        dispatch(getDetailMovies(id))
    },[])


    return(
        <>
            <div className="container py-5">
                <div className="row">
                    
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <img src={`https://image.tmdb.org/t/p/w500${detailMovies.backdrop_path}`} className="card-img-top" alt="Product Image"/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h1 className="h2 mb-3">{detailMovies.original_title}</h1>
                        <div className="mb-3">
                            <span className="h4 me-2">{detailMovies.popularity}</span>
                            <span className="text-muted text-decoration-line-through">{detailMovies.vote_average}</span>
                            <span className="badge bg-danger ms-2">{detailMovies.status}</span>
                        </div>

                        <div className="mb-3">
                            <div className="d-flex align-items-center">
                                <div className="text-warning me-2">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <span className="text-muted">({detailMovies.vote_count})</span>
                            </div>
                        </div>

                        <p className="mb-4">{detailMovies.overview}</p>
                        
                        <div className="mb-4">
                            <h6 className="mb-2">Genres</h6>
                            <div className="btn-group" role="group">
                                {/* {
                                    dataMovie.length > 0 && (
                                        <>
                                        <input type="radio" className="btn-check" name="color" id="silver"/>
                                        <label className="btn btn-outline-secondary" >{detailMovies.genres[0].name}</label>
                                        <input type="radio" className="btn-check" name="color" id="gold"/>
                                        <label className="btn btn-outline-secondary" ></label>
                                        <input type="radio" className="btn-check" name="color" id="black"/>
                                        <label className="btn btn-outline-secondary" ></label>
                                        </>
                                    )
                                } */
                                    
                                        detailMovies.length > 0 && (
                                            <>
                                                <input type="radio" className="btn-check" name="color" id="silver"/>
                                                <label className="btn btn-outline-secondary" >{detailMovies.genres[0].name}</label>
                                                <input type="radio" className="btn-check" name="color" id="gold"/>
                                                <label className="btn btn-outline-secondary" ></label>
                                                <input type="radio" className="btn-check" name="color" id="black"/>
                                                <label className="btn btn-outline-secondary" ></label>
                                            </>
                                        )
                                    
                                    
                                }
                                
                            </div>
                        </div>

                        
                        <div className="mb-4">
                            <div className="d-flex align-items-center">
                                <label className="me-2">Ticket Quantity:</label>
                                <select className="form-select w-auto">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button">Add to Cart</button>
                            <button className="btn btn-outline-secondary" type="button">
                                    <i className="far fa-heart me-2"></i>Add to Wishlist Movie
                                </button>
                        </div>

                        
                        <div className="mt-4">
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-truck text-primary me-2"></i>
                                <span>Buy 1 Free 1 ticket for this Movie</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-undo text-primary me-2"></i>
                                <span>30-day return policy</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-shield-alt text-primary me-2"></i>
                                <span>2-year warranty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}