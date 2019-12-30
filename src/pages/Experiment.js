import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import InformatubeMain from '../components/informatube/InformatubeMain';


const Experiment = () => {
  const { me } = useSelector(state=>state.user);
  return (
    <>
    { !me && <Redirect to={"/login"} /> }
    <div>
      <InformatubeMain />
    </div>
    </>
  )
}

export default Experiment;
