import * as React from 'react'
import './index.scss'

const Loading = () => {
    return (
        <div className="app__load">
            <div className="load__wrap">
                <p className="load__text">Loading...</p>
                <div className="load__dot"></div>
                <div className="load__dot"></div>
                <div className="load__dot"></div>
            </div>
        </div>
    )
}
export default Loading