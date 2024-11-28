
# **IndoTravi – Travelling Website**

**IndoTravi** is a fully responsive travel website built with React and styled using Tailwind CSS. It features reusable components, dynamic icons, and a sleek modern design to provide a seamless user experience.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## **Table of Contents**

1. [Features](#features)  
2. [Getting Started](#getting-started)  
3. [Available Scripts](#available-scripts)  
4. [Project Structure](#project-structure)  
5. [Technologies Used](#technologies-used)  
6. [Learn More](#learn-more)  
7. [License](#license)

---

## **Features**

- **Responsive Design**: Works flawlessly on desktops, tablets, and mobile devices.  
- **Tailwind CSS**: Fast and efficient styling with a utility-first CSS framework.  
- **Reusable Components**: Modular and maintainable code architecture.  
- **Dynamic Icons**: Icons from Heroicons and React Icons for enhanced design.  
- **Interactive Footer**: Newsletter subscription with validation and social media links.

---

## **Getting Started**

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)  
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/IndoTravi.git
   ```

2. Navigate to the project directory:

   ```bash
   cd IndoTravi
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up **Tailwind CSS**:

   - Install Tailwind CSS via npm:

     ```bash
     npm install -D tailwindcss postcss autoprefixer
     ```

   - Generate the `tailwind.config.js` file:

     ```bash
     npx tailwindcss init
     ```

   - Configure the `tailwind.config.js` file to scan your project for classes:

     ```javascript
     module.exports = {
       content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```

   - Add Tailwind's base, components, and utilities styles to the `src/index.css` file:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

5. Install **Heroicons**:

   ```bash
   npm install @heroicons/react
   ```

6. Install **React Icons**:

   ```bash
   npm install react-icons
   ```

7. Start the development server:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## **Available Scripts**

In the project directory, you can run:

### `npm start`

Runs the app in development mode.Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.See more about [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and filenames include hashes.Your app is ready to be deployed!

See more about [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you cannot go back!**

This command will remove the single build dependency from your project and copy all configuration files into your project. Use this if you need full control over the build tools.

---

## **Project Structure**

```
IndoTravi/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/          # Static assets (images, icons, etc.)
│   ├── components/      # Reusable React components
│   ├── pages/           # Page-level components
│   ├── utils/           # Utility functions and constants
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── package.json
└── README.md
```

---

## **Technologies Used**

- **React**: Frontend framework  
- **Tailwind CSS**: Utility-first CSS framework  
- **Heroicons**: Free, open-source SVG icon set  
- **React Icons**: Additional icons for enhanced UI  

---

## **Learn More**

- Learn more about React [here](https://reactjs.org/).  
- Learn more about Tailwind CSS [here](https://tailwindcss.com/).  
- Learn about the Create React App [here](https://facebook.github.io/create-react-app/docs/getting-started).

---

## **License**

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.
