// This file contains all the content for the syllabus page.
// You can easily add more weeks or edit topics here without touching the component code.

const syllabusData = [
  {
    week: 1,
    title: 'Introduction to React & Core Concepts',
    objective: 'This week, you will grasp the fundamental concepts of React, including component-based architecture, JSX, props, and state. By the end of this module, you will be able to build and run your first React application.',
    topics: [
      { 
        id: 'w1-m1', 
        title: 'Module 1: What is React?', 
        overview: 'An introduction to the React library, its core philosophy, and why it is a popular choice for building modern user interfaces.',
        keyPoints: [
          'Understanding the Virtual DOM',
          'Component-Based Architecture',
          'Setting up a React Environment with Create React App',
        ],
        selfLearning: 'Explore the history of front-end frameworks and compare React with Angular and Vue.' 
      },
      { 
        id: 'w1-m2', 
        title: 'Module 2: JSX and Rendering Elements', 
        overview: 'Learn about JSX, a syntax extension for JavaScript that makes writing React elements more intuitive and readable.',
        keyPoints: [
          'Introduction to JSX',
          'Embedding Expressions in JSX',
          'Rendering Elements into the DOM',
        ],
        selfLearning: 'Experiment with different JSX expressions and conditional rendering techniques.' 
      },
    ],
  },
  {
    week: 2,
    title: 'Components, Props, and State',
    objective: 'This week focuses on the building blocks of React applications: components. You will learn how to pass data using props and manage component-specific data with state.',
    topics: [
      { 
        id: 'w2-m1', 
        title: 'Module 1: Managing State', 
        overview: 'Dive into one of React\'s most important concepts: state. Learn how to manage data that changes over time within your components.',
        keyPoints: [
          'Introduction to state',
          'Using the useState Hook',
          'Updating state correctly',
        ],
        selfLearning: 'Build a simple counter application to practice state management.' 
      },
    ],
  },
  // Add data for Weeks 3 through 8 here...
];

export default syllabusData;