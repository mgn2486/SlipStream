This application consists of the following:
1. **Back-End** 
     Web API application. (Back-End Development)


        - Developed using C# Dotnet Core (Net 5).

        - after running the application one can still view the end point by appending /swagger after the port number from the url
            eg: http://localhost:11804/swagger

        - All application end points will be displayed including the models.

2. **Data - Persistence**

    - Application uses (CouchBase 5.0 ) Document database
    - 

    


3. **Front-End**
        Angular 12

        - The Front-End has been developed with angular 12 integrated with Bootstrap for the CSS.

4. **CouchBase Document Database**

    **CouchBase-Url** : http://localhost:8091 ,

    

    Create a bucket **slipstreambucket**

    Create User:

      **UserName** : Administrator , 
      **Password** : password

    Create Index : 
    
    **Definition** CREATE INDEX `adv_Id_DocumentType` ON `slipstreambucket`(`DocumentType`)'


    Sample documents:

    first one: 

  {
  "Id": "1a546b7f-f507-4f87-a3cd-49c8bef1067f",
  "FirstName": "Mr Gee",
  "LastName": "Ndadzibaya",
  "Initials": "MG",
  "Gender": 2,
  "PhotoUrl": "",
  "ResidentialAddress": {
    "BuildingNumber": "12",
    "StreetName": "Umngeni Road ",
    "Area": "House",
    "Code": "Waterfall",
    "Province": "KZN"
  },
  "WorkAddress": {
    "BuildingNumber": "12",
    "StreetName": "Umngeni Road ",
    "Area": "House",
    "Code": "Waterfall",
    "Province": "KZN"
  },
  "PostalAddress": {
    "BuildingNumber": "2378 ",
    "StreetName": " Post box Umngeni Road ",
    "Area": "House",
    "Code": "Waterfall",
    "Province": "KZN"
  },
  "ContactNumbers": [
    "0987563873",
    "0798765758",
    "098756372",
    "9409472391"
  ],
  "DocumentType": "SlipClientModel"
}

Second one :

{
  "Id": "3e3be672-8c36-497f-9ce6-c8e4e6e894fb",
  "FirstName": "Massy",
  "LastName": "Gomba",
  "Initials": "MG",
  "Gender": 1,
  "PhotoUrl": "",
  "ResidentialAddress": {
    "BuildingNumber": "12",
    "StreetName": "Umngeni Road ",
    "Area": "House",
    "Code": "Waterfall",
    "Province": "KZN"
  },
  "WorkAddress": {
    "BuildingNumber": "23 ",
    "StreetName": "Ridge side avenue ",
    "Area": "House",
    "Code": "Lalucia",
    "Province": "KZN"
  },
  "PostalAddress": {
    "BuildingNumber": "12",
    "StreetName": "Umngeni Road ",
    "Area": "House",
    "Code": "Waterfall",
    "Province": "KZN"
  },
  "ContactNumbers": [
    "0987563873",
    "123123123123"
  ],
  "DocumentType": "SlipClientModel"
}

