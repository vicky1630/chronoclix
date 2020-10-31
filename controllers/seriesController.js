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

// SHOW
router.get('/:seriesId', async (req, res) => {
  // find series in db by id and add new story
  Series.findById(req.params.seriesId, async (error, series) => {
    res.render('series/show.ejs', { series });
  });

});

// UPDATE
router.put('/:id', (req, res) => {
  Series.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: false },
    (error, updatedModel) => {
      res.redirect('/series')
    }
  )
})

// CREATE A NEW SERIES
router.post('/', async (req, res) => {
  Series.create(req.body, (error, series) => {
    res.redirect(`/series/${series.id}`);
  });
});

// EDIT
router.get('/:seriesId/edit', (req, res) => {
  Series.findById(req.params.id, (error, foundSeries) => {
    res.render('series/edit.ejs', {
      series: Series
      // ,currentUser: req.session.currentUser
    })
  })
})


//DELETE
router.delete('/:seriesId', (req, res) => {
  Series.findByIdAndRemove(req.params.seriesId, (err, deletedSeries) => {
    res.redirect('/series')
  })
})

module.exports = router;