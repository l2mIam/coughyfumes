import { LOCATIONS } from '../../app/shared/LOCATIONS'

export const selectAllLocations = () => {
  return LOCATIONS
}

export const selectLocationById = (id) => {
  // getting id from useParams which parses URL param as string
  // need to parseInt so comparing same datatype
  return LOCATIONS.find(location => location.id === parseInt(id))
}

export const selectFeaturedLocation = () => {
  return LOCATIONS.find(location => location.featured)
}