# 🎟️ EventExpress

A modern full-stack Event Management Platform built with **React.js**, **Node.js**, **Express.js**, **MongoDB**, **JWT Authentication**, **OTP Verification**, **Docker**, and **Cloudinary**. EventExpress enables users to discover events, securely register, verify bookings through email OTP, and allows administrators to manage events and booking requests efficiently.

---

## 🚀 Features

- **🔐 Secure Authentication & Authorization**
  - JWT-based Authentication.
  - Role-Based Access Control (Admin & User).
  - Secure Password Hashing using bcrypt.
  - Protected REST APIs.

- **🎉 Event Management**
  - Create, Update, Delete Events.
  - Search Events by Name.
  - Browse Events by Category.
  - Manage Event Capacity & Available Seats.

- **🎫 Ticket Booking System**
  - OTP Verification before Booking.
  - Booking Request Workflow.
  - Booking Status Management.
  - Automatic Seat Availability Updates.

- **📧 Email Verification**
  - One-Time Password (OTP) sent via Email.
  - OTP Validation before Booking Confirmation.
  - Expired OTP Handling.

- **⚡ Responsive User Experience**
  - Modern React SPA.
  - Live Event Search.
  - Dynamic Seat Availability.
  - Responsive TailwindCSS UI.

---

## 🛠 Tech Stack

- **Frontend:** React.js, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Email Service:** Nodemailer
- **Media Storage:** Cloudinary
- **Containerization:** Docker

---

## 📁 Directory Structure

```
├── backend/
│   ├── config/              # Database & Cloudinary configuration
│   ├── controllers/         # Business Logic
│   ├── middleware/          # JWT Authentication Middleware
│   ├── models/              # MongoDB Models
│   ├── routes/              # REST API Routes
│   ├── utils/               # Helper Functions
│   ├── server.js            # Express Entry Point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Configuration

Create a `.env` file inside the backend directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email@gmail.com

EMAIL_PASSWORD=your_app_password

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

CLIENT_URL=http://localhost:5173
```

---

## 🏃 Local Setup & Development

### 1. Prerequisites

Install the following:

- Node.js (v20+)
- MongoDB
- Docker (Optional)

---

### 2. Clone Repository

```bash
git clone https://github.com/piyusshkumar/EventExpress.git

cd EventExpress
```

---

### 3. Install Dependencies

Backend

```bash
cd backend

npm install
```

Frontend

```bash
cd frontend

npm install
```

---

### 4. Configure Environment Variables

Create the `.env` file and update all required credentials.

---

### 5. Start Backend

```bash
npm run dev
```

---

### 6. Start Frontend

```bash
npm run dev
```

---

## 🗺 API Endpoints

### Authentication (`/api/auth`)

- `POST /signup` – Register a new user.
- `POST /login` – Login user.
- `GET /profile` – Get authenticated user profile.

---

### Events (`/api/events`)

- `GET /` – Retrieve all events.
- `GET /:id` – Retrieve event details.
- `POST /` – Create a new event (Admin).
- `PUT /:id` – Update an event.
- `DELETE /:id` – Delete an event.
- `GET /?search=` – Search events.

---

### Bookings (`/api/bookings`)

- `POST /send-otp` – Send booking OTP.
- `POST /` – Verify OTP & Book Ticket.
- `GET /my-bookings` – Retrieve user bookings.
- `PATCH /:id/status` – Update booking status (Admin).

---

## 🐳 Docker Deployment

Build Docker Image

```bash
docker build -t eventexpress .
```

Run Container

```bash
docker run -p 5000:5000 --env-file .env eventexpress
```

---

## 🔒 Security

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Role-Based Authorization
- OTP Verification
- Secure Input Validation
- Environment Variable Configuration

---

## 🚀 Future Improvements

- PostgreSQL + Prisma ORM
- Redis Caching
- Refresh Token Authentication
- Stripe Payment Integration
- QR Code Ticket Generation
- Real-time Notifications (Socket.IO)
- BullMQ Email Queue
- GitHub Actions CI/CD
- Kubernetes Deployment

---

## 👨‍💻 Author

**Piyush Kumar**

- GitHub: https://github.com/piyusshkumar
- LinkedIn: https://www.linkedin.com/in/your-linkedin-profile/