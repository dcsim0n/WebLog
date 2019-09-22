/**
|--------------------------------------------------
| admin Controller
|--------------------------------------------------
*/

exports.adminPage = function(req, res, next) {
  res.render('index', { title: 'Express' });
}