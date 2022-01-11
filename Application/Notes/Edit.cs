using Application.Core;
using AutoMapper;
using MediatR;
using Model;
using Server;

namespace Application.Notes
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Note Note { get; set; }
        }

        public class Handler : IRequestHandler<Command,Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var note = await _context.Notes.FindAsync(request.Note.Id);
               if(note == null) return null;
                _mapper.Map(request.Note, note);
                var result= await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed to update note");


                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}