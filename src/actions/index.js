export const FETCH_LOC = 'FETCH_LOC'

export function requestLoc(loc) {
    return {
      type: FETCH_LOC,
      loc,
    }
  }