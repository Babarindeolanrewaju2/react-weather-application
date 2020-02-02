
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as actions from '../actions'

import { loc } from '../reducers/fetch'

import APIUtilits from '../api/APIUtils'

const APIKEY = process.env.REACT_APP_LOCATION_APIKEY

function* fetchloc(action) {
  try {
    let loc = yield fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${APIKEY}`);
    loc = yield loc.json();
    console.log(loc);

    yield put({ type: 'FETCH_LOC', loc });
  } catch (error) {
    yield put({ type: 'FETCH_LOC_ERROR', error });
  }
}

export function* startup() {
   yield fork(fetchloc)
 }

 export default function* root() {
   yield fork(startup)
 }