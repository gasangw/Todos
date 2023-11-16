import Layout from "./Components/Layout"
import {  Routes, Route } from "react-router-dom"
import GetTodos from "./Components/GetTodos"
import EditForm from "./Components/EditForm"

function App() {
return (
    <div>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetTodos />} />
          <Route path=":id" element={<EditForm />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
       </Routes>
    </div>
  )
}

export default App
