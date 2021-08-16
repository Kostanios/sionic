import { Model, attr } from 'redux-orm';

class Product extends Model {
  static reducer = (action, Product) => {
    console.log(Product)
    switch (action.type) {
        case 'CREATE_PRODUCT':
            Product.create(action.payload);
            console.log(Product.first())
            break;
        case 'UPDATE_PRODUCT':
            Product.withId(action.payload.id).update(action.payload);
            break;
        case 'REMOVE_PRODUCT':
            const product = Product.withId(action.payload);
            product.delete();
            break;
        case 'REMOVE_ALL_PRODUCT':
            Product.all().delete()
        default: break
        }
  }
}
Product.modelName = 'Product';

Product.fields = {
    id: attr(),
    name: attr(),
};

export default Product;