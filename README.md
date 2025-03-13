# Vojtěch Sýkora's Portfolio

# resst

Welcome to the dynamic portfolio website of **Vojtěch Sýkora**. This portfolio showcases my work and achievements, built with **ReactJS**, **Tailwind CSS**, and **Firebase** for backend integration. It is optimized for a seamless experience across both desktop and mobile devices.

## 🌐 Live Preview

Explore the live portfolio [here](https://sykoravojtech.github.io/portfolio/).

## ⚠️ Important Notice

If you plan to use this repository for your own projects, please ensure to remove or replace the following tracking codes from the `public/index.html` file:

- **Google Analytics**

These scripts are located in the header section. Retaining them may lead to tracking data being sent to my accounts, potentially causing privacy concerns for you and your users.

---

## 🔧 Technologies Used
- **ReactJS**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling and responsive design.
- **Firebase**: Backend service for authentication, database, and hosting.

## 📱 Responsive Design
The portfolio is fully responsive and optimized to provide a seamless experience on both desktop and mobile devices.

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
- **paper**: URL to the academic paper PDF (leave blank if not applicable).
- **tags**: List of relevant technologies, frameworks, or methodologies used.
- **rank**: Numerical rank determining the project's display order... Sort by rank (ascending, 1 comes first)
- **member**: List of team members with their names, GitHub, LinkedIn profiles, and profile images.
- **ontop**: Indicator (1 or 0) specifying if the project should be highlighted prominently.

### education
- **date**: Duration of the educational program (e.g., "2023-2025").
- **degree**: Name of the degree or certification obtained (e.g., "Master's in Machine Learning").
- **grade**: Grade or GPA achieved (if applicable; leave empty otherwise).
- **desc**: Brief description of the educational highlights or thesis topic.
- **link**: URL to the company’s website or relevant project page.
- **img**: URL of the institution's logo or relevant image.
- **school**: Name of the educational institution.

• 

## Working with the repo

Just add commit and push and run `npm run deploy` 

Remove background https://www.remove.bg/ 

png to svg https://www.freeconvert.com/png-to-svg 

skills icons https://www.cleanpng.com/free/programming-language.html 

## Acknowledgment
Thank you Sibi Siddharth S for inspiration for this portfolio

## TODO
- [] navbar on top sometimes starts appearing and dissapearing
- [] fix tags in projects being half cut on some cards
- [] under intro add a section with personal info about me life phone number and location and stuff like that
- [] add a licences and certifications section