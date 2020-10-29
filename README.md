# Project 2 - Chroniclix 

## Solving a Problem

**Problem:** I need a place to gain inspiration for and document my writing 

**General App Idea/Purpose:** This app allows user to create short stories that help with keeping a routine and growth in areas such as character development

**Who would use it:** Writers

## 10 User Stories - MVP

As a user, I should be able to create a series that holds a description of what the stories are about 

As a user, I should be able to add new short stories to a series 

As a user, I should be able to edit a title and body of a story 

As a user, I should be able to edit information about the series

As a user, I should be able to like/upvote a series/individual stories

As a user, I should be able to view other authors’ series and stories

As a user, I should be able to add multiple genres to a series

As a user, I should be able to input/see the author info 

As a user, I should be able to delete a series

As a user, I should be able to delete individual stories from a series

## Stretch Goals

As a user, I should get a confirmation before permanently deleting a series or story

As a user, I should be able to create a new account with a unique email and/or ID

As a user, I should be able to log into an account and find my series using a username/password combination 

As a user, I should be able to manage multiple series 

As a user, I should be able to make a series private (only I can add stories) or public (anyone can add a story) 

As a user, my upvote/like only counts once 

As a user, I should be able to add character profiles for the characters featured in the series 

As a user, I should be able to only see series information and story titles if I am not logged in

As a user, I should only see full stories when I am logged in

## Chronoclix Terminology & Concepts

### Series vs Story

A series is an overall theme or plot. For example, a series could be a man travel to each of the fifty states for an introspective with his cat and dog. 

The stories within that series can be short stories about the visits to each state. One could be about his night on the town with his pets in Orlando and another while he’s in the mountains afraid of bears in the Rocky’s. 

### Character Info - Stretch Goal

Authors can use the character info sheets to add information for their characters featured in the series. Since the stories are aimed to be short stories, authors can use this to add additional depth to their characters. 

## Models 

#### MVP Models

**Series Model**
- series name
- series creator 
- genre (referenced)
- stories (embedded)

**Story Model**
- story title
- story body

**Genre model??**
- genre 

#### Stretch Models

**User Model**
- user name
- Series (embedded)??

**Character Model**
- name
- age
- ethnicity
- occupation
- background

## Wire Frame

### MVP

![My MVP Wireframe Design](https://i.imgur.com/qK1uQWS.jpg)
![My MVP Wireframe Design](https://i.imgur.com/HHAmGlj.jpg)



