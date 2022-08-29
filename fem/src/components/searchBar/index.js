import React, { useEffect, useState } from 'react'
import { ClearButton, SearchBar, SearchBarItem, SearchBarWrapper } from './style'

const Index = ({filterList, handleSearchFilter, clearAllSearchHandler}) => {
  
  const [search, setSearch] = useState(filterList)

  useEffect(() => {
    setSearch(filterList)
  }, [filterList]);

  
  return (
    <SearchBarWrapper>
        <SearchBar>
          {search?.roles.length > 0? search.roles.map((el, index) => (
            <SearchBarItem key={index} onClick={() => handleSearchFilter({type: 'role' , value: el})} >
              <span>{el}</span>
            </SearchBarItem>
          )): null}
          {search?.levels.length > 0? search.levels.map((el, index) => (
            <SearchBarItem onClick={() => handleSearchFilter({type: 'level' , value: el})} key={index} >
              <span>{el}</span>
            </SearchBarItem>
          )): null}
          {search?.langs.length > 0? search.langs.map((el, index) => (
            <SearchBarItem key={index} onClick={() => handleSearchFilter({type: 'lang' , value: el})}>
              <span>{el}</span>
            </SearchBarItem>
          )): null}
          {search?.tools.length > 0? search.tools.map((el, index) => (
            <SearchBarItem key={index} onClick={() => handleSearchFilter({type: 'tool' , value: el})}>
              <span>{el}</span>
            </SearchBarItem>
          )): null}
        </SearchBar>
        <ClearButton onClick={clearAllSearchHandler}>
            Clear
        </ClearButton >
    </SearchBarWrapper>
  )
}

export default Index