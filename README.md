# Clinic Appointment Page

## **Live Demo**
Check out the live version of the Product List App here: [Live Demo](https://clinik-appointment.netlify.app/)

![Home Page video](./public/img/home.gif)

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## About the Project

The Clinic Appointment Project is React-based application designed to manage doctor appointments efficiently. It allows users to view doctor details, book appointments via a modal interface, and manage the list of appointments dynamically.

## Features

- View a list of doctors with their specialization.
- Click on a doctor card to open a modal for booking an appointment.
- Add patient details and appointment date/time.
- View all booked appointments in a dynamic list.
- Delete appointments using a cancel icon.
- Double-click on an appointment to mark it as "Consulted."

## Technologies Used

- **React**: For building the user interface.
- **Bootstrap**: For styling and responsive design.
- **React Icons**: For icons used in the project.
- **CSS**: Custom styles for additional design tweaks.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/clinic-appointment-project.git
   cd clinic-appointment-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if you're using Yarn
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or with Yarn
   yarn start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Usage

1. **View Doctors**: The homepage displays a list of doctors with their names, specializations, and images.
2. **Book Appointment**:
   - Click on a doctor card to open the booking modal.
   - Fill in the patient name and select the appointment date and time.
   - Click "Submit" to save the appointment.
3. **Manage Appointments**:
   - View all appointments in the list below the doctors.
   - Click the cancel icon (red X) to delete an appointment.
   - Double-click an appointment to mark it as "Consulted."

## Folder Structure

```
clinic-appointment-project/
├── public/
├── src/
│   ├── components/
│   │   ├── AddModal.jsx
│   │   ├── AppointmentList.jsx
│   │   ├── Doctors.jsx
│   │   ├── DoctorsCard.jsx
│   ├── helpers/
│   │   ├── data.js
│   ├── CSS/
│   │   ├── Home.css
│   │   ├── DoctorsCard.css
│   │   ├── AppointmentList.css
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

