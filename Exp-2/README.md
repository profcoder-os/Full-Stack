# Student Course Portal (React + Bootstrap + Material UI)

## Project Overview
Student Course Portal is a responsive frontend Single Page Application (SPA) built using **React**.  
It allows users to browse courses, enroll in courses, view enrolled courses, and submit feedback through a clean and modern UI.

This project is designed as a **frontend-only case study/experiment** to understand component-based development and UI styling using Bootstrap and Material UI.

---

## Experiment 1: Navbar (Bootstrap Navigation)
### Description
A professional navigation bar is implemented using **Bootstrap classes** in React.  
It provides easy navigation between pages like Home, Courses, Enrolled, Feedback, Login, and Register.

### Features
- Responsive layout using Bootstrap
- Horizontal navigation menu
- Clean UI and customer-friendly design
- React Router integration (SPA navigation)

<img width="1920" height="1083" alt="Screenshot 2026-01-22 at 3 20 24 PM" src="https://github.com/user-attachments/assets/45d48d6a-22cf-45ed-b745-6ffc53ac854b" />

---




## Experiment 2: CourseCard Component (Course Display Cards)
### Description
The `CourseCard` component is a reusable UI component used to display a course in a structured card layout.  
Each card contains course title, description, level, duration, instructor name, and an enroll button.

### Features
- Reusable React component
- Displays course information in a professional design
- Enroll button with "Already Enrolled" handling
- Responsive grid layout for multiple courses

<img width="3840" height="2166" alt="image" src="https://github.com/user-attachments/assets/ed90c9b3-41d0-420f-b555-71f98ad169f0" />

---

## Experiment 3: Material UI Integration (MUI Components)
### Description
Material UI (MUI) is used to improve the user interface using ready-made professional components such as Cards, Buttons, Typography, Chips, and TextFields.

### Components Used
- `Card`, `CardContent`
- `Button`
- `Typography`
- `TextField`
- `Chip`

### Benefits
- Modern UI components
- Consistent design and responsiveness
- Attractive user experience

<img width="1920" height="1083" alt="Screenshot 2026-01-22 at 3 24 57 PM" src="https://github.com/user-attachments/assets/a7fee5f4-d767-4dd6-b868-c25169caff99" />

---

## Experiment 4: Student Course Portal (Complete SPA)
### Description
This experiment combines **Navbar + CourseCard + Material UI** into a complete frontend SPA.  
The portal includes multiple pages and features like course browsing, enrollment tracking, and feedback submission.

### Portal Modules
- Home Page (Landing Page UI)
- Browse Courses Page
- Enrolled Courses Page (with Disenroll option)
- Feedback Page
- Login/Register Pages (UI only)

### Key Functionalities
- View course list
- Enroll in courses
- View enrolled courses
- Remove/Disenroll from enrolled courses
- Submit feedback form (frontend-only)

<img width="1920" height="1081" alt="Screenshot 2026-01-22 at 3 26 40 PM" src="https://github.com/user-attachments/assets/f96780df-591e-4346-befe-b6fcf861df7c" />


<img width="3840" height="3563" alt="image" src="https://github.com/user-attachments/assets/5f345e3e-421b-480e-a4d5-a339ff7051ca" />


---

## Project Folder Structure

```bash
src/
│── components/
│   ├── Navbar.jsx
│   ├── CourseCard.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Courses.jsx
│   ├── Enrolled.jsx
│   ├── Feedback.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│
│── data/
│   ├── courses.js
│
│── App.jsx
│── App.css
│── main.jsx
│── index.css
