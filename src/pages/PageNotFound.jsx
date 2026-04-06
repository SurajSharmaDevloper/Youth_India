import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/base/button'

const PageNotFound = () => {
    const navigate = useNavigate()
    const inputRef = useRef(null)

    return (
        <section className="page-wrap">

            {/* Particles */}
            <span className="particle p1" />
            <span className="particle p2" />
            <span className="particle p3" />
            <span className="particle p4" />
            <span className="particle p5" />
            <span className="particle p6" />

            {/* Orbit */}
            <div className="orbit-wrap">
                <div className="pulse-ring" />
                <div className="orbit-ring ring-outer">
                    <div className="orbit-dot dot-a" />
                    <div className="orbit-dot dot-b" />
                </div>
                <div className="orbit-ring ring-inner">
                    <div className="orbit-dot dot-c" />
                </div>
                <div className="center-404">404</div>
                <div className="glitch-layer ">404</div>
            </div>

            {/* Content */}
            <div className="nf-content">
                <span className="nf-tag">Page not found</span>
                <h1 className="nf-headline">
                    Looks like you're lost
                    <span className="blink-cursor" />
                </h1>
                <p className="nf-subline">
                    The page you're looking for doesn't exist or has been moved.
                </p>


                <div className="btn-row">
                    <Button onClick={() => navigate('/')}>Home</Button>
                    <button className="btn-ghost" onClick={() => navigate(-1)}>
                        Go back
                    </button>
                    
                </div>
            </div>

        </section>
    )
}

export default PageNotFound