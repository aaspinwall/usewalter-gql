# Welcome to UseWalter Package Delivery System!

![Screen Shot 2021-02-04 at 9 48 47 AM](https://user-images.githubusercontent.com/17233773/106909484-5927aa80-66ce-11eb-813d-3a0ea933c5c9.png)

**You'll be up and running in no time!**

But first, let's get you setup.

## Getting started

Clone this repository and install the dependencies using `yarn`

Run the application with `yarn start` (note: this will install the dependencies for the frontend and backend, it might take a while when you do for the first time. Be patient 😊

Finally, when this is done you can run `yarn dev`

## Run the development environment

Run `yarn dev`

This command will run the frontend on `http://localhost:3000/` and the backend on `http://localhost:4000/`

Create a new user (only not admin)
`http://localhost:4000/prisma`

Create a new user (admin)
`http://localhost:4000/prisma?admin=true`

### Backend

Graphql: `http://localhost:4000/graphql`
Express: `http://localhost:4000/`

If you want to modify the data model, you can find it at: `backend/prisma/schema.prisma`

Remember that every time you make a change you'll have to run `npx prisma migrate dev --preview-feature`

## GraphQL

`
query {
getResidentDirectory {
email
name
unit
telephone
}
}

`

## Environment variables

Please note that you should replace the values on the file `backend/.env`, these should point to your server
