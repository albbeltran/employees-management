import { IStartOptions } from "./types";
// const IStartOptions = require('./types');

// const express = require('express');
import express, { Request, Response } from "express";
const cors = require('cors');

const app = express();

//* Middleware

// middleware to allow request from different origin
app.use(cors());

// middleware to read body, parse it and place results in req.body
app.use(express.json());             // for application/json
app.use(express.urlencoded());       // for application/x-www-form-urlencoded


export const startExpressServer = (
    options: IStartOptions
) => {
    const { port, host } = options;

    //* Routes

    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
    });

    app.post('/login', (req, res) => {
        console.log(req.body);
        res.send('Done');
    });

    //* Setup

    app.listen(port, host, () => {
        console.log(`⚡️ [server]: Server is running at http://${host}:${port}`);
    });

    return app;
};