const APIKEY = process.env.REACT_APP_LOCATION_APIKEY

const getIPGeoLocation = () =>
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${APIKEY}`)
        .then(response => response.json())

export default getIPGeoLocation