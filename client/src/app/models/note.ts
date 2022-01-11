export interface Note {
    id:string;
    title:string;
    body:string;
    date: Date | null;
    category:string;
    location:string;
}