export interface InternModel extends Token  {
    id?:string,
    fullName?:string,
    passport?: string,
    phoneNumber?:string,
    roleNumber?:number, 
    academics?:string[],

}
export interface loginModel extends Token {
    _id?:string,
    code?:string
}
export interface questionnaireModel extends Token{
    age?:number,
    country?:string,
    city?:string,
    graduatiunYear?:number,
    academic?:string,
    medical?:string,
    residency?:string,
    yearInResidency?:number,
    department?:string,
    id?:string,
    fullName?:string,
    passport?:string,
    phoneNumber?:string

}
export interface Token {
    token?:string
}
export interface smsModel extends Token{
    intern:InternModel,
    user:loginModel
}
export interface academicModel extends Token{
    name?:string
    academics?:string[]
    _id?:string
}
