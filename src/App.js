import React, {useState, useEffect} from "react";
import UserService from "./services/user-service";
import { Flex } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard"
import Users from "./components/Users"
import {filterSearch, searchCriteria }from "./utils.js"

const App = () => {

  const [ users, setUsers] = useState([])
  const [ filterBy, setFilterBy] = useState(filterSearch.FILTER_BY_ALL_USERS)
  const [ searchBy, setSearchBy] = useState(searchCriteria.SEARCH_BY_NAME)
  const [searchField, setSearchField] = useState("")

  useEffect(
    () => {
      async function fetchUsers() {
        try {
          const response = await UserService.get("?results=12&exc=login&seed=users")
          if(response.status === 200) {
            console.log(response.data.results)
            setUsers(response.data.results)
          }
        } catch (err) {
          console.log(err)
          window.location.reload()
        }
      }

      fetchUsers()
    }, []
  )

  const filteredUsers = users.filter(user => {
    switch(filterBy) {
      case filterSearch.FILTER_BY_ALL_USERS: 
        return user;
      case filterSearch.FILTER_BY_MALE_USERS:
        if(user.gender === "male") {
          return user
        } 
        break;
      case filterSearch.FILTER_BY_FEMALE_USERS:
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

    <Flex p="20px" bg="#262A41" justify="center" minHeight="100vh" fontFamily="Poppins">
      <Dashboard setFilterBy={setFilterBy} setSearchField={setSearchField} />
      <Flex w="50%">
        <Users searchedUsers={searchedUsers} setSearchBy={setSearchBy} setSearchField={setSearchField} />
      </Flex>
    </Flex>
  );
}

export default App;
