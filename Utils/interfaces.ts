export interface Cars{
    id: number,
    brand: string,
    model: string,
    price: number,
    image_card: string,
    brand_img: string,
    options: []
}

export interface CarDetail{
    
    id: number,
    brand: string,
    model: string,
    price: number,
    image_card: string,
    brand_img: string,
    options: []
    
}
export interface options{
    id_option: number,
    color: string,
    image: string
}
export interface carrousel{
    currentData:options[],
    currentIndex:number,
    nextSlide: (index:number)=>void,
    prevSlide: (index:number)=>void,
}