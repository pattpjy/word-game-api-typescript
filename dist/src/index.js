"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
<<<<<<< HEAD:dist/src/index.js
const env = process.env.NODE_ENV || "development";
const knexfile_1 = require("../db/knexfile");
const configOptions = knexfile_1.config[env];
const db = require("knex")(configOptions);
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3001;
console.log(configOptions);
app.set("port", process.env.PORT || 3001);
app.use(express_1.default.json());
=======
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
>>>>>>> parent of 6574e50 (Add ts-node and clean up unuse file):dist/index.js
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server is running ⚡️");
});
<<<<<<< HEAD:dist/src/index.js
app.get("/api/v1/thai_words", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield db.select("*").from("thai_words");
        res.send(data);
    }
    catch (err) {
        console.log("Error", err);
        res.status(404).send(err);
    }
}));
=======
>>>>>>> parent of 6574e50 (Add ts-node and clean up unuse file):dist/index.js
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
