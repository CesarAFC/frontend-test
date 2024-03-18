# Payment App

## Description

This is a payment application built using React and TypeScript, with Vite frontend tooling for fast development, Redux for state management and Redux-persist to save data to the localStorage, Tailwind CSS for styling since is Mobile First Oriented and the freedom to use almost pure CSS such as Flex and Grid, Material UI for small UI components such as Buttons, Drawer and Modal, React-Icons for iconography due to the low bundle size, and Jest with Testing Library for unit testing.

Payment App is fully responsive and is focus on mobile first and images maintain the aspect ratio. UX Design was created under own consideration and criteria using a light theme with white, black and green as a palette colors. User can recover the progress made in case of refresh and works across Chrome, Safari and Mozilla. 

Finally the app is hosted (Temporary) in AWS S3 and CloudFront. <a href="https://d1asmyu5mr5ep9.cloudfront.net" target="_blank">Live Demo</a>. Cache is disabled to see changes instantly 

## Overview

The app allows users to make payments using a credit card. It validates whether the entered card details are valid or not using the luhn algorithm, and checking the issuer of the card as well. Users can add the product to their cart and proceed to pay. Upon payment completion, the app provides a summary of the transaction.



## Features

-  **React**
-  **TypeScript** 
-  **Vite** 
-  **Redux**
-  **Redux Persist**
-  **Material UI** 
-  **Tailwind CSS**
-  **React Icons**
-  **Fetch-Mock**
-  **Jest**
-  **Testing Library**

## Installation  
1. Clone the repository:
```  
git clone https://github.com/CesarAFC/frontend-test.git
```
2. Navigate into the project directory:
```
cd test-frontend
```
3. Install dependencies:

```
pnpm install
```

## Usage

- **Development Mode:** Run the development server:
```
pnpm run dev
```
This will start the development server. Open [http://localhost:5173/](http://localhost:5173) to view it in the browser.

- **Production Build:** Build the app for production:
```
pnpm run build
```

- **Testing:** Run tests using Jest:
```
pnpm run test
```
<img width="630" alt="Screenshot 2024-03-18 at 9 28 47 AM" src="https://github.com/CesarAFC/frontend-test/assets/93958252/f684fd0e-ee5c-474b-b1b8-86ba1469dc65">


