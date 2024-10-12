import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Route";

function App(){
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App;