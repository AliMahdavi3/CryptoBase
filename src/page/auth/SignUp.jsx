import { Form, Formik } from 'formik'
import React from 'react'
import { NavLink } from "react-router-dom"
import { initialValues, onSubmit, validationSchema } from '../core/registerCore'
import FormikControl from './FormikControl'

const SignUp = () => {
  return (
    <div className='container'>
      <Formik 
      initialValues={initialValues}
      onSubmit={(values)=>onSubmit(values)}
      validationSchema={validationSchema}
      >
        {
          formik=>{
            return (
              <div className='w-50 mx-auto px-4 py-5'>
                <h1 className='fs-2 fw-bold'>Sign Up</h1>
                <Form>

                  <FormikControl
                  control="input"
                  formik={formik}
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Email"
                  icon="bi bi-envelope"
                  />

                  <FormikControl
                  control="input"
                  formik={formik}
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  icon="bi bi-key"
                  />

                  <FormikControl
                  control="input"
                  formik={formik}
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  placeholder="Password"
                  icon="bi bi-key"
                  />
                  
                  <button className='py-3 px-4 w-100 border-0 rounded-5 btn btn-success shadow-lg mt-2'>Sign In</button>
                </Form>
                <p className='text-center mt-3'>Already, have an account ? <NavLink className="text-decoration-none" to="/signin">Sign In</NavLink></p>
              </div>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default SignUp