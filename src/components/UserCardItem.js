import React from "react";
import { Flex, Text, Box, Icon, Avatar, IconButton } from "@chakra-ui/react"
import {BiEnvelope} from "react-icons/bi"
import {FiPhoneCall} from "react-icons/fi"
import {BsArrowRightShort} from "react-icons/bs";
import {FaFlag} from "react-icons/fa";

const UserCardItem = ({user, setShowUserProfile,setUser, showCountry}) => {

    const { name, location, email, cell, picture } = user

    const displayUserProfile = (userDetails) => {
        setShowUserProfile(true)
        setUser(userDetails)
    }

    return(
        <Flex w="100%" mb="20px" p="15px" bg="#FCFCFF" borderRadius="18px" boxShadow="md">
            <Flex justify="center" align="center" mr="20px">
                <Avatar border="3px solid #75D6D1" size="lg" name={`${name.last} ${name.first}`} src={picture.medium} />
            </Flex>
            <Flex w="100%" direction="column">
                <Text mb="5px" fontSize="18px" fontWeight="bold" color="#262A41"> {`${name.last} ${name.first}`}</Text>
                <Text fontSize="sm" fontStyle="italic" color="#262A41" opacity="0.69" > {`${location.street.number} ${location.street.name}, ${location.city}, ${location.state} `} </Text>
                {/* For flag, Maybe */}
                <Flex display={showCountry ? "block" : "none"} align="center" fontSize="sm" color="#BABDD1"> 
                        <Icon mr="5px" display="inline" as={FaFlag} />
                        <Text display="inline"> {location.country}</Text>
                </Flex>
                <Flex justify="space-between" align="center" color="#BABDD1"> 
                    <Box fontSize="sm" > 
                        <Icon display="inline" as={BiEnvelope} />
                        <Text display="inline"> {email} </Text>
                    </Box>
                    <Box fontSize="sm"> 
                        <Icon display="inline" as={FiPhoneCall} />
                        <Text display="inline"> {cell}</Text>
                    </Box>
                    <Box>
                        <IconButton size="sm" bg="#30BBB5" color="#FCFCFF" as={BsArrowRightShort} boxShadow="md" _hover={{bg:"#048a84"}} onClick={() => displayUserProfile(user)} />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default UserCardItem;