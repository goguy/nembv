const router = require('express').Router();

const test = require('./test');
router.use('/test', test);

router.all('*', (req, res) => {
    res.status(404).send({ success: false, msg: `unknown uri ${req.path}` });
});
  

module.exports = router;