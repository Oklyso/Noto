export interface User{
    username: string;
    email:string;
    displayName:string;
    token:string;

} 

export interface UserFormValues {
    email:string;
    password:string;
    displayName?:string;
    userName?:string;
}