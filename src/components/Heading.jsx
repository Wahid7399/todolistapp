import { motion } from "framer-motion";


export default function Heading(props) {
    return (
        <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            {props.title}
        </motion.h1>
    )
}
