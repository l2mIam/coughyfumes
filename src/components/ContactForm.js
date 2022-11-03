import { Button, Label, Col, FormGroup } from "reactstrap"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup'

require("yup-phone")

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('form values: ', JSON.stringify(values))
    resetForm()
  }

  let initialValues= {
    firstName: '',
    lastName: '',
    phoneNum: '',
    email: '',
    agree: false,
    contactType: 'By Phone',
    feedback: ''
  }

  let schema = Yup.object().shape({
    firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
    lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
    phone: Yup.string()
    .phone('Invalid phone')
    .required('Required!'),
    email: Yup.string()
    .email('Invalid email')
    .required('Required!')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik
        return (
          <div className="container">
            <Form>
              <FormGroup row>
                <Label htmlFor='firstName' md='2'>First Name</Label>
                <Col md='10'>
                  <Field
                    type="text"
                    name='firstName'
                    placeholder='First Name'
                    id='firstname'
                    className={
                      errors.firstName && touched.firstName ? "input-error form-control" : "form-control"
                    }
                  />
                  <ErrorMessage name='firstName' component="span" className="text-danger" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='lastName' md='2'>Last Name</Label>
                <Col md='10'>
                <Field
                    type="text"
                    name='lastName'
                    placeholder='Last Name'
                    id='lastname'
                    className={
                      errors.lastName && touched.lastName ? "input-error form-control" : "form-control"
                    }
                  />
                  <ErrorMessage name='lastName' component="span" className="text-danger" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='phone' md='2'>Phone</Label>
                <Col md='10'>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder='Phone Number'
                    id="phone"
                    className={
                      errors.phoneNum && touched.phoneNum ? "input-error form-control" : "form-control"
                    }
                  />
                  <ErrorMessage name="phone" component="span" className="text-danger" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='email' md='2'>Email</Label>
                <Col md='10'>
                  <Field
                    type="email"
                    name="email"
                    placeholder='Email Address'
                    id="email"
                    className={
                      errors.email && touched.email ? "input-error form-control" : "form-control"
                    }
                  />
                  <ErrorMessage name="email" component="span" className="text-danger" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label check md={{ size: 4, offset: 2}}>
                  <Field name='agree' type='checkbox' className='form-check-input'/>{' '}
                  May we contact you?
                </Label>
                <Col md='4'>
                  <Field name='contactType' as='select' className='form-select'>
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Field>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='feedback' md='2'>Your Feedback</Label>
                <Col md='10'>
                  <Field className='form-control' name='feedback' as='textarea' rows='12' />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button
                    type='submit'
                    color='primary'
                    className={!(dirty && isValid) ? "disabled-btn" : ''}
                    disabled={!(dirty && isValid)}
                  >
                    Submit Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        )
      }}

    </Formik>
  )
}

export default ContactForm