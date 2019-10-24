export class Recipe {
    public name: string;
    public description: string;
    public imageURL: string;

    constructor(name: string, desc: string, imageurl: string) {
        this.name = name;
        this.description = desc;
        this.imageURL = imageurl;
    }
}