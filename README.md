# health_management_webapp
  This app basicaly developed for guiding a user of age greater than 65 years.
# Run on locals
  a] Make the clone of this repository.
  b] Open your terminal and go to the appropriate folder.
  c] Run command npm install.
  d] Set-Up your own MongoDb url and required environment variables.
  e] Ater that run command node index.js
# Technology Used
  a] NodeJs
  b]ExpressJs
  c] MongoDb
  d] EJS
  e] Backend npm--- colors, cors, dotenv, ejs, express, express-ejs-layout, mongoose, morgan
# Features-----
   a] First a user visits then he/she will redurect to the home page.
   b] In home page at the top he will see a navbar, in which first he/she see brand name, search bar with search button, Resister and, sign-in buttons apart from this
      He/she can also see a footer with some texts and in body some texts.
  c] If a user click on register button he/she will redirect to register form page here a user can fill details and register in app and after that user will redirect 
     to sign-in page where user can will sign-n by filling email and password.
  d] After sign-in user will redirect to after log in page and can see same navbar with only my-reminder button and go to home button only and in body some texts.
  e] When a user click on my-reminders butoon user will redirct to profile page where user will see important reminders to be healty at the age of more than 65 years.
# Render-URL
  URL--
# Front-Ebd Views
 1] Home Page
 ![image](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/6dcc24e0-dda8-4a68-8ed3-c84f6e74bdb7)
 2] Register-Page
 ![image](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/b0896e24-aa06-45eb-90ba-4b17e5b8e815)
 3] Sign-In Page
 ![image](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/b36b56e3-ccbc-41d6-a7ab-4304bbd6f2e3)
 4] After sign-in
 ![image](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/07191191-4e05-4652-8608-a78ef9da3187)

 5] Profile Page
 ![image](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/8186a22f-3349-46e9-9212-4676a6bccbb8)

# APIs Calling By Postman's Images
 1] For Register HTTP-RWQUEST->POST URL: http://localhost:9595/api/v1/user/register
 ![image](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/aea38590-0e0a-4ec0-8b3e-40ae1413c0f2)
 2] For Log-In HTTP REQUEST->POST URL: http://localhost:9595/api/v1/user/login
 ![Screenshot 2023-07-31 103425](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/6ada05d2-4a8f-4deb-8bf0-1df857985912)
 3] For Adding Activities HTTP REQUEST-PUT URL: http://localhost:9595/api/v1/user/activity
 ![image](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/6e894872-a962-4f7b-8c9e-204d7a0445b8)
 4] For Adding Nutritions HTTP REQUEST-PUT URL: http://localhost:9595/api/v1/user/nutrition
 ![image](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/31f3eb30-a0c4-4d63-8785-edd76c0619e6)
 5] For Adding Vitals HTTP REQUEST-PUT URL: http://localhost:9595/api/v1/user/vitals
 ![image](https://github.com/vaidyahimanshu502/health_management_webapp/assets/76218691/1d71551d-3b1a-45b5-a255-98b50546553a)










