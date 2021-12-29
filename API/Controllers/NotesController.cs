using Application.Notes;
using Model;
using Microsoft.AspNetCore.Mvc;
namespace API.Controllers
{
    public class NotesController : BaseController
    {


        [HttpGet]
        public async Task<ActionResult<List<Note>>> GetNotes (){
            
            return await Mediator.Send(new List.Query());
        }



        [HttpPost]
        public async Task<IActionResult> CreateNote(Note note) {
            return Ok(await Mediator.Send(new Create.Command{Note = note}));
        }

        
    }
}