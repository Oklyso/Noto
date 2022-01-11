using Application.Notes;
using Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    
    public class NotesController : BaseController
    {


        [HttpGet]
        public async Task<ActionResult<List<Note>>> GetNotes (){
            
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")] 
        public async Task<ActionResult> GetNote(Guid id)
        {
         return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }



        [HttpPost]
        public async Task<IActionResult> CreateNote(Note note) {
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