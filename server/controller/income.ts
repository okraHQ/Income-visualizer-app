import * as dotenv from 'dotenv'
import axios from "axios";
import { Request, Response, NextFunction } from 'express';
import { ResponseInterface } from "../typings/helpers";
import { BASEURL } from "../config/index"
dotenv.config()

let key = process.env.PRODUCTION_KEY
let baseUrl = process.env.BASEURL

export default class Income {

    /**
         * Route: POST: /process-income
         * @async
         * @function check
         * @description process the income data of a user
         * @param {object} req - HTTP Request object
         * @param {object} res - HTTP Response object
         * @returns {Promise<ResponseInterface | void>} {Promise<ResponseInterface | void>}
         * @memberof AuthController
         */

    static async processIncome (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<ResponseInterface | void> {
        const { customer_id, version } = req.body

        try {
            const options: any = {
                url: `${baseUrl}/process`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${key}`,
                    'User-Agent': 'axios/0.26.1',
                    'content-type': 'application/json;charset=UTF-8'
                },
                data: {
                    customer_id,
                    version
                }
            };
            const response = await axios(options);
            if (response) {
                return res.status(200).json(response.data)
            }
        } catch (err) {
            res.status(400).json({ message: err })
        }
    }
    /**
         * Route: POST: /get-by-customer
         * @async
         * @function check
         * @description check a users income using the customer id
         * @param {object} req - HTTP Request object
         * @param {object} res - HTTP Response object
         * @returns {Promise<ResponseInterface | void>} {Promise<ResponseInterface | void>}
         * @memberof AuthController
         */

    static async byCustomer (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<ResponseInterface | void> {
        const { customer, version } = req.body

        try {
            const options: any = {
                url: `${baseUrl}/getByCustomer`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${key}`,
                    'User-Agent': 'axios/0.26.1',
                    'content-type': 'application/json;charset=UTF-8'
                },
                data: {
                    customer,
                    version
                }
            };
            const response = await axios(options);
            if (response) {
                return res.status(200).json(response.data)
            }
        } catch (err) {
            res.status(400).json({ message: err })
        }
    }

    /**
         * Route: POST: /get-by-record
         * @async
         * @function check
         * @description check a users income using the record id
         * @param {object} req - HTTP Request object
         * @param {object} res - HTTP Response object
         * @returns {Promise<ResponseInterface | void>} {Promise<ResponseInterface | void>}
         * @memberof AuthController
         */

    static async byRecord (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<ResponseInterface | void> {
        const { record, version } = req.body

        try {
            const options: any = {
                url: `${baseUrl}/getByRecord`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${key}`,
                    'User-Agent': 'axios/0.26.1',
                    'content-type': 'application/json;charset=UTF-8'
                },
                data: {
                    record,
                    version
                }
            };
            const response = await axios(options);
            if (response) {
                return res.status(200).json(response.data)
            }
        } catch (err) {
            res.status(400).json({ message: err })
        }
    }

    /**
         * Route: POST: /get-by-id
         * @async
         * @function check
         * @description check a users income using the income id
         * @param {object} req - HTTP Request object
         * @param {object} res - HTTP Response object
         * @returns {Promise<ResponseInterface | void>} {Promise<ResponseInterface | void>}
         * @memberof AuthController
         */

    static async byId (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<ResponseInterface | void> {
        const { id, version } = req.body

        try {
            const options: any = {
                url: `${baseUrl}/getById`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${key}`,
                    'User-Agent': 'axios/0.26.1',
                    'content-type': 'application/json;charset=UTF-8'
                },
                data: {
                    id,
                    version
                }
            };
            const response = await axios(options);
            if (response) {
                return res.status(200).json(response.data)
            }
        } catch (err) {
            res.status(400).json({ message: err })
        }
    }


}
