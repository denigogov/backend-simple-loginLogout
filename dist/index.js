"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// ...
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
let login = false;
app.get("/", (req, res) => {
    res.send(login ? "I'm login" : "I'm logout");
});
app.post("/logout", (req, res) => {
    res.send(login);
});
app.post("/login", (req, res) => {
    login = true;
    res.send(login);
});
app.listen(port, () => {
    console.log(`⚡️ Server is running at http://localhost:${port} `);
});