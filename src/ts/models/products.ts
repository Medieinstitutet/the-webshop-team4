export class Products {
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    color: string;
    id: number;
    quantity: number = 0;

    constructor(title:string, price: number, image:string, description:string, category:string, color:string, id:number) {
        this.title = title;
        this.price = price;
        this.image = image;
        this.description = description;
        this.category = category;
        this.color = color;
        this.id = id;
        //this.quantity = quantity;
    }
}