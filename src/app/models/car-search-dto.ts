import { CarImage } from "./carImage";

export interface CarSearchDto{
    id:number,
    brandName:string,
    colorName:string,
    model:string,
    modelYear:number,
    dailyPrice:number,
    carImage:CarImage,
}