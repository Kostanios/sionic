import session from '../../redux-orm/orm'
import './App.css';
import useModalReducer from "../../hooks/useReducer";
import Header from "../Header/header";
import Advertis from "../Advertis/Advertis";

function App() {
  const createProduct = useModalReducer(
      {type: 'CREATE_PRODUCT', payload:{id: 1, name: 'name'}},
        session.Product
  )
  const getAllProducts = useModalReducer(
      {type: 'GET_ALL'},
      session.Product,
      false
  )
  return (
    <div className="App">
      <Header/>
      <Advertis/>
      <button onClick={()=>{
        createProduct()
      }}>
        create product
      </button>
      {getAllProducts().map(prod => <div>{`${prod}`}</div>)}
    </div>
  );
}

export default App;
