import { Router } from 'express';
import incomeCtrl from '../controller/income';

const router = Router();

router
.route('/process-income')
.post(
    incomeCtrl.processIncome
);


router
.route('/get-by-customer')
.post(
    incomeCtrl.byCustomer
);

router
.route('/get-by-record')
.post(
    incomeCtrl.byRecord
);

router
.route('/get-by-id')
.post(
    incomeCtrl.byId
);

export default router;