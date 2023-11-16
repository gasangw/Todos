import Layout from "./Components/Layout"
import {  Routes, Route } from "react-router-dom"
import GetTodos from "./Components/GetTodos"

function App() {
return (
    <div>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<GetTodos />} />
        </Route>
       </Routes>
    </div>
  )
}

export default App
