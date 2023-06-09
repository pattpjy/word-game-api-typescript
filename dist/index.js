"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env = process.env.NODE_ENV || "development";
const knexfile_1 = __importDefault(require("./knexfile"));
const cors_1 = __importDefault(require("cors"));
const configOptions = knexfile_1.default[env];
const db = require("knex")(configOptions);
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3001;
app.use((0, cors_1.default)());
console.log(configOptions);
app.set("port", process.env.PORT || 3001);
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to the word game database⚡️"); //return a string with a welcome message
});
app.get("/api/v1/thai_words", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield db
            .select("*")
            .from("thai_words")
            .orderByRaw("RANDOM()")
            .limit(6);
        res.send(data);
    }
    catch (err) {
        console.log("Error", err);
        res.status(404).send(err);
    }
}));
//route for random words from selected category
app.get(`/api/v1/thai_words/random`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.query.category;
        const data = yield db
            .select("*")
            .from("thai_words")
            .where("categories", category)
            .orderByRaw("RANDOM()")
            .limit(6);
        res.send(data);
    }
    catch (err) {
        console.log("Error", err);
        res.status(404).send(err);
    }
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
