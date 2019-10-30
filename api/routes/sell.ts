import { NextFunction, Request, Response, Router } from "express";
const route = Router();
import { celebrate, Joi } from "celebrate";
import Sell from "../../models/sell";
import { SellService } from "../../services/sell";

const celebrateValidation = celebrate({
    body: Joi.object({
        description: Joi.string().allow(""),
        energy: Joi.string().required(),
        ges: Joi.string().required(),
        title: Joi.string().allow(""),
        type: Joi.string().required(),
    }),
});

export default (app: Router) => {

    const sellService = new SellService();

    app.post("/sells", celebrateValidation, async (req: Request, res: Response, next: NextFunction) => {
        try {
            const sell = new Sell(req.body);
            const savedSell = await sellService.createSell(sell);
            return res.status(200).json(savedSell);
        } catch (error) {
            next(error);
        }
    });

    app.get("/sells", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const sells = await sellService.getAll();
            return res.status(200).json(sells);
        } catch (error) {
            next(error);
        }
    });

    app.get("/sells/:id", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const sell = await sellService.get(req.params.id);
            return res.status(200).json(sell);
        } catch (error) {
            next(error);
        }
    });

    app.put("/sells/:id", celebrateValidation, async (req: Request, res: Response, next: NextFunction) => {
        try {
            const updatedSell = await sellService.update(req.body, req.params.id);
            return res.status(200).json(updatedSell);
        } catch (error) {
            next(error);
        }
    });

    app.delete("/sells/:id", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const updatedSell = await sellService.delete(req.params.id);
            return res.status(200).json(updatedSell);
        } catch (error) {
            next(error);
        }
    });

    app.post("/sells/promote/:id", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const promotedSell = await sellService.promote(req.params.id);
            return res.status(200).json(promotedSell);
        } catch (error) {
            next(error);
        }
    });

    app.post("/sells/promote/:id", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const promotedSell = await sellService.promote(req.params.id);
            return res.status(200).json(promotedSell);
        } catch (error) {
            next(error);
        }
    });
};
