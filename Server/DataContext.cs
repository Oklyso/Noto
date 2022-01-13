using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Model;

namespace Server
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options){

        }

        public DbSet<Note> Notes {get;set;}
        public DbSet<AppUser> AllUsers {get;set;} 

        
    }
}