# Project 2 - Chroniclix 

## Solving a Problem

**Problem:** I need a place to gain inspiration for and document my writing 

**General App Idea/Purpose:** This app allows user to create short stories that help with keeping a routine and growth in areas such as character development

**Who would use it:** Writers

### User Stories 

As a user, I should be able to create a series that holds a description of what the stories are about 

As a user, I should be able to add new short stories to a series 

As a user, I should be able to edit information about the series

As a user, I should be able to view a page with all of the series listed with their titles and genre

As a user, I should be able to delete a series

As a user, I should be able to delete individual stories from a series

As a user, I should be able to create a new account with a unique email and/or ID

As a user, I should be able to log into an account and find my series using a username/password combination

As a user, I should be able to only see series information and story titles if I am not logged in

As a user, I should only see full stories when I am logged in

## Chronoclix Terminology & Concepts

### Series vs Story

A series is an overall theme or plot. For example, a series could be a man travel to each of the fifty states for an introspective with his cat and dog. 

The stories within that series can be short stories about the visits to each state. One could be about his night on the town with his pets in Orlando and another while he’s in the mountains afraid of bears in the Rocky’s. 

## Models 

**Series Model**
- series name
- series creator 
- genre (referenced)
- stories (embedded)

**Story Model**
- story title
- story body

**User Model**
- user name
- password

## Wire Frame

![My MVP Wireframe Design](https://i.imgur.com/qK1uQWS.jpg)
![My MVP Wireframe Design](https://i.imgur.com/HHAmGlj.jpg)

## Technology Used

* Express
* EJS
* Node JS
* APIs


