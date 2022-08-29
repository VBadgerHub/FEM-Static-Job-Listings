import React, { useEffect, useState } from 'react'
import JobOfferBanner from 'components/shared/jobOfferBanner/index'
import {PanelPageWrapper} from './style.js'


const Index = ({jobData, handleFilter}) => {
  const [jobOffer, setJobOffer] = useState([...jobData]) 


  useEffect(() => {
    setJobOffer([...jobData])
  }, [jobData]);

  useEffect(() => {
    setJobOffer([...jobData])
  }, []);

  return (
    <PanelPageWrapper>
      {jobOffer[0]?.length > 0? jobOffer[0].map((el) => (  
        <JobOfferBanner onClick={handleFilter} key={el.id} {...el} />
        )): <div>nic</div>}   
    </PanelPageWrapper>
  )
}

export default Index