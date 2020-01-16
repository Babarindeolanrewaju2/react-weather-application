import * as React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const timeConvert = (unix_timestamp) => {
    var dateObj = new Date(unix_timestamp * 1000);
    return `${dateObj.getHours()}:${dateObj.getMinutes()}`
}

const dateObj = (unix_timestamp) => {
    var dateObj = new Date(unix_timestamp * 1000);

    let day = dateObj.toLocaleString(
        'en-us', { day: 'numeric' }
    )

    let month = dateObj.toLocaleString(
        'en-us', { month: 'long' }
    )
    let year = dateObj.toLocaleString(
        'en-us', { year: 'numeric' }
    )
    let weekday = dateObj.toLocaleString(
        'en-us', { weekday: 'long' }
    )
    return `${weekday}, ${month} ${day}, ${year}`
}

const CurrentDate = ({ currentTime }) => {
    return (
        <section className="date-current">
            <div>
                {dateObj(currentTime)}
            </div>
            <div className="date-current__text">
                {timeConvert(currentTime)}
            </div>
        </section>
    )
}

CurrentDate.propTypes = {
    currentTime: PropTypes.number.isRequired
}

CurrentDate.defaultProps = {
    currentTime: 0
}

export default CurrentDate