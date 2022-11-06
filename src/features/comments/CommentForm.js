import { useState } from "react"
// import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from "formik"
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap"
// import { postComment } from "./commentSlice"
import * as Yup from 'yup'

const CommentForm = () => {
  const { locationId } = useParams()

  const [modalOpen, setModalOpen] = useState()

  // const dispatch = useDispatch

  const handleSubmit = (values) => {
    const comment = {
      locationId: parseInt(locationId),
      rating: values.rating,
      author: values.author,
      text: values.commentText,
      date: new Date(Date.now()).toISOString()
    }

    console.log('comment:', comment);
    // dispatch(postComment(comment))
    setModalOpen(false)
  }

  let initialValues = {
    rating: undefined,
    author: "",
    commentText: ""
  }

  let schema = Yup.object().shape({
    rating: Yup.string().required('a rating is required'),
    author: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!')
  })

  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className="fa fa-pencil fa-lg" /> Add Comment
      </Button>
      <Modal isOpen={ modalOpen }>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Add Comment
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik
              return (
                <div className = 'container'>
                  <Form>
                    <FormGroup>
                      <Label htmlFor="rating">Rating</Label>
                      <Field
                        name='rating'
                        as='select'
                        className={
                          errors.rating && touched.rating ? "input-error form-control" : "form-control"
                        }
                      >
                        <option>Select...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Field>
                      <ErrorMessage name='rating' component='span' className="text-danger"/>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="author">Your Name</Label>   
                      <Field
                        name='author'
                        placeholder='Your Name'
                        className={
                          errors.author && touched.author ? "input-error form-control" : "form-control"
                        }
                      />           
                      <ErrorMessage name='author' component='span' className="text-danger"/>
                    </FormGroup>              
                    <FormGroup>
                      <Label htmlFor="commentText">Comment</Label>
                      <Field
                        name='commentText'
                        as='textarea'
                        rows='12'
                        className='form-control'
                      />
                    </FormGroup>       
                    <Button
                      type='submit'
                      color='primary'
                      className={!(dirty && isValid) ? "disabled-btn" : ''}
                      disabled={!(dirty && isValid)}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              )
            }}
          </Formik>
        </ModalBody>
      </Modal>
    </>
  )
}

export default CommentForm