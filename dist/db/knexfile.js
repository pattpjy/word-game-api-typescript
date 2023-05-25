"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// Update with your config settings.
exports.config = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./dev.sqlite3",
        },
        seeds: { directory: "./seeds" },
        useNullAsDefault: true,
        debug: true,
    },
    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
