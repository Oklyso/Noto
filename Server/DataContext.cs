using Microsoft.EntityFrameworkCore;
using Model;
namespace Server
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options){

        }

        public DbSet<Note> Notes {get;set;}
    }
}