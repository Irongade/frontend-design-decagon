import React, {useState, useEffect} from "react";
import UserService from "./services/user-service";
import { Flex } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard"
import Users from "./components/Users"
import {filterCriteria, searchCriteria }from "./utils.js"

const App = () => {

  const [ users, setUsers] = useState([])
  const [ isLoading, setIsLoading] = useState(false)
  const [ filterBy, setFilterBy] = useState(filterCriteria.FILTER_BY_ALL_USERS)
  const [ searchBy, setSearchBy] = useState(searchCriteria.SEARCH_BY_NAME)
  const [searchField, setSearchField] = useState("")

  useEffect(
    () => {
      async function fetchUsers() {
        try {
          const response = await UserService.get("?results=12&exc=login&seed=user")
          if(response.status === 200) {
            setUsers(response.data.results)
            setIsLoading(true)
          }
        } catch (err) {
          window.location.reload()
        }
      }

      fetchUsers()
    }, []
  )

  const filteredUsers = users.filter(user => {
    switch(filterBy) {
      case filterCriteria.FILTER_BY_ALL_USERS: 
        return user;
      case filterCriteria.FILTER_BY_MALE_USERS:
        if(user.gender === "male") {
          return user
        } 
        break;
      case filterCriteria.FILTER_BY_FEMALE_USERS:
        if(user.gender === "female") {
          return user
        } 
        break; 
      default:
        return user
    }
  })

  const searchedUsers = filteredUsers.filter(user => {
    const fullName = `${user.name.last} ${user.name.first}`
    switch(searchBy) {
      case searchCriteria.SEARCH_BY_NAME:
        if (fullName.toLowerCase().includes(searchField.toLowerCase())) {
          return user
        }
        break;
      case searchCriteria.SEARCH_BY_EMAIL:
        if (user.email.toLowerCase().includes(searchField.toLowerCase())) {
          return user
        }
        break; 
        case searchCriteria.SEARCH_BY_COUNTRY:
          if (user.location.country.toLowerCase().includes(searchField.toLowerCase())) {
            return user
          }
          break;    
      default:
        return user
    }
  })

  return (

    <Flex p={["10px","10px","10px","20px"]} bg="#262A41" justify="center" direction={["column", "column", "column", "row"]} minHeight="100vh" fontFamily="Poppins">
      <Dashboard setFilterBy={setFilterBy} setSearchField={setSearchField} />
      <Flex w={["100%","100%","100%","50%"]} mt={["20px","20px","20px","0px"]}>
        <Users searchedUsers={searchedUsers} setSearchBy={setSearchBy} setSearchField={setSearchField} isLoading={isLoading} />
      </Flex>
    </Flex>
  );
}

export default App;
