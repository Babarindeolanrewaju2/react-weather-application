import * as React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Temperature = ({ weather, temperature }) => {
    return (
        <section className="current-condition">
            <div className="wrapper-temperature">
                <span className="temperature__status">{weather[0] !== undefined && weather[0].description}</span>
                <div className="temperature">
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${weather[0] !== undefined && weather[0].icon}@2x.png`} alt="weather_icon"/>
                    </div>
                    <div className="temperature__value">
                        {parseInt(temperature - 273.15)}
                    </div>
                    <div className="temperature__unit">
                        <span className="temperature__unit-dot"></span>
                        <span className="temperature__unit-letter">c</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

Temperature.propTypes = {
    weather: PropTypes.array.isRequired,
    temperature: PropTypes.number.isRequired
}

Temperature.defaultProps = {
    weather: [],
    temperature: 0
}
export default Temperature