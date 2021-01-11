import React, {useState} from "react";
import { Flex, Text, Box, InputGroup, Input, InputLeftElement, HStack, Icon, Avatar, IconButton } from "@chakra-ui/react"
// import {FaUsers,FaMale, FaFemale} from "react-icons/fa"

const UserCardItem = () => {


    return(
        <Flex justify="space-between">
            <Flex>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Flex>
            <Flex direction="column">
                <Text> My name is so so and so</Text>
                <Text> my address </Text>
                <Flex> 
                    <Box> 
                        <Icon />
                        <Text> email address</Text>
                    </Box>
                    <Box> 
                        <Icon />
                        <Text> phone number</Text>
                    </Box>
                    <Box>
                        <IconButton />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default UserCardItem;