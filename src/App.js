import JobPanel from './pages/JobPanel';
import SearchBar from './components/searchBar';
import { AppWrapper } from 'style';
import { useEffect, useState } from 'react';
import compData from 'db/data.json'

function App() {
  const [jobOffer, setJobOffer] = useState([...compData])
  const [filterList, setFilterList] = useState({
    roles: [],
    levels: [],
    langs: [],
    tools: []
  })

  const [showFilter, setShowFilter] = useState(false)



  const jobFilter = () => {
    const jobs = [...compData]
    let Arr1 = []
    let Arr2 = []
    let Arr3 = []
    let Arr4 = []


    if (filterList.roles.length > 0) {
      Arr1 = jobs.filter(x => x.role.includes(filterList.roles))
    } else {
      Arr1 = [...jobs]
    }

    if (filterList.levels.length > 0) {
      Arr2 = Arr1.filter(x => x.level.includes(filterList.levels))
    } else {
      Arr2 = [...Arr1]
    }

    if (filterList.langs.length > 0) {
      
      Arr2.forEach(el => {
        if (el.languages.length > 0 && filterList.langs.every(x => el.languages.includes(x))) {
          Arr3.push(el)
        }
      });
    } else {
      Arr3 = [...Arr2]
    }

    if (filterList.tools.length > 0) {
      Arr3.forEach(el => {
        if (el.tools.length > 0 && filterList.tools.every(x => el.tools.includes(x))) {
          Arr4.push(el)
        }
      });
    } else {
      Arr4 = [...Arr3]
    }
   return [Arr4]
  }

  const handleSingleFilter = (filter) => {


    switch (filter.type) {
      case 'role':
        if (filterList.roles.includes(filter.value)) {
          setFilterList({
            ...filterList,
            roles: filterList.roles.filter(x => x !== filter.value)
          })}
        break;
      case 'level':
        if (filterList.levels.includes(filter.value)) {
          setFilterList({
            ...filterList,
            levels: filterList.levels.filter(x => x !== filter.value)
          })}
        break;
      case 'lang':
        if (filterList.langs.includes(filter.value)) {
          setFilterList({
            ...filterList,
            langs: filterList.langs.filter(x => x !== filter.value)
          })}
        break;
      case 'tool':
        if (filterList.tools.includes(filter.value)) {
          setFilterList({
            ...filterList,
            tools: filterList.tools.filter(x => x !== filter.value)
          })}
        break;
            
      default:
        break;
    }
  }

  const isFilterEmpty = () => {
    if (filterList.roles.length === 0 && filterList.levels.length === 0 && filterList.langs.length === 0 && filterList.tools.length === 0) {
      return true
    } else {
      return false
    }
  }



  const handleSearch = (data) => {    


    switch (data.flag) {
      case 'role':
        if(!filterList.roles.includes(data.data)) {
        setFilterList( prev => ({...prev, roles: [...prev.roles, data.data]}))
        }
        break;
      case 'level':
        if(!filterList.levels.includes(data.data)) {
        setFilterList( prev => ({...prev, levels: [...prev.levels, data.data]}))
        } 
        break;
      case 'lang':
        if(!filterList.langs.includes(data.data)) {
        setFilterList( prev => ({...prev, langs: [...prev.langs, data.data]}))
        }
        break;  
      case 'tools':
        if(!filterList.tools.includes(data.data)) {
        setFilterList( prev => ({...prev, tools: [...prev.tools, data.data]}))
        }
        break;  
      default:
        break;
      }
  }

  const clearFilters = () =>{
    setFilterList({
      roles: [],
      levels: [],
      langs: [],
      tools: []
    })
  }


  useEffect(() => {
    setShowFilter(!isFilterEmpty())
    setJobOffer(jobFilter())
  }, [filterList]);

  useEffect(() => {
    setJobOffer(jobFilter())
  }, []);

  return (
    <AppWrapper>
       <SearchBar filterList={filterList}  clearAllSearchHandler={clearFilters} handleSearchFilter={handleSingleFilter} show={showFilter}/>
      <JobPanel jobData={[...jobOffer]} handleFilter={handleSearch} />
    </AppWrapper>
  );
}

export default App;
