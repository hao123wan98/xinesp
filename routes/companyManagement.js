/**
 * Created by tiantian on 17/3/28.
 */

/**
 * 企业管理
 * */


var express = require('express');
var router = express.Router();

var companyManagement = require('../controllers/companyManagement');
var auth = require('../common/auth');

router.use(auth.authUser);

//   tab   三项
router.get('/', companyManagement.index);
router.get('/normal', companyManagement.showNormal);
router.get('/waitReview', companyManagement.showWaitReview);
router.get('/reviewFailed', companyManagement.showReviewFailed);

router.get('/newCompany', companyManagement.showNewCompany);

module.exports = router;
