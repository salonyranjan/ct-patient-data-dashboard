# Front End Developer Dynamic Skills Test V2

## 🧠 Test Overview

This assessment is designed to evaluate your technical, problem-solving, and communication skills as a Front-End Developer. The test consists of **three parts**:

### 1. 📝 Questionnaire

* **Duration:** 15 minutes
* **Format:** Multiple-choice or short-answer questions
* **Purpose:** Evaluate your theoretical knowledge of front-end technologies, frameworks, and best practices.

### 2. 🎥 Video Interview

* **Duration:** 15 minutes
* **Requirements:** Webcam and microphone
* **Purpose:** Assess your communication skills, thought process, and ability to articulate solutions clearly.

### 3. 💻 Development Challenge

* **Duration:** 180 minutes (3 hours)
* **Format:** Hands-on coding task
* **Purpose:** Demonstrate your ability to implement real-world front-end solutions, including responsive design, code quality, and functionality.

---

# 🩺 Tech.Care Patient Dashboard

A fully responsive and data-driven **Patient Dashboard** built using **React**, **Vite**, and **Tailwind CSS**. This dashboard fetches real patient data from the **Coalition Technologies API** and presents it in a clean, professional healthcare interface with charts, vital signs, and diagnosis details.

---

## ✨ Features

- **Dynamic Patient Switching:** Instantly update dashboard details when selecting a new patient from the sidebar.  
- **Secure API Integration:** Fetches live data using Basic Authentication from the Coalition API.  
- **Interactive Charts:** Displays blood pressure trends using **Chart.js** via `react-chartjs-2`.  
- **Smooth Animations:** Powered by **Framer Motion** for sidebar and card transitions.  
- **Professional UI Design:** Clean, modern healthcare interface inspired by high-fidelity mockups.  
- **Fully Responsive:** Seamlessly adapts to any screen size with flexible grid layouts.  

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | React (Functional Components + Hooks) |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Charts | Chart.js + React Chart.js 2 |
| Animations | Framer Motion |
| Icons | Lucide React |

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
Ensure you have **Node.js** and **npm** (or yarn/pnpm) installed.

### 3️⃣ Environment Variables

Create a `.env` file in the project root with the following:

```bash
VITE_API_URL=https://fedskillstest.coalitiontechnologies.workers.dev
VITE_API_USERNAME="coalition"
VITE_API_PASSWORD="skills-test"
```

> ⚠️ Use the correct credentials provided for your environment.

### 4️⃣ Run the Application

```bash
npm run dev
```

Then open:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📁 Folder Structure

| Path                                   | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| `src/App.tsx`                          | Main application logic, data fetching, and layout rendering. |
| `src/components/PatientSidebar.tsx`    | Patient list and selection sidebar.                          |
| `src/components/TopNav.tsx`            | Navigation bar with doctor info and app controls.            |
| `src/components/PatientDetailCard.tsx` | Patient info card showing personal and insurance details.    |
| `src/components/PatientChart.tsx`      | Chart.js component for displaying blood pressure history.    |
| `src/components/Spinner.tsx`           | Loading screen component.                                    |
| `tailwind.config.js`                   | Tailwind custom theme configuration.                         |

---

## 🧠 Design Highlights

* **Chart Aesthetics:** Custom colors and rounded edges for Systolic/Diastolic lines.
* **Vitals Cards:** Light backgrounds and semantic color cues.
* **Diagnosis Table:** Scrollable structure with sticky headers for usability.
* **Consistent Animations:** Spring-based transitions across components.
* 
---




