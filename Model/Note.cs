namespace Model
{
    public class Note
    {
        public Guid Id {get;set;}
        public string Title { get; set; }
        public string Body {get;set;}
        public DateTime Date {get;set;}

        public string Category {get;set;}
        public string Location {get;set;}

       public string Email {get;set;} 

        
    }
}