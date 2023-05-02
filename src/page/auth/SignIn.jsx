import React from 'react'
import { NavLink } from "react-router-dom"
import { Formik, Form} from "formik"
import { initialValues, onSubmit, validationSchema } from '../core/loginCore'
import FormikControl from './FormikControl'

const SignIn = () => {
  return (
    <div className='container'>
      <Formik
      initialValues={initialValues}
      onSubmit={(actions, values)=>onSubmit(actions, values)}
      validationSchema={validationSchema}
      >
        {
          formik=>{
            return (
              <div className='w-50 mx-auto px-4 py-5'>
                <h1 className='fs-2 fw-bold'>Sign In</h1>
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
                  <button className='py-3 px-4 w-100 border-0 rounded-5 btn btn-success shadow-lg mt-2'>Sign In</button>
                </Form>
                <p className='text-center mt-3'>Don't have an account ? <NavLink className="text-decoration-none" to="/signup">Sign Up</NavLink></p>
              </div>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default SignIn