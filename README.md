![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) 
![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![](https://img.shields.io/badge/Knex.js-ff5722?style=for-the-badge&logo=knex&logoColor=white)

# Aftermath
### Say goodbye to doing math after a dinner night out

Are you sick of pulling out that calculator app after a nice dinner night out with friends, painstakingly trying to split an item three-way while struggling to remember the total you had calculated for yourself thus far so you can later add on to that amount? Are you just as confused reading that sentence as you are doing those calculations? Don't forget about the tip, too.

Well, fret no more with this bill splitting app!

Test it out for yourself: https://aftermath-split.netlify.app/

https://github.com/user-attachments/assets/79a4459e-6d1b-40ab-8259-49f747a3d500

### Features

- Upload image of restaurant receipt instead of manual input of each line item
- Edit any incorrect values after the image as been converted to text
- Add names of friends to the bill
- Assign line items to the person who ordered it
- Split the cost of a single line item between multiple people
- Each person's individual total and total with tax + tip will automatically be calculated

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 12.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)
- [MySQL](https://dev.mysql.com/)

 ### External API
 
This app uses the Veryfi OCR API to convert images to text. 

1. To generate the API key, client ID, and username needed to make POST requests, sign up for a free account here: https://www.veryfi.com/
2. Verify your email to set up your portal account
3. After logging into your account, open up settings on the left sidebar and go to keys to find the necessary information for the server side environmental variables needed for step 3 of the installation.
  
## Getting Started

### 1. Clone the Repository

```bash
https://github.com/linhpham4/aftermath.git
```

### 2. Create Database

1. Open MySQL Workbench.
2. Click on the 'Create Schema' icon on the top (fourth icon from the left).
3. Name your database (this name will be used as one of the server side environmental variables in the next step).

### 3. Set Up Environment Variables

1. In the root of the client directory, you'll find a file named `.env.sample`.
2. Create a copy of this file and name it `.env`.
```bash
cp .env.sample .env
```
3. Open the `.env` file and fill in the required environment variables with your specific values.
4. Repeat the same steps for the server directory.
- I use 'http://localhost:8080' for the client side variable and '8080' for the server side port.

### 4. Install Dependencies

Install dependencies for both the server and client root directories:

```bash
npm install
```

### 5. Migrate Tables and Seed

1. On the server side run:

```bash
npx knex migrate:latest
```

2. Seed the migrated database:

```bash
npx knex seed:run
```

### 6. Run the Application

Start both the server and client sides of the application.

1. In the server root directory, run:

```bash
node --watch server.js
```

2. In the client root directory, run:

```bash
npm run dev
```

### 7. Access the Application

Open the application in your browser (usually on `http://localhost:5173/`).

## How to use
### Home page
1. Upload a photo of your receipt and click the upload button.
    - The image will be saved in the public/images directory in the server.
    - The bills and items table will be updated with the new data from the bill.

### Edit page
1. Once the edit page loads, you can edit any text in black if any amounts or item names are incorrect.
    - Changing the price of any items will update the subtotal and total.
    - Changing the price of the tax or tip will update the total.
2. Add friends to the bill (click the + button on the top left).
3. To assign a person to an item, click on their avatar in the item section.
    - The avatars of people who are assigned to the item will be brightened.
    - Upon assigning, the total of the person's portion of the bill will automatically change at the top.
 
## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly.
2. Check that your `.env` file is set up properly with all required variables.
3. Make sure no other processes are using the required ports.

For any other problems, please open an issue in the GitHub repository.
