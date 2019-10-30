import Logger from "../loaders/logger";
import mongooseLoader from "../loaders/mongoose";
import EnergyCategory from "../models/energyCategory";
import GESCategory from "../models/gesCategory";
import SellType from "../models/sellType";
import sellEnergyClass from "./fixtures/sell_energy.json";
import sellGazClass from "./fixtures/sell_gaz.json";
import sellTypes from "./fixtures/sell_type.json";

const importSellTypes = async () => {
    const types: any[] = sellTypes;
    for (const element of types) {
        const st = new SellType({title: element.title});
        try {
            await SellType.create(st);
        } catch (error) {
            Logger.info("Déjà importés.");
            break;
        }
    }
};

const importSellEnergy = async () => {
    const types: any[] = sellEnergyClass;
    for (const element of types) {
        const st = new EnergyCategory({title: element.title});
        try {
            await EnergyCategory.create(st);
        } catch (error) {
            Logger.info("Déjà importés.");
            break;
        }
    }
};

const importSellGaz = async () => {
    const types: any[] = sellGazClass;
    for (const element of types) {
        const st = new GESCategory({title: element.title});
        try {
            await GESCategory.create(st);
        } catch (error) {
            Logger.info("Déjà importés.");
            break;
        }
    }
};

const seed = async () => {
    Logger.info("Chargement de Mongo");
    await mongooseLoader();
    Logger.info("Ajout des types de biens");
    await importSellTypes();
    Logger.info("Ajout des classes énergetiques");
    await importSellEnergy();
    Logger.info("Ajout des classes GES");
    await importSellGaz();
    Logger.info("Terminé");
    // return;
    process.exit(0);
};

seed();
