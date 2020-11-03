const router = require('express').Router();
const Series = require('../models/series').Series;
const Story = require('../models/series').Story;

// SERIES INDEX
router.get('/', (req, res) => {
  Series.find({}, (error, allSeries) => {
    res.render('series/index.ejs', {
      series: allSeries
      // ,currentUser: req.session.currentUser
    })
  })
})

// NEW SERIES FORM
router.get('/newseries', async (req, res) => {
  res.render('series/new.ejs');
});

// ADD EMPTY FORM TO SERIES SHOW PAGE TO ADD STORIES TO AS SERIES
router.get('/:seriesId', (req, res) => {
  // find serries in db by id and add new story
  Series.findById(req.params.seriesId, (error, series) => {
    res.render('series/show.ejs', { series });
  });
});

// SERIES SHOW
router.get('/:seriesId', async (req, res) => {
  // find series in db by id and add new story
  Series.findById(req.params.seriesId, async (error, series) => {
    res.render('series/show.ejs', { series });
  });

});
// STORY SHOW
router.get('/:seriesId/stories/:storyId', async (req, res) => {
  // find series in db by id and add new story
  Story.findById(req.params.storyId, async (error, story) => {
    res.render('series/story/show.ejs', { story });
  });

});

// CREATE A NEW SERIES
router.post('/', async (req, res) => {
  Series.create(req.body, (error, series) => {
    res.redirect(`/series/${series.id}`);
  });
});

// CREATE STORY EMBEDDED IN SERIES
router.post('/:seriesId/stories/', async (req, res) => {
  // store new story in memory with data from request body
  const newStory = await Story.create({ title: req.body.title , body: req.body.body });

  // find series in db by id and add new story
  Series.findById(req.params.seriesId, (error, series) => {
    series.stories.push(newStory);
    series.save((err, series) => {
      res.redirect(`/series/${series.id}`);
    });
  });
});

//DELETE SERIES
router.delete('/:seriesId', (req, res) => {
  Series.findByIdAndRemove(req.params.seriesId, (err, deletedSeries) => {
    res.redirect('/series')
  })
})

// UPDATE SERIES
router.put('/:seriesId', (req, res) => {
  Series.findByIdAndUpdate(req.params.seriesId, req.body, (error) => {
    res.redirect('/series/');
  });

})

// EDIT SERIES
router.get('/:seriesId/edit', (req, res) => {
  Series.findById(req.params.seriesId, (error, foundSeries) => {
    res.render('series/edit.ejs', {
      series: foundSeries
      // ,currentUser: req.session.currentUser
    })
  })
})

router.delete('/:seriesId/stories/:storyId', (req, res) => {
  // set the value of the series and story ids
  const seriesId = req.params.seriesId;
  const storyId = req.params.storyId;

  // find series in db by id
  Series.findById(seriesId, (err, foundSeries) => {
    // find story embedded in series
    foundSeries.stories.id(storyId).remove();
    // update story text and completed with data from request body
    foundSeries.save((err, savedSeries) => {
      res.redirect(`/series/${foundSeries.id}`);
    });
  });
});

module.exports = router;