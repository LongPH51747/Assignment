export class CoffeeDetail {
  id: number;
  idcoffee: number;
  size: number;
  price: number;
  constructor(id: number, idcoffee: number, size: number,price: number) {
    this.id = id;
    this.idcoffee = idcoffee;
    this.size = size;
    this.price = price
  }
}
