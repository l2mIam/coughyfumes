import { COMMENTS } from '../../app/shared/COMMENTS'

export const selectCommentsByLocationId = (locationId) => {
  return COMMENTS.filter(comment => comment.locationId === parseInt(locationId))
}