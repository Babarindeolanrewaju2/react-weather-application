import * as React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Temperature = ({ temperature, icon, description }) => {
    return (
        <section className="current-condition">
            <div className="wrapper-temperature">
                <span className="temperature__status">{description}</span>
                <div className="temperature">
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather_icon"/>
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
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

Temperature.defaultProps = {
    icon: '',
    temperature: 0,
    description: ''
}
export default Temperature