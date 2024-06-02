const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const { withGuard, withoutGuard } = require('../utils/authGuard');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('home', { posts, loggedIn: req.session.logged_in });
  } catch (err) {
    console.error('Error fetching home data:', err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: 'Post ID is required' });
  }

  try {
    const postData = await Post.findByPk(id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('post', { post, loggedIn: req.session.logged_in });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error(`Error fetching post with id ${id}:`, err);
    res.status(500).json(err);
  }
});

router.get('/login', withoutGuard, (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.error('Error rendering login page:', err);
    res.status(500).json(err);
  }
});

router.get('/signup', withoutGuard, (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.error('Error rendering signup page:', err);
    res.status(500).json(err);
  }
});

module.exports = router;
