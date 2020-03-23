export type Product = {
    id: number,
    name: string,
    description: string,
    category: string,
    price: number
}

export class OrderLine{
    constructor(public product: Product,public quantity: number){

    }
    get total():number{
        return this.product.price * this.quantity;
    }
}

export class Order{
    private lines = new Map<number,OrderLine>();

    constructor(initialLines?:OrderLine[]){
        if(initialLines){
            initialLines.forEach(ol => this.lines.set(ol.product.id, ol));
        }
    }

    public addProduct(prod:Product,quantity:number){
        if(this.lines.has(prod.id)){
            if(quantity === 0){
            
            }
        }
    }

    public removeProduct(id:number){
        this.lines.delete(id);
    }

    get orderLines(): OrderLine[]{
        return [...this.lines.values()]
    }
    get productCount():number{
        return [...this.lines.values()].reduce((total,ol) => total + ol.quantity ,0);
    }
    get total():number{
        return [...this.lines.values()].reduce((total,ol) => total + ol.total,0);
    }
}