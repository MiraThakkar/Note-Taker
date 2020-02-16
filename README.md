# Note-Taker
# Unit 11 Express Homework: Note Taker

## Description

. This application will use an express backend and save and retrieve note data from a JSON file.


* The following HTML routes are created:

  * GET `/notes` - returns the `notes.html` file.

  * GET `*` -  returns the `index.html` file

* The application has a `db.json` file on the backend that is used to store and retrieve notes using the `jsonFile` module.

* The following API routes are created:

  * GET `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` - recieves a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - recieves a query paramter containing the id of a note to delete. It gives each note a unique `id` when it's saved. In order to delete a note, it reads all notes from the `db.json` file, removes the note with the given `id` property, and then rewrites the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application allows users to create and save notes.

Application allows users to view previously saved notes.

Application allows users to delete previously saved notes.

- - -


## Submission on BCS

You are required to submit the following:

* The URL of the deployed application

* The URL of the GitHub repository

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
