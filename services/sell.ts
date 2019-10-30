import { ErrorHandler } from "../helpers/error";
import EnergyCategory from "../models/energyCategory";
import GESCategory from "../models/gesCategory";
import Sell from "../models/sell";
import SellType from "../models/sellType";

export class SellService {

    private populateQuery: any[];

    constructor() {
        this.populateQuery = [
            { path: "energy", select: "title", model: EnergyCategory },
            { path: "ges", select: "title", model: GESCategory },
            { path: "type", select: "title", model: SellType },
        ];
    }

    public async getAll() {
        const conditions = {
            active: true,
        };
        try {
            const sells = await Sell.find(conditions).populate(this.populateQuery);
            if (!sells) { throw new ErrorHandler(404, "NO_EXISTING_SELL"); }
            return sells;
        } catch (error) {
            throw error;
        }
    }

    public async get(sellId: string) {
        const conditions = {
            _id: sellId,
            active: true,
        };
        try {
            const sell = await Sell.findOne(conditions).populate(this.populateQuery);
            if (!sell) { throw new ErrorHandler(404, "NO_EXISTING_SELL"); }
            return sell;
        } catch (error) {
            throw error;
        }
    }

    public async createSell(sell: any) {
        try {
            const mongoSell = await Sell.create(sell);
            return mongoSell;
        } catch (error) {
            throw error;
        }
    }

    public async update(sell: any, sellId: string) {
        const conditions = {
            _id: sellId,
            active: true,
        };
        try {
            const sellToUpdate = await Sell.findOneAndUpdate(conditions, sell, { new: true });
            if (!sellToUpdate) { throw new ErrorHandler(404, "NO_EXISTING_SELL"); }
            return sellToUpdate;
        } catch (error) {
            throw error;
        }
    }

    public async delete(sellId: string) {
        const conditions = {
            _id: sellId,
            active: true,
        };
        const toChange = {
            active: false,
        };
        try {
            const sellToUpdate = await Sell.findOneAndUpdate(conditions, toChange, { new: true });
            if (!sellToUpdate) { throw new ErrorHandler(404, "NO_EXISTING_SELL"); }
            return sellToUpdate;
        } catch (error) {
            throw error;
        }
    }

    public async promote(sellId) {
        const conditions = {
            _id: sellId,
            active: true,
        };

        const expireOnDate =  new Date();
        expireOnDate.setMonth(expireOnDate.getMonth() + 1);

        const toChange = {
            promotedUntil: expireOnDate,
        };
        try {
            const sellToUpdate = await Sell.findOneAndUpdate(conditions, toChange, { new: true });
            if (!sellToUpdate) { throw new ErrorHandler(404, "NO_EXISTING_SELL"); }
            return sellToUpdate;
        } catch (error) {
            throw error;
        }
    }
}
