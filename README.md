# Welcome to UseWalter Package Delivery System!

![Screen Shot 2021-02-04 at 9 48 47 AM](https://user-images.githubusercontent.com/17233773/106909484-5927aa80-66ce-11eb-813d-3a0ea933c5c9.png)

## About the project

#### Tech stack:

### Frontend (JSX and Typescript)

- **Next.js** for routing and server side rendering
- **React** (hooks) under the hood, Next.js is React.
- **Styled Components** for styling
- **Formik** to handle forms and validation
- **Apollo Client** to query the server
  
### Backend (Typescript)

- **Apollo Server** manages the server and integrates apollo as a middleware
- **Express** handles routes for testing
- **Prisma** SQL ORM running with Postgres
- **Nexus** generates the GraphQL schema

## CI/CD

- **Eslint + Prettier** to check code formatting and enforce styling rules.
- **Github actions** running on pull requests. These make sure the code that is being submitted passes the linting rules.


**You'll be up and running in no time!** 

But first, let's get you setup.

## Getting started

Clone this repository and install the dependencies using `yarn` 

Run the application with `yarn start` (note: this will install the dependencies for the frontend and backend, it might take a while when you do for the first time. Be patient 😊

Finally, when this is done you can run `yarn dev`

## Run the development environment

Run `yarn dev`

This command will run the frontend on `http://localhost:3000/` and the backend on `http://localhost:4000/`

Create a new resident
`http://localhost:4000/prisma`

This generates a new user and fills the profile. It looks like this:

```
      {
        "email": "edgardo_gibson95@hotmail.com",
        "name": "Kali Miller",
        "unit": 547,
        "telephone": "1-967-805-3115",
        "timeForNotif": "16:36"
      },
```



Create a new user (admin)
`http://localhost:4000/prisma?admin=true`

### Backend 

Our endpoints:

Graphql: `http://localhost:4000/graphql`

Express: `http://localhost:4000/`

If you want to modify the data model, you can find it at: `backend/prisma/schema.prisma`

Remember that every time you make a change you'll have to run `npx prisma migrate dev --preview-feature`


### GraphQL Queries

### Get Resident Directory
```
query {
  getResidentDirectory {
    email
    name
    unit
    telephone
  }
}

```

returns something like this: 

```
      {
        "email": "edgardo_gibson95@hotmail.com",
        "name": "Kali Miller",
        "unit": 547,
        "telephone": "1-967-805-3115"
      },
      {
        "email": "lambert_walker54@hotmail.com",
        "name": "Destiny Nikolaus",
        "unit": 404,
        "telephone": "1-935-611-7093"
      },
      {
        "email": "vicenta.larkin@yahoo.com",
        "name": "Enrique Hettinger",
        "unit": 432,
        "telephone": "377.347.1557"
      }
```

### Get All Packages

```
query {
  packages{
    id
    delivered
    description
    unit
  }
}
```
returns all the packages, example: 

```
 {
        "id": 4,
        "delivered": false,
        "description": "huge box",
        "unit": 102
      },
      {
        "id": 5,
        "delivered": false,
        "description": "test box",
        "unit": 102
      },
      {
        "id": 10,
        "delivered": false,
        "description": "amazon box",
        "unit": 220
      },
```





## Environment variables

Please note that you should replace the values on the file `
/.env`, these should point to your Postgres server

## CI/CD

If you would like to contribute to this project, make sure you run `yarn lint` before committing your code. When you submit your pull request, github will run an action that checks if your code is formatted properly.  


## What's next?

There are many thing I would love to add to the application to make it as powerful as possible. Unfortunately, the time I have is a bit limited. If you're interested, you can see the tasks on the issues panel.
