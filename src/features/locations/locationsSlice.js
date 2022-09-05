import { LOCATIONS } from '../../app/shared/LOCATIONS'

export const selectAllLocations = () => {
  return LOCATIONS
}

export const selectRandomLocation = () => {
  return LOCATIONS[Math.floor(LOCATIONS.length * Math.random())]
}