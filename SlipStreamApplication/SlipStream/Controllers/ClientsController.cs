using Microsoft.AspNetCore.Mvc;
using SlipStream.DBContext.ApplicationType;
using SlipStream.Models;

namespace SlipStream.Controllers
{
    public class ClientsController : Controller
    {
        private readonly ICouchDbClientRepository _couchDbClientRepository;

        public ClientsController(ICouchDbClientRepository couchDbClientRepository)
        {
            _couchDbClientRepository = couchDbClientRepository;
        }

        [HttpGet]
        [Route("api/clients")]
        public IActionResult GetAll() 
        {
            var listOfSlipClients = _couchDbClientRepository.GetAllClients();

            return Ok(listOfSlipClients);
        }

        [HttpGet]
        [Route("api/clients/{clientId}")]
        public IActionResult GetClientById()
        {
            var slipClient = _couchDbClientRepository.GetAllClients();

            return Ok(slipClient);
        }

        [HttpGet]
        [Route("api/client/edit")]
        public IActionResult Edit([FromBody] SlipClientModel clientDetails)
        {

            var saveClient = _couchDbClientRepository.EditOrUpdateClient(clientDetails);


            return Ok(saveClient);
        }

    }
}
