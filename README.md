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

### 2️⃣ Installation

```bash
git clone https://github.com/Krnkreddy/Coalition-Technologies-Patient-Data-Frontend-Skills-Test.git
cd patient-dashboard
npm install
````

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

## 📜 License

This project is licensed under the **MIT License**.
© 2025 **KrnkReddy**. All rights reserved.

---

## 🙌 Credits

This project was inspired by and builds upon ideas from the open-source work by
**[Pranav5543/Coalition-Technologies](https://github.com/Pranav5543/Coalition-Technologies)**.
Huge thanks to their contribution to the developer community.

---



<details>
  <summary>💬 Questions Addressed</summary>

## Question 1

**Explain in 4–6 sentences why you are the best candidate for the position.**

## Answer:

I'm passionate about front-end development and creating responsive, user-focused interfaces. I have experience building dynamic web applications using **HTML, CSS, JavaScript**, and frameworks like **React**. My attention to detail, problem-solving skills, and ability to translate design concepts into seamless user experiences make me a strong fit for this role. I'm also eager to learn continuously and adapt to new technologies to deliver high-quality, optimized web solutions.


Here’s your provided content formatted neatly for a **GitHub README** section:

---

## 💬 Question 2

**What was your last (or current) job position? Title? Daily tasks? Accomplishments?**

## 🧩 Answer

My most recent position was **Data Analyst with LLMs Intern** at **Edunet Foundation (AICTE & VOIS for Tech Program)**. It was a **4-week national internship** focused on **Conversational Data Analytics using Large Language Models (LLMs)**. My daily tasks included analyzing datasets, applying **NLP techniques**, and exploring **AI-driven insights** across agriculture, science, and business domains. I completed multiple hands-on case studies and an independent data analytics project under mentor guidance. I successfully earned certification from **AICTE and Edunet Foundation** for completing the program and demonstrating applied proficiency in **data analysis and AI integration**.

---

## 💬 Question 3

**What is the accomplishment you are most proud of?**

## 🧩 Answer

I'm most proud of developing an **automation tool** using **Python, Playwright, and Telethon** that automatically enrolled users in free online courses by scraping **Telegram posts**. The project significantly reduced manual effort and improved reliability through multiple optimized iterations. It strengthened my **coding**, **debugging**, and **project management** skills, and confirmed my passion for creating impactful tech solutions.

---

## 💬 Question 4

**How would you handle a situation where another team member was critical of your work?**

## 🧩 Answer

I would first listen carefully to understand their feedback and perspective without becoming defensive. I believe constructive criticism helps me improve, so I would ask clarifying questions to identify specific areas of concern. If the feedback is valid, I would make the necessary improvements and thank them for helping me grow. If there's a misunderstanding, I would explain my reasoning calmly and collaborate to find the best solution for the project.

---

## 💬 Question 5

**With projects you've worked on in the past, what SEO and ADA principles, if any, did you factor in with your work? Do you have any experience or knowledge of other online marketing work?**

## 🧩 Answer

In my front-end and automation projects, I've focused on creating **clean, semantic, and accessible code** that improves both **SEO** and **usability**. I follow practices like using **descriptive tags**, **optimizing page load times**, and maintaining **responsive design** for all devices. I also understand the importance of **ADA compliance** — ensuring proper **contrast**, **alt text**, and **keyboard navigation**. While my main focus is development, I have **basic knowledge of online marketing** concepts like **keyword optimization** and **analytics tracking**.

---

## 💬 Question 6

**What experience do you have with development? Could you please list the tech stacks you have the most experience in, from coding languages to content management systems to SysAdmin technologies?**

## 🧩 Answer

I have experience in **full-stack** and **automation-focused development** using **Python, C, C++, HTML, CSS, JavaScript**, and frameworks like **React (basic)** and **Playwright/Selenium** for automation. I've also worked with **SQL** for data management and **Git/GitHub** for version control. For AI and backend experimentation, I've used **PyTorch** and **TensorFlow (basics)**, along with **Azure DevOps** for project workflow. I'm comfortable managing deployments on lightweight web servers and have a growing interest in integrating **front-end development** with **AI** and **automation tools**.

</details>

---

<details>
  <summary>💻 Coding Context</summary>

  # Skills Test — Adobe XD → HTML (Single Page)

## Overview

Convert the provided **Adobe XD** template into a single-page HTML site and populate the UI by calling the **Coalition Technologies Patient Data API**. Focus on accurate visual conversion, best coding practices, and using API data to render the required patient information and chart(s).

---

## Instructions

* Convert the Adobe XD template into a **single-page** responsive HTML site.
* Make a **GET** request to the Coalition Technologies Patient Data API to fetch data for the UI.
* Populate the UI using the API data.
* Implement the **blood pressure graph** shown in the XD template (Chart.js recommended, but any chart library is acceptable).
* **Only display information for Jessica Taylor** — do not display other patients' data.
* Include **source files** (not only minified files) in your submission.
* Package all files into a **single zip** and upload it on the application page.

---

## Resources

* Adobe XD template: `https://xd.adobe.com/view/121254c9-532f-4772-a1ba-dfe529a96b39-4741/`
* API documentation: `https://documenter.getpostman.com/view/11861104/2sA35G42ve`
* Recommended chart library: `https://www.chartjs.org/`

---

## Allowed Tools / Frameworks

* You may use **plain HTML/CSS/JS** or frameworks such as **React, Next.js, Vue.js**, etc.
* **Important:** If you use a framework, also include the compiled HTML (or an HTML file) so reviewers can open and inspect your submission without building.

---

## Deliverables

1. Single-page site that matches the Adobe XD design and is populated with API data for **Jessica Taylor**.
2. Working blood pressure chart representing patient yearly data.
3. All source files (HTML, CSS, JS, assets, and any project source) plus any build output necessary to view the page.
4. One `.zip` file containing everything above — upload to the application page.

---

## Implementation Notes & Constraints

* **Do not** spend time on UI interactions that are *not* present in the template (examples that will **not** earn extra points):

  * Implementing advanced search logic for the search button.
  * Building dropdown logic for the gear icon.
  * Building interactions for the ellipses (...) in the side nav.
* Focus instead on: pixel-accurate layout, clean/semantic markup, responsive behavior, accessibility basics, and correct use of API data.
* Ensure reliability: handle API errors gracefully and document any assumptions in a short README inside the zip.

---

## Submission Checklist

* [ ] Single-page HTML viewable in a browser (no build required to view).
* [ ] Chart(s) implemented and fed by API data.
* [ ] Data displayed only for **Jessica Taylor**.
* [ ] Source files included (non-minified).
* [ ] ZIP file created and uploaded to the application page.
* [ ] Short README inside the ZIP describing how to open the submission and any assumptions.

---

Good luck — focus on accuracy, code quality, and faithful implementation of the design.


</details>
