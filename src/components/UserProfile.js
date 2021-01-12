import React, {useState} from "react";
import { Flex, Text, Box, Icon, Avatar, IconButton, Tag } from "@chakra-ui/react"
import {BiEnvelope} from "react-icons/bi"
import {FiPhoneCall} from "react-icons/fi"
import {BsArrowLeftShort} from "react-icons/bs"
import {IoIosPhonePortrait} from "react-icons/io"

const UserProfile = () => {


    return(
        <>
            <Flex align="center" mb="20px">
                <IconButton mr="5px" size="sm" bg="transparent" color="#30BBB5" opacity="0.61" as={BsArrowLeftShort} />
                <Text fontSize="sm" color="#262A41"> RESULTS </Text>
            </Flex>
            <Flex direction="row" w="100%" p="10px" >
                <Flex justify="center" align="flex-start" mr="20px">
                    <Avatar size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" border="3px solid #75D6D1" />
                </Flex>
                <Flex w="100%" direction="column">
                    <Text fontSize="22px" fontWeight="bold" color="#262A41" mb="10px"> My name is so so and so</Text>
                    <Text fontSize="sm" color="#262A41" opacity="0.69" mb="10px"> my address </Text>
                    <Box>
                        <Tag mb="10px" p="8px" align="center" borderRadius="18px" bg="#00000029" fontSize="sm" color="#262A41" opacity="0.52" > 
                            <Icon mr="5px" display="inline" as={BiEnvelope} />
                            <Text display="inline"> email address</Text>
                        </Tag>
                    </Box>
                    <Box> 
                        <Tag bg="rgb(255,0,255, 0.15)" p="8px" borderRadius="18px" mb="10px" fontSize="sm" color="#262A41">
                            <Text opacity="0.52">  Joined date</Text>
                        </Tag>
                    </Box>
                    <Box mb="10px" color="#262A41" opacity="0.52"> 
                        <Icon mr="5px" display="inline" as={FiPhoneCall} />
                        <Text display="inline"> phone number</Text>
                    </Box>
                    <Box color="#262A41" opacity="0.52">
                        <Icon mr="5px" display="inline" as={IoIosPhonePortrait} />
                        <Text display="inline"> phone number</Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default UserProfile;