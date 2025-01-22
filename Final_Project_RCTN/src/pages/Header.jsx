import React, { useState } from "react";
import './header.css'
import { Link, NavLink } from "react-router";
import {} from "react-redux"


export default function Header(){
    const [activeNav, setActiveNav] = useState("")

    

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
                <a className="navbar-brand" href="#">
                    <svg width="80px" height="60px" viewBox="0 -187 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M340.657183,0 L340.657183,100.203061 C353.016406,100.778079 365.344207,101.473198 377.637095,102.293306 L377.637095,123.537553 C358.204486,122.242243 338.690182,121.253471 319.094879,120.57923 L319.094879,0 L340.657183,0 Z M512,0.0118710746 L483.922918,65.1060972 L511.993017,137.54371 L511.961595,137.557485 C503.784957,136.3909 495.597845,135.289637 487.386294,134.233936 L471.623048,93.5776798 L455.709676,130.459835 C448.168455,129.627123 440.61676,128.839275 433.047609,128.100899 L460.419447,64.6708546 L435.351871,0.0118710746 L458.677285,0.0118710746 L472.712335,36.1957639 L488.318473,0.0118710746 L512,0.0118710746 Z M245.093161,119.526252 L245.092462,0.0114869428 L305.282574,0.0114869428 L305.282574,21.4467074 L266.654767,21.4467074 L266.654767,49.2277266 L295.881884,49.2277266 L295.881884,70.4719734 L266.654767,70.4719734 L266.654767,119.521329 L245.093161,119.526252 Z M164.580156,21.448488 L164.579458,0.0103695593 L231.270382,0.0103695593 L231.270382,21.4469875 L208.705375,21.4469875 L208.705375,120.107799 C201.508397,120.296154 194.3191,120.519389 187.144466,120.790104 L187.144466,21.448488 L164.580156,21.448488 Z M90.8682168,126.966224 L90.8682168,0.0139657936 L150.758077,0.0139657936 L150.758077,21.4491862 L112.42703,21.4491862 L112.42703,50.4849807 C121.233151,50.3722116 133.754021,50.2444297 141.543822,50.2632828 L141.543822,71.5092753 C131.792954,71.388127 120.786264,71.6429923 112.42703,71.7264345 L112.42703,103.88974 C125.166805,102.887736 137.944984,102.011069 150.758077,101.270912 L150.758077,122.517253 C130.704017,123.672422 110.740031,125.160591 90.8682168,126.966224 Z M48.5710466,77.8540254 L48.5696502,0.0104745953 L70.1319549,0.0104745953 L70.1319549,128.968837 C62.2496338,129.779728 54.3823252,130.642465 46.5286328,131.553346 L21.5609083,59.8244682 L21.5609083,134.625696 C14.3597408,135.563565 7.17323695,136.54141 0,137.562338 L0,0.0118710746 L20.4911722,0.0118710746 L48.5710466,77.8540254 Z M395.425298,124.819071 L395.425298,124.819211 L395.425298,0.0120101224 L416.987603,0.0120101224 L416.987603,126.599777 C409.809478,125.960833 402.624371,125.369895 395.425298,124.819071 Z" fill="#DB202C" fillRule="nonzero"> </path> </g> </g></svg>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse p-2" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                to="/popular" 
                                style={({ isActive }) => ({
                                    color: isActive
                                        ? "greenyellow"
                                        : "white",
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    marginRight: "1rem",
                                    transition: 0.3
                                })}
                            >
                                Popular
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/now_playing"
                                style={({ isActive }) => ({
                                    color: isActive
                                        ? "greenyellow"
                                        : "white",
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    marginRight: "1rem",
                                    transition: 0.3
                                })}
                            >
                                Now Playing
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/top_rated"
                                style={({ isActive }) => ({
                                    color: isActive
                                        ? "greenyellow"
                                        : "white",
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    marginRight: "1rem",
                                    transition: 0.3
                                })}
                            >
                                Top Rated
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/upcoming"
                                style={({ isActive }) => ({
                                    color: isActive
                                        ? "greenyellow"
                                        : "white",
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    marginRight: "1rem",
                                    transition: 0.3
                                })}
                            >
                                Up Coming
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}