## Backend

The backend consist of a RESTful API that will be used by the customer and worker frontends to update the database, a worker service to sychronize the database with the ticketing system, and a reporting service to generate reports.

A relational database will be used in conjunction with a NoSQL database to store the data.

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