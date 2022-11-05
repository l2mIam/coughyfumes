import { Col } from "reactstrap"
import Comment from './Comment'
import { selectCommentsByLocationId } from "./commentSlice"
import CommentForm from "./CommentForm"

const CommentsList = ({ locationId }) => {
  const comments = selectCommentsByLocationId(locationId)
  if (comments && comments.length > 0) {
    return (
      <Col md='5' className="m-1">
        <h4>Comments</h4>
        {comments.map(comment => {
          return (
            comment && (
              <Comment key={comment.id} comment={comment} />
            )
          )
        })}
        <CommentForm />
      </Col>
    )
  }
  return (
    <Col md='5' className="m-1">
      No comments for this location yet
    </Col>
  )
}

export default CommentsList