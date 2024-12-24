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
- As a parking lot attendant, I want to add VIP/Donors to the system with a pending status so that they can have VIP privileges until their status is confirmed by an admin.
- As a parking lot attendant, I want a very prominent warning from the system when no more "drive up" spots can be sold so that I can inform customers and change the sign to "Pre-Order Only".

### Concession Stand Worker
- As a concession stand worker, I want to see the food orders that need to be prepared so that I can prepare the food orders.
- As a concession stand worker, I want to scan a QR code provided by the customer to mark the order as picked up and tell me what order to give the customer.
- As a concession stand worker, I want multiple ways to identify the customer's order so that I can ensure that the correct order is given to the customer.
- As a concession stand worker, I want an easy way to note issues so accurate data is tracked and issues are corrected.
- As a concession stand worker, I want a clean low clutter interface for the order queue so that I can quickly and easily see what needs to be done.
- As a concession stand worker, I want to be able to see orders that have been picked up but NOT on the same screen as orders that are still waiting to be picked up.

### Admin
- As an admin, I want to track remade orders and the reason for the remake so that I can see if there is a pattern of remade orders.
- As an admin, I want to track previously denied VIP/Donor requests so that I can see if there is a pattern of denied requests.
- As an admin, I want to manage the concession stand menu so that I can add, remove, and update items.
- As an admin, I want to manage donor status so that I can grant VIP privileges to donors.
- As an admin, I want to view current and historical reports so that I can see how the system is being used.
- As an admin, I want to view reports on the number of parking spots that are filled per show.


## ROI / Business Case

- Real time tracking of parking spots makes it easy for attendants to know how many "drive up" spots to sell, increasing the number of parking spots sold per show.

- Increase the amount of concessions sold.
  * Encourages larger orders
  * Reduces wait times
  * Enhances the overall customer experience
  
  ```
  The No. 1 reason why fans like to use mobile ordering in stadiums? Avoiding waiting in concession lines (39%). 30% Americans responded “convenience of ordering food/beverage directly from their seat”, and 17% said mobile ordering “helps avoid contact with staff.”
  ```
    - From: [VendingMarketWatch.com](https://www.vendingmarketwatch.com/technology/news/21163242/appetize-contactless-technology-survey-reveals-customer-trends-and-preferences)
  
  ```
  In today's digital age, convenience is key. Implementing mobile ordering technology allows customers to browse the concession menu, place orders, and pay from their smartphones. This not only reduces wait times and enhances the overall customer experience but also encourages larger orders as customers can easily add items to their cart with a few taps. 
  ```
    - From: [AgileTix.com](https://www.agiletix.com/post/lights-camera-snacks-7-ingenious-ways-theatres-can-boost-concession-sales), Citation: Appetize and SurveyMonkey. (2020, November 18). [Appetize Contactless Survey Reveals Customer Trends and Preferences](https://www.vendingmarketwatch.com/technology/news/21163242/appetize-contactless-technology-survey-reveals-customer-trends-and-preferences).

- Increase the percentage of customers that order concessions per show.
  
  ```
  The Demand for Contactless and Cashless Experiences
    * Contactless ordering isn't merely a convenience; it's a shift towards safer and more hygienic practices. However, catering to diverse preferences remains a challenge. Still, some of the biggest problems for fans are long lines, slow service and errors in food and drink orders.  
  
    * The prevalence of mobile ticketing and payment systems has reached an all-time high in stadiums nationwide, with mobile ordering not far behind. At BC Place in Vancouver, Centerplate has introduced in-seat mobile ordering for 1,500 exclusive club-level seats, achieving an impressive 26% adoption rate. 
  
    * Customers love contactless ordering because of its convenience. Forty-four percent of Americans cited convenience as the most important factor for ordering and paying for food and merchandise with their phone.  
  ```
    - From: [SoftJourn.com](https://softjourn.com/insights/5-reasons-to-add-contactless-ordering-to-your-ticketing-process)

- Increase and speed up concession sales during intermission.
  - Customers will be able to put in intermission orders as soon as pre-show ordering closes. The advance orders will lighten the load on the lobby and lounge during intermission speeding up the process and providing a better experience for all customers.

### My Take on the Business Case

- From my research on similar system adoption by other venues and experience as an employee at TCR I think it's reasonable to expect a 10% increase in concessions sold per show as a direct result of the system. This is based on the fact that the system will make it easier for customers to order and pay for concessions. Ordering systems like this inherently make it easier for customers to place larger and/or more complex orders compared to ordering at the counter which can lead to an increase in the average order size.

### Key Performance Indicators
- Number of parking spots sold per show
- Total sale of concessions per show
- Number of customers that order concessions per show
