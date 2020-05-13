This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

Weather App

### `Features`

- Show Current Weather Forecast Baseon IP Geolocation

### `Web APIs`

- [OpenWeatherMap](https://openweathermap.org/)
- [IPGeoLocation.io](https://ipgeolocation.io/)

### `Tools`

- Redux
- Redux-Saga

### `Doc`

```js
import Location from '../components/Location'
```
Name       | Type     | Default
---------- | -------- | -------
city       | string   |
countryName| string   |


```js
import CurrentDate from '../components/CurrentDate'
```
Name       | Type     | Default
---------- | -------- | -------
currentTime| number   |


```js
import Tempertaure from '../components/Temperature'
```
Name       | Type     | Default
---------- | -------- | -------
temperature| number   |
icon       | string   |
description| string   |


```js
import Forecast from '../components/Forecast3hour'
```
Name        | Type     | Default
----------- | -------- | -------
fiveForecast| array    |
