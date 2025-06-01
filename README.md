# Spillthetea

<Spill The Tea>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

Spill The Tea is a social network API designed to allow users to share their thoughts, react to others' thoughts, and build a network of friends. Built using **Express.js**, **MongoDB**, and **Mongoose**, this application provides a backend system that supports robust CRUD operations for users and their content. It has many usages among them would be to; to practice building scalable RESTful APIs using Node.js and MongoDB. In additation to simulate the backend of a social networking platform where users can engage in short-form discussions. Demonstrates data relationships in MongoDB using references and subdocuments, and handles complex data interactions such as nested reactions and user friend lists. Gained experience with Express routing, MongoDB document modeling with Mongoose, and creating API endpoints for nested resources.

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

Follow the steps below to install and run the development environment:

1. Clone the repository:
   ```bash
   git clone https://github.com/Josie3fl/Spillthetea.git
   cd spill-the-tea

2. You would then:
   npm install

3. Then:
   npm run dev (since this app has not been deployed)

## Usage

Provide instructions and examples for use. Include screenshots as needed.    ```

Once the server is running on http://localhost:3001, you can use tools like Insomnia or Postman to test the API endpoints:

API Routes
Users
GET /api/users - Get all users

GET /api/users/:userId - Get a single user by ID

POST /api/users - Create a new user

PUT /api/users/:userId - Update a user

DELETE /api/users/:userId - Delete a user

POST /api/users/:userId/friends/:friendId - Add a friend

DELETE /api/users/:userId/friends/:friendId - Remove a friend

Thoughts
GET /api/thoughts - Get all thoughts

GET /api/thoughts/:thoughtId - Get a single thought

POST /api/thoughts - Create a thought

PUT /api/thoughts/:thoughtId - Update a thought

DELETE /api/thoughts/:thoughtId - Delete a thought

Reactions (Nested in Thoughts)
POST /api/thoughts/:thoughtId/reactions - Add a reaction

DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction


## Credits

Created by Josie Borges Padro 

Resources used:

Mongoose Documentation

Express.js Documentation

MongoDB Docs

Thanks to Chat GPT for many clarifications and Copilot programs fro the clean up

Video Link:

https://youtu.be/kGYu9lLPRk0