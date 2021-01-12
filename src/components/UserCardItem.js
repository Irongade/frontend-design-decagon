import React, {useState} from "react";
import { Flex, Text, Box, Icon, Avatar, IconButton } from "@chakra-ui/react"
import {BiEnvelope} from "react-icons/bi"
import {FiPhoneCall} from "react-icons/fi"
import {BsArrowRightShort} from "react-icons/bs"

const UserCardItem = () => {


    return(
        <Flex w="100%" mb="20px" p="15px" bg="#FCFCFF" borderRadius="18px" boxShadow="md">
            <Flex justify="center" align="center" mr="20px">
                <Avatar border="3px solid #75D6D1" size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Flex>
            <Flex w="100%" direction="column">
                <Text mb="5px" fontSize="18px" fontWeight="bold" color="#262A41"> My name is so so and so</Text>
                <Text fontSize="sm" fontStyle="italic" color="#262A41" opacity="0.69" > my address </Text>
                <Flex justify="space-between" align="center" color="#BABDD1"> 
                    <Box fontSize="sm" > 
                        <Icon display="inline" as={BiEnvelope} />
                        <Text display="inline"> email address</Text>
                    </Box>
                    <Box fontSize="sm"> 
                        <Icon display="inline" as={FiPhoneCall} />
                        <Text display="inline"> phone number</Text>
                    </Box>
                    {/* For flag, Maybe */}
                    {/* <Box fontSize="sm"> 
                        <Icon display="inline" as={FiPhoneCall} />
                        <Text display="inline"> phone number</Text>
                    </Box> */}
                    <Box>
                        <IconButton size="sm" bg="#30BBB5" color="#FCFCFF" as={BsArrowRightShort} boxShadow="md" _hover={{bg:"#048a84"}} />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default UserCardItem;