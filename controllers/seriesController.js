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
  // find serries in db by id and add new song
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
router.post('/', (req, res) => {
  // store new song in memory with data from request body
  const newStory = new Story({ title: req.body.title }, { storyText: req.body.storyText });

  // find album in db by id and add new story
  Series.findById(req.params.seriesId, (error, series) => {
    series.stories.push(newStory);
    series.save((err, series) => {
      res.redirect("/series/");
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

module.exports = router;