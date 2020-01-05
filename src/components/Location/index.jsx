import * as React from 'react'
import PropTypes from 'prop-types';
import './index.scss'

const Location = ({ loc: { city, country_name } = {} }) => {
    return (
        <section className="location">
<span className="location__text">{city}, {country_name}</span>
        </section>
    )
}

Location.propTypes = {
    loc: PropTypes.object.isRequired
}

Location.defaultProps = {
    loc: {}
}

export default Location