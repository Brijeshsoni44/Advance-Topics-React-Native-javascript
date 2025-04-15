// Example: Explaining Unit Testing Code
// Interviewer Question:
// "How do you write unit tests in React Native? Can you explain with an example?"

// Your Answer:
// 👉 "Sure! Unit testing is used to test individual functions to ensure they return the expected output. Let me walk you through a simple example where we test a function that adds two numbers."

// 🔹 Step 1: Explain the Function
// "Here’s a utility function that takes two numbers and returns their sum."

// tsx
// Copy
// Edit
// // utils/calculateSum.ts
// export const calculateSum = (a: number, b: number) => a + b;
// 👉 "This function simply adds two numbers together."

// 🔹 Step 2: Explain the Test Case
// "Now, let’s write a test case using Jest to verify that this function works correctly."

// tsx
// Copy
// Edit
// // utils/calculateSum.test.ts
// import { calculateSum } from './calculateSum';

// test('adds numbers correctly', () => {
//   expect(calculateSum(2, 3)).toBe(5);
// });
// 👉 "In this test, we import the function and use Jest’s expect method to check if calling calculateSum(2,3) returns 5."

// 🔹 Step 3: Explain How Jest Works
// "Jest is a popular testing framework for JavaScript. When we run this test using yarn test or npm test, Jest will automatically execute this function and compare the output with our expected result (5). If they match, the test passes."

// 🔹 Step 4: Explain Why This is Useful
// "Unit tests like this help catch bugs early and ensure that small functions work correctly before they are used in larger components or API calls."