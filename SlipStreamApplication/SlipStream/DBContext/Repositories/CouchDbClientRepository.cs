
using Couchbase;
using Couchbase.Core;
using Couchbase.N1QL;
using Microsoft.AspNetCore.Mvc;
using SlipStream.DBContext.ApplicationType;
using SlipStream.Models;
using System;
using System.Collections.Generic;

namespace SlipStream.DBContext.Repositories
{
    public class CouchDbClientRepository : ICouchDbClientRepository
    {
        private IBucket _bucket;

        public CouchDbClientRepository()
        {
            _bucket = ClusterHelper.GetBucket("slipstream");
        }

        public IEnumerable<SlipClientModel> GetAllClients()
        {
            var nlql = @"SELECT g.*, META(g).Id
                        FROM IspClientTable";

            var query = QueryRequest.Create(nlql);
            query.ScanConsistency(ScanConsistency.RequestPlus);

            var result = _bucket.Query<SlipClientModel>(query);

            return result.Rows;

        }

        public SlipClientModel GetClientById(string clientId)
        {
            var result = _bucket.Get<SlipClientModel>(clientId);

            return result.Value;
        }

        public SlipClientModel EditOrUpdateClient(SlipClientModel clientDetails)
        {
            if (string.IsNullOrEmpty(clientDetails.Id.ToString()) || clientDetails.Id.ToString().Equals("0"))
            {
                clientDetails.Id = Guid.NewGuid();
            }

            _bucket.Upsert<SlipClientModel>(clientDetails.Id.ToString(), clientDetails);

            return clientDetails;
        }


        public string RemoveClientById(string clientId)
        {
            _bucket.Remove(clientId.ToString());

            return clientId;
        }

    }
}
