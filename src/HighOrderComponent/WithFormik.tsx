import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";


const WithFormik = ({children , handleSubmit , getInitialValues , getValidationSchema}:WithFormikProps) => {

  return (
    <div className='WithFormik'>
      {
      <Formik
      initialValues={getInitialValues()}
      validationSchema={getValidationSchema()}
      onSubmit={handleSubmit}
      enableReinitialize
      >
        {(formik) => (
          <Form>
            {children}
          </Form>
        )}
      </Formik>
      }
    </div>
  )
}

export default WithFormik

interface WithFormikProps {
  children: React.ReactNode; 
  handleSubmit: (values: any, formikHelpers: any) => void; 
  getInitialValues: () => any; 
  getValidationSchema: () => Yup.Schema<any>; 
}