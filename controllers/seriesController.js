const router = require("express").Router();
const Series = require("../models/series").Series
const Story = require("../models/series").Story

router.get('/', (req, res) => {
    res.render("series/index.ejs")
  });

  router.get('/new', async (req, res) => {
    res.render('series/new.ejs');
  });

  router.post('/', async (req, res) => {
    console.log(req.body);
    let series = await Series.create(req.body);
    //res.send("worked")
    res.redirect(`/series/${series.id}`);
});

module.exports = router;