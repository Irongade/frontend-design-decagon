import React from "react";
import { Flex, Text, Icon, Avatar, IconButton, Tag } from "@chakra-ui/react";
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

    const userProfileTagData = [
        {
            display: showCountry ? "flex" : "none",
            marginBottom: "8px",
            padding: "5px",
            bgColor: "#30BBB5",
            tagOpacity: "0.52",
            textOpacity: "0.52",
            fontWeight: "500",
            fontSize: "sm",
            iconValue: FaFlag,
            textValue: location.country
        },
        {
            marginBottom: "8px",
            padding: "5px",
            bgColor: "#00000029",
            tagOpacity: "0.52",
            textOpacity: "0.52",
            fontWeight: "600",
            fontSize: "sm",
            iconValue: BiEnvelope,
            textValue: email
        },  
        {
            marginBottom: "10px",
            padding: "7px",
            bgColor: "rgb(255,0,255, 0.15)",
            textOpacity: "0.60",
            fontWeight: "500",
            fontSize: "12px",
            textValue: `JOINED: ${registered.date.substring(0,10)}`
        },
    ]

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
                    {
                        userProfileTagData.map((data, index) => <Flex display={data.display} justify={["center", "center", "center", "flex-start"]}  fontWeight={data.fontWeight}> 
                        <Tag mb={data.marginBottom} p={data.padding} align="center" borderRadius="18px" bg={data.bgColor} fontSize={data.fontSize} color="#262A41" tagOpacity={data.tagOpacity} > 
                            <Icon mr="5px" display={data.iconValue ? "inline": "none"} as={data.iconValue} />
                            <Text opacity={data.textOpacity} display="inline"> {data.textValue}</Text>
                        </Tag>
                    </Flex>)
                    }
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
