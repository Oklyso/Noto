using Application.Core;

using MediatR;
using Model;
using Server;

namespace Application.Notes
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Note Note { get; set; }

        }
        public class Handler : IRequestHandler<Command,Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                
                _context.Notes.Add(request.Note);
                var result = await _context.SaveChangesAsync() > 0;
                if(!result) return Result<Unit>.Failure("Failed to create note");

                return Result<Unit>.Success(Unit.Value);

            }
        }
    }
}