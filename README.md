# Vojtěch Sýkora's Portfolio

Just add commit and push and run `npm run deploy` 

Remove background https://www.remove.bg/ 

png to svg https://www.freeconvert.com/png-to-svg 

skills icons https://www.cleanpng.com/free/programming-language.html 

# resst

Welcome to the dynamic portfolio website of **Vojtěch Sýkora**. This portfolio showcases my work and achievements, built with **ReactJS**, **Tailwind CSS**, and **Firebase** for backend integration. It is optimized for a seamless experience across both desktop and mobile devices.

## 🌐 Live Preview

Explore the live portfolio [here](https://sykoravojtech.github.io/portfolio/).

## ⚠️ Important Notice

If you plan to use this repository for your own projects, please ensure to remove or replace the following tracking codes from the `Public/index.html` file:

- **Google Analytics**
- **Microsoft Clarity**

These scripts are located in the header section. Retaining them may lead to tracking data being sent to my accounts, potentially causing privacy concerns for you and your users.

---

## ✨ Features Overview

### 1. **Navbar**
   - Provides quick navigation to **About**, **Skills**, **Experience**, **Projects**, and **Education** sections.
   - Includes a button to access my **GitHub** profile.

   **Desktop View:**

   ![Navbar - Desktop](/readme-images/navbar.png)

   **Mobile View:**

   ![Navbar - Mobile](/readme-images/navbarmobile.png)

### 2. **About**
   - Displays my name, roles, a brief description, and a CV download button.

   **Desktop View:**

   ![About Section - Desktop](/readme-images/about.png)

   **Mobile View:**

   ![About Section - Mobile](/readme-images/aboutmobile.png)

### 3. **Skills**
   - Organized into four dynamic cards: **Frontend**, **Backend**, **AI/ML**, and **Others**.
   - Each card showcases multiple skills with individual icons for clarity.

   **Desktop View:**

   ![Skills Section - Desktop](/readme-images/skills.png)

   **Mobile View:**

   ![Skills Section - Mobile](/readme-images/skillsmobile.png)

### 4. **Experience**
   - Features dynamic cards displaying company logos, names, roles, years of service, and specific skills used.

   **Desktop View:**

   ![Experience Section - Desktop](/readme-images/experience.png)

   **Mobile View:**

   ![Experience Section - Mobile](/readme-images/experiencemobile.png)

### 5. **Projects**
   - Includes a filter to sort projects by **All**, **Programming**, **Deep Learning**, and **Machine Learning**.
   - Displays project cards (3 per row on desktop, 1 per row on mobile) with images, tags, names, durations, descriptions, team members, GitHub links, and a copy link button.
   - Clicking a project opens a modal with a detailed view, including a larger image, full description, team profiles, and links to view the code or live app (if provided).

   **Desktop View:**

   ![Projects Section - Desktop](/readme-images/projects.png)

   **Mobile View:**

   ![Projects Section - Mobile](/readme-images/projectsmobile.png)

### 6. **Education**
   - Contains cards showing institution logos, names, degrees, branches, years attended, grades, and brief descriptions.

   **Desktop View:**

   ![Education Section - Desktop](/readme-images/education.png)

   **Mobile View:**

   ![Education Section - Mobile](/readme-images/educationmobile.png)

### 7. **Contact Form**
   - Features a contact form connected via **EmailJS** for collaboration purposes (currently disabled).

   **Desktop View:**

   ![Contact Form - Desktop](/readme-images/contact.png)

   **Mobile View:**

   ![Contact Form - Mobile](/readme-images/contactmobile.png)

### 8. **Footer**
   - Displays the creator's name, links to all sections, social media icons, a portfolio download button, and a copyright message.

   **Desktop View:**

   ![Footer - Desktop](/readme-images/footer.png)

   **Mobile View:**

   ![Footer - Mobile](/readme-images/footermobile.png)

---

## 🔧 Technologies Used
- **ReactJS**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling and responsive design.
- **Firebase**: Backend service for authentication, database, and hosting.
- **EmailJS**: Service for integrating the contact form (currently disabled).

## 📱 Responsive Design
The portfolio is fully responsive and optimized to provide a seamless experience on both desktop and mobile devices.

---

Feel free to explore and reach out if you have any questions or feedback!

## Database

### Bio
- **name**: Your full name.
- **description**: Brief personal summary highlighting key skills, interests, or professional goals.
- **roles**: List of professional roles or areas of expertise (e.g., "Machine Learning Engineer", "Web Developer").
- **github**: URL to your GitHub profile.
- **linkedin**: URL to your LinkedIn profile.
- **insta**: URL to your Instagram or alternative social/professional media.
- **resume**: URL to your resume or CV.

### skills
- **title**: The category or type of skills (e.g., "Programming Languages", "Python Libraries", "Development Tools", etc.).
- **skills**: Array of skills, each with:
  - **name**: Name of the skill (e.g., "Python").
  - **image**: URL linking to the skill's logo or representative icon.

### experiences
- **company**: Name of the organization or company.
- **date**: Period of employment or involvement (e.g., "Dec 2024 - Present").
- **desc**: Detailed description of the role and responsibilities.
- **img**: URL of the company or organization's logo or relevant image.
- **link**: URL to the company’s website or relevant project page.
- **role**: Official job title or role designation.
- **skills**: List of relevant skills or technologies associated with this experience.

### projects
- **id**: Unique identifier for each project entry.
- **title**: The project's official name.
- **category**: Area or category the project falls into (e.g., "Machine Learning").
- **date**: The project's duration or completion date (e.g., "Jan 2024 - Mar 2024").
- **description**: Concise overview detailing objectives, technologies, and outcomes.
- **github**: URL to the GitHub repository containing the project's code.
- **image**: URL of a representative image for the project.
- **webapp**: URL to the deployed application or demo (leave blank if not applicable).
- **tags**: List of relevant technologies, frameworks, or methodologies used.
- **rank**: Numerical rank determining the project's display order.
- **member**: List of team members with their names, GitHub, LinkedIn profiles, and profile images.
- **ontop**: Indicator (1 or 0) specifying if the project should be highlighted prominently.

### education
- **date**: Duration of the educational program (e.g., "2023-2025").
- **degree**: Name of the degree or certification obtained (e.g., "Master's in Machine Learning").
- **grade**: Grade or GPA achieved (if applicable; leave empty otherwise).
- **desc**: Brief description of the educational highlights or thesis topic.
- **img**: URL of the institution's logo or relevant image.
- **school**: Name of the educational institution.
