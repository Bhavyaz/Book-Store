import express from "express";
import mysql from "mysql2";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();

// Database connection configuration
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "chaitu",
    database: "test"
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

// Enable CORS for all routes
app.use(cors());

// Enable JSON body parsing middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = './uploads/';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.json("hello this is the backend!");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/books", upload.single('cover'), (req, res) => {
    const q = "INSERT INTO books (`title`, `description`, `price`, `cover`) VALUES (?,?,?,?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.file ? `/uploads/${req.file.filename}` : ''
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been created successfully");
    });
});

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully");
    });
});

app.put("/books/:id", upload.single('cover'), (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`=?, `description`=?, `price`=?, `cover`=? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.file ? `/uploads/${req.file.filename}` : req.body.cover
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book has been updated successfully");
    });
});

app.listen(8800, () => {
    console.log("Connected to backend!");
});
