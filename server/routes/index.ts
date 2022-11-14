/**************************************************************************************** *
 * ******************************                    ************************************ *
 * ******************************   ALL APP ROUTES   ************************************ *
 * ******************************                    ************************************ *
 * ************************************************************************************** */

   import { Request, Response, Router } from 'express';
   import incomeRoute from './income.routes'
   
   const router = Router();
   
   /** GET /health-check - Check service health */
   router.get('/health-check', (_req: Request, res: Response) => 
   res.send({ check: 'Okra income app server started ok' })
   );

   // mount income routes
   router.use('/income', incomeRoute);
   
   export default router;
   