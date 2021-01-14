import React from "react";
import { Flex, Text, Box, Icon, Avatar, IconButton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Fade from 'react-reveal/Fade';
import {BiEnvelope} from "react-icons/bi"
import {FiPhoneCall} from "react-icons/fi"
import {BsArrowRightShort} from "react-icons/bs";
import {FaFlag} from "react-icons/fa";

export const UserCardItem = ({user, setShowUserProfile,setUser, showCountry}) => {

    const { name, location, email, cell, picture } = user

    const displayUserProfile = (userDetails) => {
        setShowUserProfile(true)
        setUser(userDetails)
    }

    return(
        <Fade bottom>
            <Flex w="100%" mb={["10px","10px","10px","20px"]} p="15px" bg="#FCFCFF" borderRadius="18px" boxShadow="md" _hover={{transform: "scale(1.03,1.03)", transition: "transform 0.8s ease"}}>
                <Flex justify="center" align="center" mr={["10px","20px"]} data-testid="picture">
                    <Avatar border="3px solid #75D6D1" size="lg" name={`${name.last} ${name.first}`} src={picture.medium} />
                </Flex>
                <Flex w="100%" direction="column">
                    <Text mb="5px" fontSize="18px" fontWeight="bold" color="#262A41" data-testid="name"> {`${name.last} ${name.first}`}</Text>
                    <Text fontSize="sm" fontStyle="italic" fontWeight="500" color="#262A41" opacity="0.69" data-testid="location"> {`${location.street.number} ${location.street.name}, ${location.city}, ${location.state} `} </Text>
                    {/* For flag, Maybe */}
                    <Flex display={showCountry ? "block" : "none"} align="center" fontSize="sm" fontWeight="500" color="#BABDD1" data-testid="country"> 
                            <Icon mr="5px" display="inline" as={FaFlag} />
                            <Text display="inline"> {location.country}</Text>
                    </Flex>
                    <Flex justify="space-between" align={["flex-start","flex-start","flex-start","center"]} direction={["column","column","column", "row"]} fontWeight="500" color="#BABDD1"> 
                        <Box fontSize="sm"> 
                            <Icon display="inline" as={BiEnvelope} />
                            <Text display="inline" > {email} </Text>
                        </Box>
                        <Box fontSize="sm"> 
                            <Icon display="inline" as={FiPhoneCall} />
                            <Text display="inline"> {cell}</Text>
                        </Box>
                        <Flex w={["100%","100%","100%", "auto"]} justify="flex-end">
                            <IconButton size="sm" bg="#30BBB5" color="#FCFCFF" as={BsArrowRightShort} boxShadow="md" _hover={{bg:"#048a84"}} onClick={() => displayUserProfile(user)} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Fade>
    )
}

export const UserCardItemSkeleton = () => {
    return (
    <Fade bottom>
            <Flex w="100%" mb={["10px","10px","10px","20px"]} p="15px" bg="#FCFCFF" borderRadius="18px" boxShadow="md">
                <Flex justify="center" align="center" mr={["10px","20px"]}>
                    <SkeletonCircle size="10" />
                </Flex>
                <Flex w="100%" direction="column">
                    <SkeletonText mb="5px" noOfLines={2} spacing="2" />
                    <SkeletonText noOfLines={3} spacing="2" />
                </Flex>
            </Flex>
        </Fade>
    )
}

