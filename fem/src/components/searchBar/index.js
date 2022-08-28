import React, { useEffect, useState } from 'react'
import { ClearButton, SearchBar, SearchBarItem, SearchBarWrapper } from './style'

const Index = ({filterList, clearSearchHandler}) => {
  
  const [search, setSearch] = useState([])

  useEffect(() => {
    console.log(filterList);
    setSearch([...filterList])
  }, [filterList]);
  
  return (
    <SearchBarWrapper>
        <SearchBar>
          {search.length < 1 ? <></> : search.map((el, index) => (
            <SearchBarItem key={index} onClick={() => clearSearchHandler(el)}>{el.data}</SearchBarItem>
          ))}
            
        </SearchBar>
        <ClearButton>
            Clear
        </ClearButton>
    </SearchBarWrapper>
  )
}

export default Index