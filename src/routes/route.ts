import express, { Express, Router, Response, Request } from "express";
import * as andonsystem from "../controller/andon.controller.js";


export const route: Express = express();
const router = Router();

route.use("/api/", router);
route.use((req: Request, res: Response) => {
    res.status(404).send({
        status: "error",
        message: "Route not Found!",
    });
});

router.get("/getandondata", andonsystem.getdatandonline110t2rt);

//Start Get Data Andon System Productoon 3 Line 110T 2RT
router.get("/getandondataline110t2rt", andonsystem.getdataandonnewline110t2rt);
//End Get Data Andon System Productoon 3 Line 110T 2RT