import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (_req: Request, res: Response<{ message: string }>) => {
    res.send({ message: "Hello World" });
});

export default router;
