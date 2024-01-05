export class Products {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  color: string;
  quantity: number = 1;
  isAddedToCart: boolean = false;

  constructor(
    id: number,
    title: string,
    price: number,
    image: string,
    description: string,
    category: string,
    color: string
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
    this.description = description;
    this.category = category;
    this.color = color;
  }
}
