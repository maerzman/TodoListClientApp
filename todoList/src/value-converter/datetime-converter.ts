export class DateValueConverter{
    toView(value:string){
        return new Date(value).toLocaleString();
    }
}