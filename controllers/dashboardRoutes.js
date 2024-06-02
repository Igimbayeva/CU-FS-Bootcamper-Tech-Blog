const router = require('express').Router();
const { Post } = require('../models');
const { withGuard } = require('../utils/authGuard');

router.get('/', withGuard, async (req, res) => {
  if (!req.session.user_id) {
    return res.status(401).json({ message: 'You must be logged in to view this page' });
  }

  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      dashboard: true,
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.error('Error fetching dashboard data:', err);
    res.status(500).json(err);
  }
});

router.get('/new', withGuard, (req, res) => {
  res.render('newPost', {
    dashboard: true,
    loggedIn: req.session.logged_in,
  });
});

router.get('/edit/:id', withGuard, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('editPost', {
        dashboard: true,
        post,
        loggedIn: req.session.logged_in,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error('Error fetching post for editing:', err);
    res.status(500).json(err);
  }
});

module.exports = router;
