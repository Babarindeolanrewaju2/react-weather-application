import * as React from 'react'
import PropTypes from 'prop-types';
import './index.scss'

const Location = ({ city, countryName }) => {
    return (
        <section className="location">
            <span className="location__text">{city}, {countryName}</span>
        </section>
    )
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired
}

Location.defaultProps = {
    city: '',
    countryName: ''
}

export default Location