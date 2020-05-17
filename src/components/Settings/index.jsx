import * as React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions'
import './index.scss'

const Settings = ({ dispatch, isShowSettings, currentLocation }) => {
    return (
        <div className={`settings__container ${isShowSettings ? 'activate' : ''}`}>
            <div className="wrap__icon">
                <span
                    className="icon__gear"
                    onClick={() => dispatch({ type: ACTIONS.SHOW_SETTINGS, payload: isShowSettings })}>
                    &#x2715;
                </span>
            </div>
            <div className={`wrap__options`}>
                <div className="wrap__location">
                    <span className="options__title">Location</span>
                    <div className="location__input">
                        <input
                            onChange={(e) => dispatch({ type: ACTIONS.UPATE_LOCATION, payload: {currentLocation:e.target.value} })}
                            onKeyDown={(e) => { e.key === 'Enter' && dispatch({ type: ACTIONS.FECTCH_NEW_LOCATION, payload: {currentLocation} }) }}
                        />
                    </div>
                </div>
                <div className="wrap__unit">
                    <span className="options__title">Units</span>
                    <div className="unit__selector">
                        <span className="unit__selector--radio">
                            <input type="radio" name="unit" id="fahrenheit" />
                            <label htmlFor="fahrenheit">Fahrenheit</label>
                        </span>
                        <span className="unit__selector--radio">
                            <input type="radio" name="unit" id="celsius" />
                            <label htmlFor="celsius">Celsius</label>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

Settings.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isShowSettings: PropTypes.bool.isRequired
}

Settings.defaulProps = {
    dispatch: null,
    isShowSettings: false
}

export default connect(
    state => ({ currentLocation: state.currentLocation }),
    null
)(Settings)