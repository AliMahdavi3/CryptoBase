import { FastField } from 'formik'
import React from 'react'

const Input = ({label, type, placeholder, icon, name, formik}) => {
  return (
    <div className='my-4'>
        <label>{label}</label>
        <div className={`w-100 my-2 shadow-lg rounded-5 email 
        ${formik.errors[name] && formik.touched[name] ? "validation" : null}`}>
            <FastField type={type} name={name} placeholder={placeholder} className='w-100 rounded-5 border-0 py-3 px-4'/>
            <i className={`${icon} position-absolute mt-3 d-none d-sm-inline`}></i>
        </div>
    </div>
  )
}

export default Input