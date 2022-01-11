using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Model
{
    public class NoteUser
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public Guid NoteId { get; set; }
        public Note Note { get; set; }
        public bool isOwner { get; set; }
    }
}