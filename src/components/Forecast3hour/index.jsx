import * as React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const timeConvert = (unix_timestamp) => {
    var dateObj = new Date(unix_timestamp * 1000);
    return dateObj.getHours()
}

const Forecast = ({ fiveForecast }) => {
    return (
        <div className="forecast__container">
            {fiveForecast && fiveForecast.map((forecast, index) =>
                <div key={index} className="forecast" >
                    <span className="forecast__title">{`${timeConvert(forecast.dt)}: 00`}</span>
                    <img className="forecast__icon"
                        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                    />
                    <span>
                        {`${parseInt(forecast.main.temp - 273.15)}℃`}
                    </span>
                    <span>
                        &#128167;{`${forecast.main.humidity}%`}
                    </span>
                </div>
            )}
        </div>
    )
}

Forecast.propTypes = {
    hour: PropTypes.string.isRequired,
}

Forecast.defaultProps = {
    hour: '00:00',
}

export default Forecast