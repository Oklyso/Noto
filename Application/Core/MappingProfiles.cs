using AutoMapper;
using Model;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Note,Note>();
        }
    }
}