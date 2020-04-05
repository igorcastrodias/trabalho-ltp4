export class Product{
    id:number;
    name:string;
    imagePath:string;
    description:string;
    fullDescription:string;
    avaliable:string;
    price:string;
    category:string;
    featured:string;
    featuredImagePath:string;
    smallImagePath:[];

    constructor(){
        this.id = 0;
        this.name = "";
        this.imagePath = "";
        this.description = "";
        this.fullDescription = "";
        this.avaliable = "";
        this.price = "";
        this.category = "";
        this.featured = "";
        this.featuredImagePath = "";
        this.smallImagePath = [];
    }
}