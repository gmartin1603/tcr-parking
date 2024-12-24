## Backend

The backend consist of a RESTful API that will be used by the customer and worker frontends to update the database, a worker service to sychronize the database with the ticketing system, and a reporting service to generate reports.

A relational database will be used in conjunction with a NoSQL database to store the data.

### Tech Stack
- Express
- MongoDB - Dev
- Firebase Firestore - Prod
- Firebase Storage
  * For storing images of the menu items
- Firebase Realtime Database
  * Donor records
  * Parking spots - status, type, and location
  * Orders - status, items(Mongo/Firestore Doc), and customer
- Firebase Functions
- Square POS API
- Integration with existing ticketing system

### Data Model

The data model will consist of the following entities:

- Parking Spot
- Food Order
  * MongoDB (Firestore)
- Parking Spot Reservation
- Food Order Queue
- User
  * Customer
  * Concession Stand Worker
  * Parking Lot Attendant
  * Admin