import React,{Component} from 'react';
// import {Product,Order} from './data/entities';
// import {ProductList} from './productList';
import {dataStore} from "./data/dataStore";
import {Provider} from "react-redux";
import {httpHandler} from "./data/httpHandler";
import {addProduct} from "./data/actionCreators";
import {ConnectedProductList} from "./data/productListConnector";
import {Switch,Route,Redirect,BrowserRouter,RouteComponentProps} from "react-router-dom";
import {OrderDetails} from "./orderDetails";
import {Summary} from "./summary";

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
        <BrowserRouter>
          <Switch>
            <Route path="/products" component={ConnectedProductList}/>
            <Route path="/order" render={(props)=><OrderDetails {...props} submitCallback={() => this.submitCallback(props)}/>}/>
            <Route path="/summary/:id" component={Summary}/>
            <Redirect to="/products"/>
          </Switch>
        </BrowserRouter>
        {/* <ConnectedProductList/> */}
      </Provider>
    </div>
  submitCallback= (routeProps: RouteComponentProps) => {
    
    this.httpHandler.storeOrder(dataStore.getState().order,id => routeProps.history.push(`/summary/${id}`))
  }
  // addToOrder = (product: Product,quantity:number) => {
  //   this.setState(state => {state.order.addProduct(product,quantity);
  //   return state})
  // }
 
  
}


