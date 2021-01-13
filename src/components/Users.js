import React, {useState} from "react";
import { Flex, Text, Box, InputGroup, Input, InputLeftElement, Select, Switch, Button, Icon, IconButton } from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi"
import {IoIosCloudDownload} from "react-icons/io"
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md"
import {UserCardItem, UserCardItemSkeleton} from "./UserCardItem";
import UserProfile from "./UserProfile";
import {searchCriteria} from "../utils"

const Users = ({searchedUsers, setSearchBy, setSearchField}) => {

    const [pageNum, setPageNum] = useState(0)
    const [user, setUser] = useState(false)
    const [showUserProfile, setShowUserProfile] = useState(false)
    const [showCountry, setShowCountry] = useState(false)

    const paginate = (array, pageSize, pageNumber) => {
        return array.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize);
      };
    

    const incrementPage = () => {
        if(pageNum < Math.ceil(parseInt(searchedUsers.length) / 3 - 1 )) {
            setPageNum(pageNum + 1)
        }
    }

    const decrementPage = () => {
        if(pageNum > 0)
        setPageNum(pageNum - 1)
    }

    return(
        <Flex w="100%" p={["10px","10px","10px","50px"]} pb={["60px", "60px", "60px", "50px"]} bg="#F7F7FF" border="1px solid #707070" borderRadius="28px" direction="column" position="relative">
            <Flex direction="column"> 
                <Text mb="20px" fontSize="37px" fontWeight="bold" color="#262A41" > All Users</Text>
                <Text mb="12px" fontSize="sm" fontWeight="200" color="#262A41"> Filter by</Text>
                <Flex mb="20px" w="100%" justify="space-between" align="center" fontWeight="600"> 
                    <Box>
                        <InputGroup size="md" w="100%">
                        <InputLeftElement color="#262A41" opacity="0.31" children={<Icon as={FiSearch} />} />
                        <Input border="0px" opacity="0.62" borderRadius="20px" fontSize="sm" bg="#00000029" color="#262A41" placeholder="Find in list" onChange={e => setSearchField(e.target.value)} />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Select bg="#00000029" fontSize="sm" fontWeight="bold" color="#262A41" borderRadius="20px" onChange={e => setSearchBy(e.target.value)}>
                            <option value={searchCriteria.SEARCH_BY_NAME}>Name</option>
                            <option value={searchCriteria.SEARCH_BY_EMAIL}>Email</option>
                            <option value={searchCriteria.SEARCH_BY_COUNTRY}>Country</option>
                        </Select>
                    </Box>
                    <Box>
                        <Switch display="inline" defaultChecked colorScheme="teal" opacity="0.61" onChange={()=> setShowCountry(!showCountry)} />
                        <Text display={["block","inline"]} fontSize="sm" color="#262A41" cursor="pointer"> Show country </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex direction="column">
                {
                    !showUserProfile && searchedUsers.length < 1 &&  <>
                    <UserCardItemSkeleton />
                    <UserCardItemSkeleton />
                    <UserCardItemSkeleton />
                    </>
                }
                {
                    !showUserProfile && searchedUsers.length > 1 && paginate(searchedUsers, 3, pageNum).map((user, index) => <UserCardItem user={user} setUser={setUser} key={index} showCountry={showCountry} setShowUserProfile={setShowUserProfile} /> )
                }
                {   showUserProfile && <UserProfile showCountry={showCountry} user={user} setShowUserProfile={setShowUserProfile} /> }
            </Flex>
            <Flex w={["93%","93%","93%","83%"]} justify="space-between" align="center" position="absolute" bottom="0" mb="15px" fontWeight="600" >
                <Box> 
                    <Button bg={showUserProfile ? "#BABDD1" : "#7946C1"} color="#FFFFFF" _hover={showUserProfile? {bg: "#a8aaba"} : { bg:"#55308a"}} borderRadius="28px" leftIcon={<IoIosCloudDownload />}> Download results </Button>
                </Box>
                <Box float="right"> 
                    <IconButton size="sm" mr="5px" bg="#E2E2EA" color="#262A41" as={MdKeyboardArrowLeft} onClick={decrementPage}  />
                    <IconButton size="sm" bg={showUserProfile? "#BABDD1" : "#262A41"} color="#FFFFFF" _hover={showUserProfile? {bg: "#a8aaba"} : { bg:"#1b1d2e"}}  as={MdKeyboardArrowRight} onClick={incrementPage} />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Users;
