// src/data/assignmentsData.js

export const assignmentsData = [
  {
    week: 1,
    mandatoryNote: "Please ensure all mandatory assignments for Week 1 are completed without fail.",
    modules: [
      {
        topic: "Design principles & Patterns",
        mandatoryAssignments: [
          {
            id: 'w1m1q1',
            intro: "Implementing the Singleton Pattern.",
            fullQuestion: "Exercise 1: Implementing the Singleton Pattern Scenario: You need to ensure that a logging utility class in your application has only one instance throughout the application lifecycle to ensure consistent logging.",
          },
          {
            id: 'w1m1q2',
            intro: "Implementing the Factory Method Pattern",
            fullQuestion: "You are developing a document management system that needs to create different types of documents (e.g., Word, PDF, Excel). Use the Factory Method Pattern to achieve this.",
          },
        ],
        additionalAssignments: [],
      },
      {
        topic: "Data structures and Algorithms",
        mandatoryAssignments: [
          {
            id: 'w1m2q1',
            intro: "E-commerce Platform Search Function",
            fullQuestion: "You are working on the search functionality of an e-commerce platform. The search needs to be optimized for fast performance.",
          },
          {
            id: 'w1m2q2',
            intro: "Financial Forecasting",
            fullQuestion: "You are developing a financial forecasting tool that predicts future values based on past data.",
          },
        ],
        additionalAssignments: [],
      },
    ],
  },
  {
    week: 2,
    mandatoryNote: "Please ensure all mandatory assignments for Week 2 are completed without fail.",
    modules: [
      {
        topic: "PL/SQL programming",
        mandatoryAssignments: [
          {
            id: 'w2m1q1',
            intro: " Control Structures",
            fullQuestion: `
Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.
  Question: Write a PL/SQL block that loops through all customers, checks their age, and if they are above 60, apply a 1% discount to their current loan interest rates.

Scenario 2: A customer can be promoted to VIP status based on their balance.
  Question: Write a PL/SQL block that iterates through all customers and sets a flag IsVIP to TRUE for those with a balance over $10,000.

Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 30 days.
  Question: Write a PL/SQL block that fetches all loans due in the next 30 days and prints a reminder message for each customer.`,
      },
    ],

        additionalAssignments: [],
      },
    ],
  },
  // Add more weeks (Week 3 to Week 8) following this structure
  {
    week: 3,
    mandatoryNote: "Please ensure all mandatory assignments for Week 3 are completed without fail.",
    modules: [
      {
        topic: "Spring Core and Maven",
        mandatoryAssignments: [
          {
            id: 'w3m1q1',
            intro: "Exercise 1: Configuring a Basic Spring Application.",
            fullQuestion: "Your company is developing a web application for managing a library. You need to use the Spring Framework to handle the backend operations.",
          },
        ],
        additionalAssignments: [
          {
            id: 'w3a1q1',
            intro: "Configuring the Spring IoC Container",
            fullQuestion: "The library management application requires a central configuration for beans and dependencies.",
          },
        ],
      },
    ],
  },
  {
    week: 4,
    mandatoryNote: "Please ensure all mandatory assignments for Week 4 are completed without fail.",
    modules: [
      {
        topic: "Spring REST using Spring Boot 3",
        mandatoryAssignments: [
          {
            id: 'w4m1q1',
            intro: "Create a Spring Web Project using Maven",
            fullQuestion: "Create a Spring Web Project using Maven",
          },
         
        ],
        additionalAssignments: [
          {
            id: 'w4a1q1',
            intro: "HTTP Request Response. ",
            fullQuestion: "HTTP Request Response. ",
          },
        ],
      },
    ],
  },
  {
    week: 5,
    mandatoryNote: "Please ensure all mandatory assignments for Week 5 are completed without fail.",
    modules: [
      {
        topic: "Microservices with Spring Boot 3 and Spring Cloud",
        mandatoryAssignments: [
          {
            id: 'w5m1q1',
            intro: "Creating Microservices for account and loan.",
            fullQuestion: "In this hands on exercises, we will create two microservices for a bank. One microservice for handing accounts and one for handling loans.",
          },
          
          
        ],
        additionalAssignments: [
          {
            id: 'w5a1q1',
            intro: "Create Eureka Discovery Server and register",
            fullQuestion: "Eureka Discovery Server holds a registry of all the services that are available for immediate consumption. Anybody whom wants to consume a RESTful Web Service can come to the discovery server and find out what is available and ready for consumption. Eureka Discovery Server is part of spring cloud module. ",
          },
        ],
      },
    ],
  },
  {
    week: 6,
    mandatoryNote: "Please ensure all mandatory assignments for Week 6 are completed without fail.",
    modules: [
      {
        topic: "React",
        mandatoryAssignments: [
          {
            id: 'w6m1q1',
            intro: "Set up a react environment,Use create-react-app",
            fullQuestion: "Create a new React Application with the name “myfirstreact”, Run the application to print “welcome to the first session of React” as heading of that page.",
          },
          {
            id: 'w6m1q2',
            intro: "Create a class component,Create multiple components,Render a component",
            fullQuestion: " Create a react app for Student Management Portal named StudentApp and create a component named Home which will display the Message “Welcome to the Home page of Student Management Portal”. Create another component named About and display the Message “Welcome to the About page of the Student Management Portal”. Create a third component named Contact and display the Message “Welcome to the Contact page of the Student Management Portal”. Call all the three components.",
          },
        ],
        additionalAssignments: [
          {
            id: 'w6a1q1',
            intro: "Implement a Simple Navigation Menu, Add Basic Routes (install, configure), Use Routes in React Applications",
            fullQuestion: "Cognizant Academy teams want to maintain a list of trainers along with their expertise in a SPA using React as the technology. You are assigned the task of creating this React app.",
          },
        ],
      },
    ],
  },
  {
    week: 7,
    mandatoryNote: "Please ensure all mandatory assignments for Week 7 are completed without fail.",
    modules: [
      {
        topic: "React",
        mandatoryAssignments: [
          {
            id: 'w7m1q1',
            intro: "•	Use map() method of ES6,Apply arrow functions of ES6,Implement Destructuring features of ES6",
            fullQuestion: " Create a React Application named “cricketapp” with the following components.",
          },
          {
            id: 'w7m1q2',
            intro: "Use JSX syntax in React applications,	Use inline CSS in JSX.",
            fullQuestion: "Create a React Application named “officespacerentalapp” which uses React JSX to create elements, attributes and renders DOM to display the page..",
          },
        ],
        additionalAssignments: [
          {
            id: 'w7a1q1',
            intro: "Implement conditional rendering in React applications",
            fullQuestion: "Create a React App named “bloggerapp” in with 3 components.",
          },
        ],
      },
    ],
  },
  {
    week: 8,
    mandatoryNote: "Final week! Please ensure all mandatory assignments for Week 8 are completed without fail.",
    modules: [
      {
        topic: "GIT",
        mandatoryAssignments: [
          {
            id: 'w8m1q1',
            intro: "Familiar with Git commands like git init, git status, git add, git commit, git push, and git pull.",
            fullQuestion: "Familiar with Git commands like git init, git status, git add, git commit, git push, and git pull.",
          },
          {
            id: 'w8m1q2',
            intro: "•	Explain git ignore,Explain how to ignore unwanted files using git ignore",
            fullQuestion: "Implement git ignore command to ignore unwanted files and folders.",
          },
        ],
        additionalAssignments: [],
      },
    ],
  },
];

