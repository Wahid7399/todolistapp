import "./css/main.css";
import {  Routes , Route } from 'react-router-dom';
import Todos from "./components/Todos";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Show from "./components/Show";
import {  useState } from "react";
function App() {
  const [search,setSearch] = useState("")
  
  return (
    <div className="App">
      <Navbar onSearch={(value)=>{setSearch(value)}}/>
      
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
      <Routes>
          <Route path="/" element={<Todos title="Add Todos" /> } />
          <Route path="completed" element={<Show search={search} sort="completed" title="Completed Todos"/>} />
          <Route path="active" element={<Show search={search} sort="active" title="Active Todos" />} />
          <Route path="all" element={<Show search={search} sort="all"title="All Todos"/>} />
      </Routes>
      </motion.div>
    </div>
  );
}

export default App;