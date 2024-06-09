import { Request, Response } from 'express';
import * as DB from '../MockDB';


export function getRatingsById(req: Request, res: Response) {
    try {
        console.log(req.params);
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        const rating = DB.ratedConstructors.find((rating) => rating.ratingId === id);
        if (!rating) {
            return res.status(404).json({ error: 'Rating not found' });
        }
        return res.status(200).json(rating);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred' });
    }
}

export function getWIPProjectsByConstructor(req: Request, res: Response) {
    try {
        const constID = parseInt(req.params.id);
        const projects = DB.projectList.filter((project) => project.constructorId === constID);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
}

export function getProfileById(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
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

export function updateProfileById(req: Request, res: Response) {
    try {
        const constructorId = req.body.constructorId;
        if (isNaN(constructorId)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        const constructor = DB.constructorProfileList.find((constructor) => constructor.constructorId === constructorId);
        if (!constructor) {
            return res.status(404).json({ error: 'Constructor not found' });
        }

        const { name, location, logo } = req.body;
        if (name) {
            constructor.name = name;
        }
        if (location) {
            constructor.location = location;
        }
        if (logo) {
            constructor.logo = logo;
        }

        return res.status(200).json(constructor);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred' });
    }
}

export function getBidsById(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }
        const bids = DB.bidsList.filter((bid) => bid.entrepreneurId === id);
        res.status(200).json(bids);
    } catch (error) {
        res.status(500).json(error);
    }
}

export function sendBidByProjId(req: Request, res: Response) {
    try {
        DB.bidsList.push({ ...req.body, id: DB.bidsList.length + 1 });
        console.log(DB.bidsList);
        res.status(200).json();
        console.log(DB.bidsList);
        
    } catch (error) {
        res.status(500).json(error);
    }
}