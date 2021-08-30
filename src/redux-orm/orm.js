import { ORM } from 'redux-orm';
import Product from './model/product';

const orm = new ORM({
  stateSelector: state => state.orm,
});

orm.register(Product);

const session = orm.session()

export default session;