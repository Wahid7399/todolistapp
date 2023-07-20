import React, { useState } from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MotionFlex = motion(Flex);



const Navbar = ({ onSearch }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    return (
        <MotionFlex
            marginTop={"0px"}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <HStack spacing={"100px"}>
                <motion.h1
                    initial={{ x: null, y: -200 }}
                    animate={{ x: 10, y: 3 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                >
                    Todo App
                </motion.h1>
                <div className={"displaytodos"} style={{ backgroundColor: "blue" }} >

                    <div className='buttons' style={{ Spacer: "100px", position: "absolute", top: "10px", right: "0", width: "85%", textAlign: "center" }}>
                        <motion.input onChange={(e) => { setSearch(e.target.value) }} value={search} className="todo-input" placeholder="Search ..." />
                        <motion.button
                            onClick={() => { onSearch(search) }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ marginLeft: "10px" }}
                        >
                            Search
                        </motion.button>
                        <motion.button onClick={() => {
                            setSearch("")
                            onSearch("")
                            navigate('/')

                        }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            Home
                        </motion.button>
                        <motion.button onClick={() => {
                            setSearch("")
                            onSearch("")
                            navigate('/active')

                        }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            Active
                        </motion.button>
                        <motion.button onClick={() => {
                            setSearch("")
                            onSearch("")
                            navigate('/completed')
                        }
                        } whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            Completed
                        </motion.button>
                        <motion.button onClick={() => {
                            setSearch("")
                            onSearch("")
                            navigate('/all')
                        }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            All
                        </motion.button>
                    </div>
                </div>
            </HStack>
        </MotionFlex>

    );
};

export default Navbar;
