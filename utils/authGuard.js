const withGuard = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login'); // Redirect to login page if not logged in
  } else {
    next();
  }
};

const apiGuard = (req, res, next) => {
  if (!req.session.logged_in) {
    return res.status(403).json({ msg: 'Unauthorized: login to perform this action' });
  }
  next();
};

const withoutGuard = (req, res, next) => {
  if (!req.session.logged_in) {
    next(); // Continue to next middleware if not logged in
  } else {
    res.redirect('/'); // Redirect to home/dashboard if already logged in
  }
};

module.exports = { withGuard, apiGuard, withoutGuard };
