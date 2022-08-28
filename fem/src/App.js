import JobPanel from './pages/JobPanel';
import SearchBar from './components/searchBar';
import { AppWrapper } from 'style';
import { useState } from 'react';
import compData from 'db/data.json'

function App() {
  const [jobOffer, setJobOffer] = useState([...compData])
  const [searchList, setSearchList] = useState([])
  const [filterList, setFilterList] = useState([])

  const clearSearch = (toRemove) => {
    let temp = searchList.filter(x => x !== toRemove) 
    setSearchList([...temp])
    handleFilter(toRemove.flag, toRemove.data, 're')
  }

  const handleSearch = (data) => {

    if (!searchList.includes(data.data)) {
      setSearchList(prev => [...prev, data])
      switch (data.flag) {
        case 'role':
          handleFilter('role', data.data)
          break;
          case 'level':
          handleFilter('level', data.data)
          break;
          case 'lang':
          handleFilter('lang', data.data)
          break;
          case 'tools':
          handleFilter('tools', data.data)
          break;
                
        default:
          break;
      }
    }    
  }


  const handleFilter = (flag, data, filterType) => {
    let  temp = [...jobOffer]

    let finalList =[]
    switch (flag) {
      case 'role':
        finalList = temp.filter(el => el.role === data)
        break;
      case 'level':
        finalList = temp.filter(el => el.level === data)
        break;
      case 'lang':
        finalList = temp.filter(el => el.languages.includes(data))
        break;
      case 'tools':
        finalList = temp.filter(el => el.tools.includes(data))
        break;
      default:
        break;
    }
    setJobOffer([...finalList])
  }

  


  return (
    <AppWrapper>
      <SearchBar filterList={searchList} clearSearchHandler={clearSearch}/>
      <JobPanel jobData={jobOffer} handleFilter={handleSearch}/>
    </AppWrapper>
  );
}

export default App;
