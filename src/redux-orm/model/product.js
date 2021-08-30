import { Model, attr } from 'redux-orm';

class Product extends Model {
  static reducer = (action, Product) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            Product.create(action.payload);
            break;
        case 'UPDATE_PRODUCT':
            Product.withId(action.payload.id).update(action.payload);
            break;
        case 'REMOVE_PRODUCT':
            Product.withId(action.payload).delete();
            break;
        case 'REMOVE_ALL_PRODUCT':
            Product.all().delete();
            break;
        case 'GET_ALL' :
            return Product.all().toModelArray()
        }
  }
}
Product.modelName = 'Product';

Product.fields = {
    id: attr(),
    name: attr(),
};

export default Product;