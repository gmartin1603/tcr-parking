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
- Manage the concession stand menu
- View current and historical reports.
- Track previously denied VIP/Donor requests.
- Track remade orders and the reason for the remake so that they can see if there is a pattern of remade orders. E.g. "Customers order is picked up by name then someone else comes for an order with a code for the order."

## User Stories

### Customer
- As a customer, I want to reserve a parking spot in advance so that I can have a guaranteed spot when I arrive.
- As a customer, I want to order my food in advance so that I can skip the line at the concession stand.
- As a customer, I want to see my parking spot reservation and food order so that I can verify that it is correct.
- As a customer, I want to see the number of parking spots that are available so that I can know if I can drive up and park.
- As a customer, I want to pay for my parking spot and/or food order in advance so that I can have a contactless experience.
- As a customer, I want the parking attendant to be able to assist me with paying for my parking spot after I've parked.

### Parking Lot Attendant
- As a parking lot attendant, I want to see the parking spots that are reserved and the parking spots that are available so that I can direct customers to the correct parking spot.
- As a parking lot attendant, I want to see the number of parking spots that are available so that I can know how many drive up spaces can be sold.

### Concession Stand Worker
- As a concession stand worker, I want to see the food orders that need to be prepared so that I can prepare the food orders.
- As a concession stand worker, I want to scan a QR code provided by the customer to mark the order as picked up and tell me what order to give the customer.
- As a concession stand worker, I want multiple ways to identify the customer's order so that I can ensure that the correct order is given to the customer.
- As a concession stand worker, I want an easy way to note issues so accruate data is tracked and issues are corrected.
- As a concession stand worker, I want a clean low clutter interface for the order queue so that I can quickly and easily see what needs to be done.
- As a concession stand worker, I want to be able to see orders that have been picked up but NOT on the same screen as orders that are still waiting to be picked up.

### Admin
- As an admin, I want to track remade orders and the reason for the remake so that I can see if there is a pattern of remade orders.

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

- Vue3
- Node.js
- Express
- MongoDB
- Square POS API
- Firebase Auth
- Firebase Firestore
- Firebase Storage
- Firebase Realtime Database
- Firebase Functions
- Firebase Hosting

