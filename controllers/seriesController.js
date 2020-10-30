const router = require('express').Router();
const Series = require('../models/series').Series;
const Story = require('../models/series').Story;

// NEW SERIES FORM
router.get('/newseries', async (req, res) => {
  res.render('series/new.ejs');
});

// NEW STORY FORM
// router.get('/newstory', async (req, res) => {
//   res.render('series/story/new.ejs');
// });

// ADD EMPTY FORM TO SERIES SHOW PAGE TO ADD STORIES TO AN SERIES
router.get('/:seriesId', async (req, res) => {
  // find series in db by id and add new story
  Series.findById(req.params.seriesId, async (error, series) => {
    res.render('series/show.ejs', { series });
  });

});


// CREATE A NEW SERIES
router.post('/', async (req, res) => {
  Series.create(req.body, (error, series) => {
    res.redirect(`/series/${series.id}`);
  });
});


module.exports = router;