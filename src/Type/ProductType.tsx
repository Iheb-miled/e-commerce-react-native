export interface Product {
    _id: string,
    name?: string,
    price?: number,
    quantity?: number,
    star?: number,
    images: [{
        url: string
    }],
    ratings:number,
    offerPrice:number,
    Stock:number
}