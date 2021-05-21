using Microsoft.AspNetCore.Mvc;
using SlipStream.Models;
using System.Collections.Generic;

namespace SlipStream.DBContext.ApplicationType
{
    public interface ICouchDbClientRepository
    {
        IEnumerable<SlipClientModel> GetAllClients();
        SlipClientModel GetClientById(string clientId);
        SlipClientModel EditOrUpdateClient(SlipClientModel clientDetails);
        string RemoveClientById(string clientId);
    }
}
