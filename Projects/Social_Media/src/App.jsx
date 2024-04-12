import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/Components/header";
import Footer from "./assets/Components/footer";
import Sidebar from "./assets/Components/sidebar";
function App() {
  return (
    <>
    <div className="app_Container">
     <Sidebar/>  
     <div className="Content">
      <Header></Header>
         
      <Footer></Footer>
      </div>
      </div>
    </>
  );
}

export default App;
