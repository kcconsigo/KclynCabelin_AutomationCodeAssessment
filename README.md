<h1 align="center">

Project Name: Holy Family Christmas Tree Toppers | Balsam Hill Automation Demo</h1>

<h3> This automation framework covers features such as: Search an Item, Select Product customization options, and its validation that runs on QA Environment (It can also be run on DEV Environment</h3>

# <b> </b>Framework and Tools used: </b>
<h4> Playwright for Automation and node.js and typescript for programming language
  
<br> Github Actions CICD Integration tool </br> </h4>

# To Clone the project:
git clone https://github.com/kcconsigo/KclynCabelin_AutomationCodeAssessment.git

# Installing Playwright 
npm init playwright@latest

npx playwright test

npx playwright test --ui

npx playwright test --headed

npm install -D @playwright/test@latest
# Also download new browser binaries and their dependencies:
npx playwright install --with-deps

npx playwright --version

# Running codegen and web locators:
npx playwright codegen demo.playwright.dev/todomvc

# To download ortoni report
npm install -D ortoni-report  

# Output and Result as per regression test automation testing
![image](https://github.com/user-attachments/assets/2a76e1b8-826f-45df-825d-d570a59a0a3c)

# Configured Test Management Envi for QA Envi
![image](https://github.com/user-attachments/assets/d574743e-9daf-4a19-be6d-542aab25173d)
 - Create global Envi Setup in javascript file
![image](https://github.com/user-attachments/assets/4af0868a-ef3f-4324-89e2-360376c08050)
![image](https://github.com/user-attachments/assets/5f8271c6-c99e-46c8-827a-a41ee2401850)
- Specify globalSetup to your playwright.config.js
![image](https://github.com/user-attachments/assets/cd2d9aaa-1677-4b22-b7a3-c2b3f74258e3)
- We can now use our process.env in spec.js file
![image](https://github.com/user-attachments/assets/0f7d8129-2862-4e3f-b630-d6f10567c03d)
And then lastly execution
**Note: NOTE: for MacOS we should use this command : export ENV="dev" export ENV="qa"**




