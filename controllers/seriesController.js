const router = require('express').Router();
const Series = require('../models/series').Series;
const Story = require('../models/series').Story;

// INDEX
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

// NEW STORY FORM
router.get('/newstory', async (req, res) => {
  res.render('series/story/new.ejs');
});

// SHOW
router.get('/:seriesId', async (req, res) => {
  // find series in db by id and add new story
  Series.findById(req.params.seriesId, async (error, series) => {
    res.render('series/show.ejs', { series });
  });

});

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

// router.post('/', async (req, res) => {
//   Story.create(req.body, (error, story) => {
//     res.redirect(`/series/${story.id}`);
//   });
// });

router.post('/:seriesId/stories', (req, res) => {
  console.log(req.body);
  // store new song in memory with data from request body
  const newStory = new Story({ songText: req.body.songText });

  // find album in db by id and add new song
  Series.findById(req.params.seriesId, (error, story) => {
    story.stories.push(newStory);
    story.save((err, story) => {
      res.redirect(`/:seriesId/stories/${story.id}`);
    });
  });
});

//DELETE
router.delete('/:seriesId', (req, res) => {
  Series.findByIdAndRemove(req.params.seriesId, (err, deletedSeries) => {
    res.redirect('/series')
  })
})

// UPDATE
router.put('/:seriesId', (req, res) => {

    res.send ("working")

})

// EDIT
router.get('/:seriesId/edit', (req, res) => {
  Series.findById(req.params.seriesId, (error, foundSeries) => {
    res.render('series/edit.ejs', {
      series: foundSeries
      // ,currentUser: req.session.currentUser
    })
  })
})

module.exports = router;