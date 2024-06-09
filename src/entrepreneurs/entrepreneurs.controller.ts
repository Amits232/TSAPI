import { Request, Response } from 'express';
import * as DB from '../MockDB';


export function getAllConstructors(req: Request, res: Response) {
    try {
        res.status(200).json(DB.ConstructorList);
    } catch (error) {
        res.status(500).json(error);
    }
}

export function getConstructorById(req: Request, res: Response) {
    console.log('Request Parameters:', req.params);

    try {
        const id = parseInt(req.params.id);
        console.log(`Requested ID: ${id}`);

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        const constructor = DB.ConstructorList.find((constructor) => constructor.id === id);

        if (!constructor) {
            return res.status(404).json({ error: 'Constructor not found' });
        }

        return res.status(200).json(constructor);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred' });
    }
}

export function rateConstructor(req: Request, res: Response) {
    try {
        const ratingId = parseInt(req.body.ratingId);
        const constID = parseInt(req.body.constId);
        const entreID = parseInt(req.body.entreID);
        const ratingValue = parseInt(req.body.ratingValue);
        DB.ratedConstructors.push({ ratingId, constID, entreID, ratingValue });
        console.log(DB.ratedConstructors);
        res.status(200).json();
    } catch (error) {
        res.status(500).json(error);
    }
}

export function getProjectsByEntrepaneur(req: Request, res: Response) {
    try {
        const enreID = parseInt(req.params.id);
        const projects = DB.projectList.filter((project) => project.entrepreneurId === enreID);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
}

export function getBidByEntrepaneur(req: Request, res: Response) {
    try {
        const enreID = parseInt(req.params.id);
        const bids = DB.bidsList.filter((bid) => bid.entrepreneurId === enreID);
        res.status(200).json(bids);
    } catch (error) {
        res.status(500).json(error);
    }
}