"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilderandonnew = exports.QueryBuilderandon = exports.queryCustomPgsql = void 0;
const db_1 = require("./db");
const knex_1 = __importDefault(require("knex"));
const db_config_1 = require("../config/db.config");
// Start if use Query Basic
const queryCustomPgsql = (customQuery, param, switchquery, result) => {
    if (switchquery == 'dbandon') {
        db_1.pool.query(customQuery, param, (err, res) => {
            if (err) {
                console.log("error:", err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }
    else if (switchquery == 'dbandonnew') {
        db_1.andonnew.query(customQuery, param, (err, res) => {
            if (err) {
                console.log("error:", err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }
};
exports.queryCustomPgsql = queryCustomPgsql;
// End if use Query Basic
// Start if use QueryBuilder
exports.QueryBuilderandon = (0, knex_1.default)({
    client: "pg",
    connection: {
        host: db_config_1.development_andon.host,
        port: db_config_1.development_andon.port,
        user: db_config_1.development_andon.username,
        password: db_config_1.development_andon.password,
        database: db_config_1.development_andon.database,
    },
});
exports.QueryBuilderandonnew = (0, knex_1.default)({
    client: "pg",
    connection: {
        host: db_config_1.development_andonnew.host,
        port: db_config_1.development_andonnew.port,
        user: db_config_1.development_andonnew.username,
        password: db_config_1.development_andonnew.password,
        database: db_config_1.development_andonnew.database,
    },
});
// End if use QueryBuilder
