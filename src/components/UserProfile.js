import React from "react";
import { Flex, Text, Box, Icon, Avatar, IconButton, Tag } from "@chakra-ui/react";
import Fade from 'react-reveal/Fade';
import {BiEnvelope} from "react-icons/bi"
import {FiPhoneCall} from "react-icons/fi"
import {BsArrowLeftShort} from "react-icons/bs"
import {IoIosPhonePortrait} from "react-icons/io";
import {FaFlag} from "react-icons/fa";

const UserProfile = ({user, setShowUserProfile, showCountry}) => {
    
    const { name, location, email, cell, picture, registered, phone } = user

    const returnToUsers = () => {
        setShowUserProfile(false)
    }

    return(
        <Fade bottom>
            <Flex w="20%" align="center" mb="20px" cursor="pointer" onClick={returnToUsers}>
                <IconButton mr="5px" size="sm" bg="transparent" color="#30BBB5" opacity="0.61" as={BsArrowLeftShort} />
                <Text  fontSize="11px" color="#262A41" opacity="0.52"> RESULTS </Text>
            </Flex>
            <Flex direction={["column","column","column","row"]} justify="center" w="100%" p={["5px","5px","5px","10px"]} >
                <Flex justify="center" align="flex-start" mr={["10px","20px"]}>
                    <Avatar size="2xl" name={`${name.last} ${name.first}`} src={picture.large} border="3px solid #75D6D1" />
                </Flex>
                <Flex w="100%" justify={["center"]} direction="column">
                    <Text fontSize="22px" fontWeight="bold" color="#262A41" textAlign={["center", "center", "center", "left"]} mb="10px">
                         {`${name.last} ${name.first}`}
                    </Text>
                    <Text fontSize="sm" fontWeight="200" color="#262A41" opacity="0.69" mb="10px" textAlign={["center", "center", "center", "left"]}>
                         {`${location.street.number} ${location.street.name}, ${location.city}, ${location.state}`} 
                    </Text>
                     <Box display={showCountry ? "flex" : "none"} fontSize="sm" fontWeight="500"> 
                        <Tag mb="8px" p="5px" align="center" borderRadius="18px" bg="#30BBB5" fontSize="sm" color="#262A41" opacity="0.52" > 
                            <Icon mr="5px" display="inline" as={FaFlag} />
                            <Text display="inline"> {location.country}</Text>
                        </Tag>
                    </Box>
                    <Flex fontWeight="600" justify={["center", "center", "center", "flex-start"]}>
                        <Tag mb="8px" p="5px" align="center" borderRadius="18px" bg="#00000029" fontSize="sm" color="#262A41" opacity="0.52" > 
                            <Icon mr="5px" display="inline" as={BiEnvelope} />
                            <Text display="inline"> {email} </Text>
                        </Tag>
                    </Flex>
                    <Flex justify={["center", "center", "center", "flex-start"]}> 
                        <Tag bg="rgb(255,0,255, 0.15)" p="7px" borderRadius="18px" mb="10px" fontSize="12px" fontWeight="500" color="#262A41">
                            <Text opacity="0.52">  {`JOINED: ${registered.date.substring(0,10)}`} </Text>
                        </Tag>
                    </Flex>
                    <Flex mb="8px" color="#262A41" fontSize="sm" fontWeight="500" opacity="0.52" justify={["center", "center", "center", "flex-start"]}> 
                        <Icon mr="5px" display="inline" as={FiPhoneCall} />
                        <Text display="inline"> {cell} </Text>
                    </Flex>
                    <Flex color="#262A41" fontSize="sm" fontWeight="500" opacity="0.52" justify={["center", "center", "center", "flex-start"]}>
                        <Icon mr="5px" display="inline" as={IoIosPhonePortrait} />
                        <Text display="inline">  {phone} </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Fade>
    )
}

export default UserProfile;
