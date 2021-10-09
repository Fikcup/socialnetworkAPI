const router = require('express').Router();
const apiRoutes = require('./api');

// all api calls run in /api
router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Wrong route!')
});

module.exports = router;