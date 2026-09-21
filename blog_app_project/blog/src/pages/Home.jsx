import { useState } from "react"
import Blogs from "../components/Blogs"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"


const Home = () => {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Blogs searchTerm={searchTerm}/>
      <Newsletter/>
    </div>
  )
}

export default Home
