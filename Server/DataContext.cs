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
        public DbSet<NoteUser> NoteUsers {get;set;} 

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<NoteUser>(x=> x.HasKey(ne => new {ne.AppUserId,ne.NoteId}));

            builder.Entity<NoteUser>()
            .HasOne(u => u.AppUser)
            .WithMany(n => n.Notes)
            .HasForeignKey(ne  => ne.AppUserId);


            
            
        }
    }
}