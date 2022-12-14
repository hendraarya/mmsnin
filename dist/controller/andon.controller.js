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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getdataandonnewline110t2rt = exports.getdatandonline110t2rt = void 0;
const querybuilder_1 = require("../model/querybuilder");
const table = "public.line_110t_2rt";
const table_andonmms = "public.tm_andonsystem_machine";
const getdatandonline110t2rt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, querybuilder_1.QueryBuilderandon)(table)
        .select()
        .then((result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result) {
            return res.send({
                status: "Show Data Success !",
                data: result
            });
        }
    }))
        .catch((err) => {
        return res.status(500).send({
            message: err.message || "Some error occurred while retrieving data.",
        });
    });
});
exports.getdatandonline110t2rt = getdatandonline110t2rt;
const getdataandonnewline110t2rt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, querybuilder_1.QueryBuilderandonnew)(table_andonmms)
        .select()
        .orderBy('id_andon', 'ASC')
        .then((result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result) {
            return res.send({
                status: "Show Data Andon 110T 2RT Success !",
                data: result
            });
        }
    }))
        .catch((err) => {
        return res.status(500).send({
            message: err.message || "Some error occurred while retrieving data.",
        });
    });
});
exports.getdataandonnewline110t2rt = getdataandonnewline110t2rt;
