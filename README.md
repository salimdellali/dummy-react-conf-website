# Dummy React Conf Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/05ad2da4-24f1-4c55-ba79-8d5a1d86b277/deploy-status)](https://app.netlify.com/sites/dummy-react-conf-website/deploys)

[![badge](https://img.shields.io/static/v1?logo=react&logoColor=61DAFB&message=Built%20With%20React&label=%20&color=gray&style=flat-square)](https://reactjs.org)

[![badge](https://img.shields.io/static/v1?label=Visit%20Website&message=Here&color=61DAFB&style=flat-square)](https://dummy-react-conf-website.netlify.app)

My first ever React project, it is a part of my React learning path, and is acctually an idea I got from the **50 Projects for React and the Static Web Colby Fayock 1.0** eBook.

I know that the design is too basic, and I'll be improving it overtime.

Also there is not that much functionalities, so I'll be adding some in the future.

---

## Frontend

- Visitors are able to visit the website, and get the conference's information like :
    - Speakers
    - Sessions
    - Food options
    - Code of Conduct
    - Registered people to the conference ( See all the attendees )

- Visitors can register to attend the conference by filling the form, after that their image and name will be shown in the "Attendees" Page

- Website structure :
    - /
        - Home
        - Schedule
        - Location
        - Food
        - Code of conduct
        - Attendees

---

## Backend

For what it comes to the content management of this website, a separate back-end will be created to handle :

- Authentification to a backend CMS, in order to manage :

    - Speakers : 
        - List speakers and their respective information
        - Add a new speaker
        - Edit speaker's information
        - Delete speaker

    - Sessions :
        - List sessions and their respective information 
        - Add a new session
        - Edit session's information
        - Delete session
        - Assign speakers to sessions

    - Attendees :
        - List attendees and their respective information

---

## Technologies used so far :

- Reactjs (via create-react-app) : as the main framework of development
- React Router (with react-router-dom) : for the routes inside the website
- React Bootstrap (with react-bootstrap) : for the whole design
- randomuser.me API : for dummy information