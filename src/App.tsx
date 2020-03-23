import React,{Component} from 'react';
// import {Product,Order} from './data/entities';
// import {ProductList} from './productList';
import {dataStore} from "./data/dataStore";
import {Provider} from "react-redux";
import {httpHandler} from "./data/httpHandler";
import {addProduct} from "./data/actionCreators";
import {ConnectedProductList} from "./data/productListConnector";

// let testData: Product[] = [1,2,3,4,5].map(num => ({id: num, name: `Prod${num}`,category: `Cat${num%2}`,description: `Product ${num}`,price: 100}))

interface Props{

}

// interface State{
//   order: Order
// }

export default class App extends Component<Props>{
  // constructor(props: Props){
  //   super(props);
  //   this.state = {
  //     order: new Order()
  //   }
  // }
  private httpHandler = new httpHandler();
  constructor(props:Props){
    super(props);
    this.httpHandler.loadProducts(data => dataStore.dispatch(addProduct(...data)));
  }
  // render() {
  //   return<div className="App">
  //     <ProductList products ={testData} categories={this.categories} order={this.state.order} addToOrder={this.addToOrder}/>
  //   </div>
  // }
  // get categories():string[]{
  //   return [...new Set(testData.map(p => p.category))]
  // }

  // addToOrder = (product: Product,quantity:number) => {
  //   this.setState(state => {state.order.addProduct(product,quantity);
  //   return state})
  // }
  render = () => 
    <div className="App">
      <Provider store={dataStore}>
        <ConnectedProductList/>
      </Provider>
    </div>
  submitCallback= () => {
    console.log("Submit Order")
  }
  
}


