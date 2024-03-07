import Navbar from "./Components/NavBar/Navbar";
import '../public/css.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
const App = () => {
  return (
    <div>

      <Router>
        {<Navbar />}
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center min-vh-100">
            <Routes>
              <Route path="/Laptops/" element={<ItemListContainer />} />
              <Route path="/Sunglasses/" element={<ItemListContainer />} />
              <Route path="/Smartphones/" element={<ItemListContainer />} />
              <Route path="/Products/:ProductId" element={<ProductDetail />} />
              <Route exact path="/" element={<ItemListContainer />}></Route>
              <Route exact path="*" element={<img className="not_found" src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" />}></Route>

            </Routes>
          </div>
        </div>
      </Router>


    </div>
  )
}
export default App;