import orm from '../redux-orm/orm'
import Product from '../redux-orm/model/product'
import './App.css'; 
import {useState} from 'react'

function App() {
  const [, forse] = useState({})
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{
          Product.reducer({type: 'CREATE_PRODUCT', payload:{id: 1, name: 'name'} }, orm.session().Product)
          forse({})
        }}>create product</button>
        {orm.session.Product ? orm.session.Product.all() : 'ничего'}
      </header>
    </div>
  );
}

export default App;
