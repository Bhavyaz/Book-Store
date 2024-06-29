# Book Store

This project is a full-stack web application for a Book Store, built using the  Express, React, Node.js and MySQL

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Description

The Book Store MERN application allows users to view, add, update, and delete books. Each book has a title, description, price, and cover image.

## Features

- View a list of books
- Add a new book
- Update an existing book
- Delete a book

## Installation

To run this project locally, follow these steps:

### Clone the Repository

```sh
git clone https://github.com/Bhavyaz/Book-Store-MERN.git
cd Book-Store-MERN
```

## Install Dependencies

### Backend

Navigate to the backend directory and install the dependencies.

```sh
cd backend
npm install
```

### Frontend
Navigate to the client directory and install the dependencies.

```sh
cd ../client
npm install
```

## Start the Development Servers
### Backend
In the backend directory, start the server.

```sh
npm start
```

### Frontend
In the client directory, start the React development server.

```sh
npm start
```
## Usage
- Navigate to http://localhost:3000 to view the application.
- Use the interface to add, update, or delete books.

# Book Management System

## API Endpoints

### Backend

| Method | Endpoint    | Description            |
|--------|-------------|------------------------|
| GET    | /books      | Get all books          |
| POST   | /books      | Add a new book         |
| PUT    | /books/:id  | Update a book by ID    |
| DELETE | /books/:id  | Delete a book by ID    |

## Screenshots

### Home Page
![Home Page](Images/Home%20Page.png)

### Add New Book
![Add New Book](Images/Add%20New%20Book.png)

### Update Book
![Update Book](Images/Update%20Book.png)

## Technologies Used

- Express
- React
- Node.js
- Axios
- Multer
- SQL

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

