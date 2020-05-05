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
                        alt={forecast.weather[0].main}
                    />
                    <span>
                        {`${parseInt(forecast.main.temp - 273.15)}℃`}
                    </span>
                    <span role="img" aria-label="humidity">
                        &#128167;{`${forecast.main.humidity}%`}
                    </span>
                </div>
            )}
        </div>
    )
}

Forecast.propTypes = {
    fiveForecast: PropTypes.array.isRequired,
}

Forecast.defaultProps = {
    fiveForecast: []
}
export default Forecast