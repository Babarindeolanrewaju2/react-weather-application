import * as React from 'react'
import PropTypes from 'prop-types';
import * as ACTIONS from '../../actions'
import './index.scss'

const Settings = ({ dispatch, isShowSettings }) => {
    return (
        <div className={`settings__container ${isShowSettings ? 'activate' : ''}`}>
            <div className="wrap__icon">
                <span
                    className="icon__gear"
                    onClick={() => dispatch({ type: ACTIONS.SHOW_SETTINGS, payload: isShowSettings })}>
                    &#x2715;
                </span>
            </div>
            <div className={`wrap__optinos`}>
                <div className="wrap__unit">
                    <span className="unit__title">Units</span>
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
export default Settings