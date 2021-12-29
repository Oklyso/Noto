using Microsoft.EntityFrameworkCore;
using MediatR;
using Model;
using Server;

namespace Application.Notes
{
    public class List
    {

        public class Query : IRequest<List<Note>> { }

        public class Handler : IRequestHandler<Query, List<Note>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Note>> Handle(Query request, CancellationToken cancellationToken)
            {
               return await _context.Notes.ToListAsync();
            }
        }


    }
}