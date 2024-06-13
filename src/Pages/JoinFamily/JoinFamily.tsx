import React from 'react';
import Layout from '../../Layout/app/Layout';
import WithFormik from '../../HighOrderComponent/WithFormik';
import { getDataToSend, getInitialValues, getValidationSchema } from './formUtils';
import JoinFamilyForm from './JoinFamilyForm';

const JoinFamily: React.FC = () => {

  const handelSubmit = (values:any)=>{
    const dataToSend = getDataToSend(values)
    // mutate(dataToSend)
  }

  return (
    <WithFormik handleSubmit={handelSubmit}  getInitialValues={getInitialValues} getValidationSchema={getValidationSchema}>
      <Layout className="join_family without_background" >
        <JoinFamilyForm/>
      </Layout>
    </WithFormik>

  );
};

export default JoinFamily;