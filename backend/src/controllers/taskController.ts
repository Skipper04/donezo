import { Request, Response } from "express";

export const getAllTasks = (req: Request, res: Response) => {
    res.json({title: "Hello World"});
};
