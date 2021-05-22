using System;
using System.Collections.Generic;

namespace SlipStream.Models
{
    public class SlipClientModel
    {
        public string Id { get; set; }
        public string FirstName {get; set; }
        public string LastName {get; set; }
        public string Initials {get; set; }
        public string Gender {get; set; }
        public string PhotoUrl {get; set; }
        public ClientAddressModel ResidentialAddress {get; set; }
        public ClientAddressModel WorkAddress {get; set; }
        public ClientAddressModel PostalAddress {get; set; }
        public List<string> ContactNumbers {get; set; }

        // this is just to keep track of the document type in case we to have multiple documents in the future
        public string DocumentType => typeof(SlipClientModel).Name;
    }
}
