import { Response, Request } from "express";
import { QueryBuilderandon, QueryBuilderandonnew } from "../model/querybuilder";

const table: string = "public.line_110t_2rt";
const table_andonmms: string = "public.tm_andonsystem_machine";

export const getdatandonline110t2rt = async (req: Request, res: Response) => {

    await QueryBuilderandon(table)
        .select()
        .then(async (result: any) => {
            if (result) {
                return res.send({
                    status: "Show Data Success !",
                    data: result
                })
            }
        })
        .catch((err: any) => {
            return res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data.",
            });
        })
}

export const getdataandonnewline110t2rt = async (req: Request, res: Response) => {
    await QueryBuilderandonnew(table_andonmms)
        .select()
        .orderBy('id_andon', 'ASC')
        .then(async (result: any) => {
            if (result) {
                return res.send({
                    status: "Show Data Andon 110T 2RT Success !",
                    data: result
                })
            }
        })
        .catch((err: any) => {
            return res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data.",
            });
        })
}
