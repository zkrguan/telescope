const { Router } = require('@senecacdot/satellite');
const { validateQuery } = require('../bin/validation');
const search = require('../search');

const router = Router();

router.get('/', validateQuery, async (req, res) => {
  try {
    const { text, filter, page, perPage } = req.query;
    res.send(await search(text, filter, page, perPage));
  } catch (error) {
    next(err);
  }
});

module.exports = router;
