Ticket Management System (Hapi.js + MySQL)

A simple and scalable Ticket Management System API built using Hapi.js with MySQL as the backend database.
This project demonstrates user authentication, JWT-based security, and full CRUD operations for managing support tickets, along with CSV import/export functionality

🚀#Features

👤 User Module

-User Registration

-User Login (JWT Authentication)

-User Logout (Token-based session handling)

🎫 Ticket Module

-Create Ticket

-View All Tickets

-View Ticket by Status

-Update Ticket Details

-Delete Ticket

-Update Ticket Status

📁 CSV Operations

-Export all tickets to CSV file (Download)

-Import tickets from CSV file (Upload)

🔐 Authentication

-Secure login using JWT tokens

-Protected APIs using token verification middleware

-Only authenticated users can create, update, or delete tickets

🔐API Endpoints

-Auth APIs

-POST /api/register

-POST /api/login

-POST /api/logout

🎫Ticket APIs

-POST /api/ticket → Create Ticket

-GET /api/ticket → Get All Tickets

-PUT /api/ticket/{id} → Update Ticket

-DELETE /api/ticket/{id} → Delete Ticket

-PATCH /api/ticket/status/{id} → Update Status

📁CSV APIs

-GET /api/ticket/download → Download Tickets CSV

-POST /api/ticket/upload → Upload Tickets CSV

🧪 How to Test (Postman)

Step 1: Register User

Step 2: Login and get token

Step 3: Add token in headers
Authorization: Bearer <token>

Step 4: Call ticket APIs
