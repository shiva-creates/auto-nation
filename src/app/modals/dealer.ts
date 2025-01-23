export interface Dealer {
    id : string,
    name : string,
    totalBudget : number
    remainingBudget : number
    owner : string,
    location : Location,
    cars : Cars[];
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