export interface ComputerDataType{
    loginCredential?:{username:string,password:string},
    computerDataType: string,
    processor:string,
    ram:string,
    hdd:string,
    os?:string,
    software:string[],
    quantity?:number
}