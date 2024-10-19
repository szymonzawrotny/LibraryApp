import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from "mongodb";

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.listen(port, () => {
    console.log(`serwer nasłuchuje na porcie ${port}`)
})

const client = new MongoClient("mongodb://localhost:27017");
client.connect();
const db = client.db("libApp");
let movies = db.collection("movies");
let rents = db.collection("rents");
let users = db.collection("users")

app.get("/moviesApi", async (req, res) => {
    try {
        const result = await movies.find({}).toArray();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send("Błąd serwera");
    }
});

app.get("/rentsApi", async (req, res) => {
    try {
        const result = await rents.find({}).toArray();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send("Błąd serwera");
    }
});

app.get("/usersApi", async (req, res) => {
    try {
        const result = await users.find({}, { projection: { "password": 0 } }).toArray();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send("Błąd serwera");
    }
});

app.post("/reg", async (req, res) => {
    const { regEmail, regPassword } = req.body;

    console.log(regEmail, regPassword);

    try {
        const result = await users.insertOne({
            "email": regEmail,
            "password": regPassword
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Błąd serwera" });
    }

    res.status(200).json({ message: "działa" })
})