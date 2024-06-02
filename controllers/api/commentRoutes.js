const router = require('express').Router();
const { Comment } = require('../../models/');
const { apiGuard } = require('../../utils/authGuard');

router.post('/', apiGuard, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err)
    if (err instanceof SyntaxError) {
      res.status(400).json({ message: 'Bad request' });//Client Errors
    } else {
      res.status(500).json({ message: 'Server Error' });//Server Errors
    }
  }
});

module.exports = router;
