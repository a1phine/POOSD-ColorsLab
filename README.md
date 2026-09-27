# POOSD-ColorsLab (LAMP Stack Color Manager)

## Description
POOSD-ColorsLab is a full-stack web application developed as part of the COP 4331 COLORS Lab using the LAMP stack (Linux, Apache, MySQL, PHP). It allows authenticated users to log in, search, add, and manage color records saved within a MySQL database.

## Technologies Used
- **Frontend:** HTML5, CSS, JavaScript
- **Backend:** PHP
- **Database:** MySQL
- **Infrastructure / Server:** DigitalOcean Droplet LAMP on Ubuntu 24.04

## Setup & Installation Instructions
1. Deploy an Ubuntu Linux Droplet on DigitalOcean using the LAMP marketplace image.
2. Create the `COP4331` MySQL database and `Colors` / `Users` tables using the database schema provided in the lab instructions.
3. Place PHP API endpoint scripts (`AddColor.php`, `Login.php`, `SearchColors.php`) inside `/var/www/html/LAMPAPI/` and web assets (`index.html`, `color.html`, `css/`, `js/`) in `/var/www/html/`.
4. Update the database access credentials in the PHP scripts to connect to MySQL.

## How to Run & Access the Application
1. Ensure Apache and MySQL services are active on your server:
   `sudo systemctl status apache2`
2. Open a web browser and navigate to your Droplet's public IP address or domain:
   `http://YOUR_DROPLET_IP/`
3. Log in with user credentials to manage color records.

## Assumptions, Limitations, & AI Usage
- **Assumptions:** Assumes the user has configured an active DigitalOcean Droplet running Apache and MySQL.
- **Limitations:** SSL/TLS encryption must be configured separately for HTTPS.
- **AI Usage & Attribution:** In accordance with UCF's Academic Integrity and AI Policy, AI assistance (Gemini) was utilized as a supportive tool throughout this project. AI was used to assist with Git workflow setup, terminal command troubleshooting, and structuring project files. All generated code and configuration steps were manually reviewed and tested against course requirements to ensure accuracy.

### Prompts Used
- *"How do I turn http to https and make it accessible through all api endpoints"*
- *"give me the step by step do do everything required in the rubric"*
- *"does the readme match the requirements of this rubric"*
