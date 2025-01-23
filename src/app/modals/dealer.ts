export interface Dealer {
    id : string,
    dealerName : string,
    totalBudget : number,
    remainingBudget? : number
    owerFirstName : string,
    owerLastName : string,
    location? : Location,
    latitude : number,
    longitude : number,
    cars? : Cars[];
}




export interface Location {
    latitude : number,
    longitude : number,

}
export interface Cars {
    id : string,
    name : string,
    modal : number,
    brand : string,
    color : string,
    price : number,
}