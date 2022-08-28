import React, { useEffect, useState } from 'react'
import JobOfferBanner from 'components/shared/jobOfferBanner/index'
import {PanelPageWrapper} from './style.js'






const Index = ({jobData, handleFilter}) => {
  const [jobOffer, setJobOffer] = useState([...jobData])  

  useEffect(() => {
    setJobOffer([...jobData])
  }, [jobData]);

  return (
    <PanelPageWrapper>
      {jobOffer.length > 0? jobOffer.map((el) => (  
        <JobOfferBanner onClick={handleFilter} key={el.id} {...el} />
        )): null}   
    </PanelPageWrapper>
  )
}

export default Index