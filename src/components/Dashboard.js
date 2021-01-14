import React, {useState} from "react";
import { Flex, Text, Box, HStack, Icon } from "@chakra-ui/react"
import {FaUsers,FaMale, FaFemale} from "react-icons/fa"
import TextInput from "./TextInput";
import {filterCriteria} from "../utils"

const Dashboard = (props) => {

    const {setFilterBy, setSearchField} = props
    const [zoomDiv, setZoomDiv] = useState("1") 

    const filterUser = (filterProp, id) => {
        setFilterBy(filterProp)
        setZoomDiv(id)
    }

    const filterData = [
        {
            textValue: "All Users",
            iconValue: FaUsers,
            iconWidth: "30px",
            iconHeight: "65px",
            onClickFn: () => filterUser(filterCriteria.FILTER_BY_ALL_USERS, "1"),
            divPosition: "1",
            divColor: "#F935A9"
        },
        {
            textValue: "Male Users",
            iconValue: FaMale,
            iconWidth: "18px",
            iconHeight: "45px",
            onClickFn: () => filterUser(filterCriteria.FILTER_BY_MALE_USERS, "2"),
            divPosition: "2",
            divColor: "#30BBB5"
        },
        {
            textValue: "Female Users",
            iconValue: FaFemale,
            iconWidth: "18px",
            iconHeight: "45px",
            onClickFn: () => filterUser(filterCriteria.FILTER_BY_FEMALE_USERS, "3"),
            divPosition: "3",
            divColor: "#7946C1"
        }
    ]

    return(
        <Flex w={["100%","100%","100%","50%"]} p={["10px","10px","10px","50px"]} color="#FFFFFF" direction="column" justify="center" >
            <Box>
                <Text fontSize="49px" display="inline" fontWeight="100" data-testid="hello"> Hello, </Text>
                <Text fontSize="37px" display="inline" fontWeight="700"> Emerald</Text>
                <Box fontSize="16px" mt="20px">
                    <Text opacity="0.66" fontWeight="100"> Welcome to your dashboard, kindly sort through the user base</Text>
                </Box>
            </Box>
            <TextInput 
                marginTop={"40px"}
                size={"lg"} 
                width={["90%","80%"]} 
                inputOpacity={"0.7"}
                borderRadiusValue={"10px"}
                bgColor={"#3C3F54"}
                color={"#FFFFFF"}
                placeholderValue={"Find a user"}
                onChangeFn={e => setSearchField(e.target.value)}   />
            <Box mt="40px">
                <Text opacity="0.7" fontSize="22px" fontWeight="600">
                    Show Users
                </Text>
                <HStack mt="40px" spacing={["20px","20px","20px","35px"]} color="#FFFFFF" fontWeight="500" cursor="pointer">
                    {
                        filterData.map((data, index) => <Box key={index} onClick={data.onClickFn}>
                        <Flex borderRadius="20px" boxShadow="md" w="85px" h="70px" transform={zoomDiv === data.divPosition ? "scale(1.2,1.2)" : null} transition={ zoomDiv ? "transform 1s ease": null} bg={data.divColor} justify="center" align="center">
                            <Icon w={data.iconWidth} h={data.iconHeight} as={data.iconValue} />
                        </Flex>
                        <Text opacity="0.7" mt="10px" fontSize="sm" textAlign="center"> {data.textValue} </Text>
                    </Box>)
                    }
                </HStack>
            </Box>
        </Flex>
    )
}

export default Dashboard;
