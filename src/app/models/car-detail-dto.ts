import { CarImage } from "./carImage";

export interface CarDetaildto{
    carId:number,
    brandId:number,
    colorId:number,
    carName:string
    brandName:string,
    colorName:string,
    modelYear:number,
    dailyPrice:number,
    descriptions:string,
    carImage:CarImage[],
}