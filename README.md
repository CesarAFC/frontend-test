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
```bash  
git clone https://github.com/CesarAFC/frontend-test.git
```
2. Navigate into the project directory:
```bash
cd test-frontend
```
3. Install dependencies:

```bash
pnpm install
```

## Usage

- **Development Mode:** Run the development server:
```bash
pnpm run dev
```
This will start the development server. Open [http://localhost:5173/](http://localhost:5173) to view it in the browser.

- **Production Build:** Build the app for production:
```bash
pnpm run build
```

- **Testing:** Run tests using Jest:
```bash
pnpm run test
```
<img width="630" alt="Screenshot 2024-03-18 at 9 28 47 AM" src="https://github.com/CesarAFC/frontend-test/assets/93958252/f684fd0e-ee5c-474b-b1b8-86ba1469dc65">

### Tests runs

> jest --watchAll=false --coverage --CI=true

 PASS  src/__test__/utils/expirationDateFormat.test.ts
 PASS  src/__test__/CartReducer.test.ts
 PASS  src/__test__/PrimaryButton.test.tsx
 PASS  src/__test__/Input.test.tsx
 PASS  src/__test__/ProductInCart.test.tsx
 PASS  src/__test__/DeleteFromCartButton.test.tsx
 PASS  src/__test__/utils/formatCurrency.test.ts
 PASS  src/__test__/App.test.tsx
 PASS  src/__test__/utils/luhnvalidation.test.ts
 PASS  src/__test__/utils/CardFormatter.test.ts
 PASS  src/__test__/utils/getCartTotal.test.ts
 PASS  src/__test__/CreditCardInput.test.tsx
 PASS  src/__test__/EmptyState.test.tsx
 PASS  src/__test__/Navbar.test.tsx

File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------|---------|----------|---------|---------|-------------------
All files                  |    72.9 |    68.96 |    61.7 |   75.55 |                   
 UI                        |   35.29 |       50 |   33.33 |   33.33 |                   
  CartDrawer.tsx           |   85.71 |       50 |   66.66 |   83.33 | 20                
  FinalStatus.tsx          |       0 |      100 |       0 |       0 | 11-21             
 actions                   |   57.14 |      100 |   14.28 |     100 |                   
  index.ts                 |   57.14 |      100 |   14.28 |     100 |                   
 components                |   58.33 |    46.15 |   70.58 |   57.77 |                   
  CartOverview.tsx         |   32.14 |     12.5 |   33.33 |      28 | 15-22,35-59,63-69 
  CreditCardInput.tsx      |     100 |      100 |     100 |     100 |                   
  DeleteFromCartButton.tsx |     100 |      100 |     100 |     100 |                   
  EmptyState.tsx           |     100 |      100 |     100 |     100 |                   
  Input.tsx                |     100 |      100 |     100 |     100 |                   
  Label.tsx                |     100 |      100 |     100 |     100 |                   
  Navbar.tsx               |     100 |      100 |     100 |     100 |                   
  PrimaryButton.tsx        |     100 |      100 |     100 |     100 |                   
  ProductInCart.tsx        |      75 |      100 |      50 |      75 | 22                
 hooks                     |     100 |      100 |     100 |     100 |                   
  useTypedSelector.tsx     |     100 |      100 |     100 |     100 |                   
 reducers                  |   80.95 |     64.7 |   57.14 |      85 |                   
  CartReducer.ts           |      80 |     64.7 |   57.14 |   84.21 | 68,94,125         
  index.ts                 |     100 |      100 |     100 |     100 |                   
 store                     |     100 |      100 |     100 |     100 |                   
  index.ts                 |     100 |      100 |     100 |     100 |                   
 types                     |     100 |      100 |     100 |     100 |                   
  index.ts                 |     100 |      100 |     100 |     100 |                   
 utils                     |    97.5 |    84.61 |     100 |   97.05 |                   
  utils.tsx                |    97.5 |    84.61 |     100 |   97.05 | 33        

Test Suites: 14 passed, 14 total
Tests:       22 passed, 22 total
Snapshots:   0 total
Time:        2.695 s
