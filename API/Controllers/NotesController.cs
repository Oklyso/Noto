using Application.Notes;
using Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace API.Controllers
{
    
    public class NotesController : BaseController
    {


        [HttpGet]
        public async Task<ActionResult<List<Note>>> GetNotes (string email){
            email = User.FindFirstValue(ClaimTypes.Email);
            
            
            return await Mediator.Send(new List.Query{Email = email});
        }
        
        [HttpGet("{id}")] 
        public async Task<ActionResult> GetNote(Guid id)
        {
         return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }



        [HttpPost]
        public async Task<IActionResult> CreateNote(Note note) {
            note.Email = User.FindFirstValue(ClaimTypes.Email);
            
            return HandleResult(await Mediator.Send(new Create.Command{Note = note}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit (Guid id, Note note){
            note.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command{Note = note}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id){
            return HandleResult(await Mediator.Send(new Delete.Command{Id=id}));
        }

        
    }
}