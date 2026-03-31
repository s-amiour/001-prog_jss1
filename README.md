# Student CRUD Application

This repository serves as project work for the PROG_JSS1 course. This Express application is a CRUD API utilizing MongoDB as a DBMS.

```txt
Semester: S4
Course: Server Side JavaScript
Course Code: PROG_JSS1
```

## Exercise Branches

```txt
Phase 01: feat/01/json-read
Phase 02: feat/02/student-json-crud
Final Phase: feat/04/mvc-full-mongodb
```

## Goal

Construct an API (almost MVC but with .json as model) that the client can fetch and display. CRUD operations must also be present.

## Professor's Instructions

```txt
// NODEMON ✅

// send data to the exposed endpoints ✅
// import data from students.json and send it to the client when they hit the endpoint ✅
// use postman to send data to endpoints ✅

// GET - retrieve data 
// POST - create new data 
// PUT - update existing data
// DELETE - remove data
// CRUD - create, read, update, delete ✅

// SEND DATA vs SEND ERROR ✅
// STATUS CODES - 200, 201, 400,  ✅
// JSON - JavaScript Object Notation ✅
// res.json() - send JSON response ✅
// res.status() - set status code ✅
// res.send() - send response ✅

// TRY FRONTEND NOW before moving on
// go to FONT folder and open index.html in the browser, check console for errors, fix them, and see the data being displayed

// CORS - Cross-Origin Resource Sharing ✅
// npm i cors
// app.use(cors())

// REFACTORING
// 1. Create a separate file for routes (e.g., routes.js) ✅
// 2. Create a separate file for controllers (e.g., controllers.js) ✅
// 3. Change commonJs to ES6 modules (e.g., import/export) - this will require adding "type": "module" in package.json ✅

// push to github and share the link ✅
```
