export class Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  img: any;
  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    img: any,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.img = img;
  }

}
