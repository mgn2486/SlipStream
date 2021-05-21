using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SlipStream.Models
{
    public class SlipClientModel
    {
        public Guid Id { get; set; }
        public string FirstName {get; set; }
        public string LastName {get; set; }
        public string Initials {get; set; }
        public string Gender {get; set; }
        public string PhotoUrl {get; set; }
        public ClientAddressModel ResidentialAddress {get; set; }
        public ClientAddressModel WorkAddress {get; set; }
        public ClientAddressModel PostalAddress {get; set; }
        public List<string> ContactNumbers {get; set; }
    }
}
