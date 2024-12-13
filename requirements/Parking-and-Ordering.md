# TCR Parking and Advance Ordering Platform
## Introduction

The TCR Parking and Advance Ordering Platform is an end to end system for managing the preferred parking lot spaces and allows customers to order their drinks, snacks, and/or merchandise for pickup before the show and/or durning intermission.

The platform will allow customers to reserve a parking spot advance and after parking if available. The parking lot attendant will have a specialized view that will allow them to see the parking spots that are reserved and the parking spots that are available. The platform will also allow customers to order their drinks, snacks, and/or merchandise for pickup before the show and/or durning intermission. The platform will provide customers with a unique order number that they can use to pick up their food. 

## Features
- Customers can pay for their parking spot and/or food order in advance
- Integration with existing Square POS payment system.
- Automated syncing of parking spaces, merchandise, and concessions sold with tickets.

### Parking Lot Reservation
- Customers can reserve a parking spot in advance
- Flier with a QR code is given to "drive up" customers to scan that will direct them to the payment portal.
- Customers can also pay by card with the parking lot attendant after parking if available.
- Customer portal view for customers to see their parking spot reservation and food order
- Tracking of preferred donors that have reserved parking spots for the current show.

- Parking lot attendant view for parking lot attendants to see the parking spots that are reserved and the parking spots that are available
- Provides the parking lot attendant with real time parking space availability making it easier know how many drive up spaces can be sold.
- Parking space types: General, Handicap, and VIP/Donor
- Provides the parking lot attendant with a way of adding VIP/Donors to the system with a pending status that will grant them VIP privileges until their status is confirmed by an admin.

### Advance Concession Stand Ordering
- Customers can order drinks, snacks, and/or merchandise for pickup before the show and/or durning intermission
- Shortens time customers spend in line at the concession stand.
- Provides customers with a unique order number that they can use to pick up their food.

- Concession stand order queue view for concession stand workers to see the food orders that need to be prepared.
- On pickup, a QR code provided by the customer is scanned to mark the order as picked up and tell the worker what order to give the customer.

### Admin Portal
- Admin portal view for administrators to see the parking spots that are reserved and the parking spots that are available
- Manage donor status
- Manage the consession stand menu
- View current and historical reports.


## Frontend

The frontend will be a web application that will be used by customers to reserve a parking spot and order food. The frontend will also be used by parking lot attendants to see the parking spots that are reserved and the parking spots that are available. The frontend will also be used by concession stand workers to see the food orders that need to be prepared.

## Backend

The backend will be a RESTful API that will be used by the frontend to reserve a parking spot and order food. The backend will also be used by parking lot attendants to see the parking spots that are reserved and the parking spots that are available. The backend will also be used by concession stand workers to see the food orders that need to be prepared.

## Data Model

The data model will consist of the following entities:

- Customer
- Parking Spot
- Food Order
- Parking Spot Reservation
- Food Order Queue
- Parking Lot Attendant
- Concession Stand Worker

## Tech Stack

- React
- Node.js
- Express
- MongoDB
- Square POS API
- Firebase Auth
- Firebase Firestore
- Firebase Functions
- Firebase Hosting

