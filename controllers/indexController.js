/**
|--------------------------------------------------
| index controller
|--------------------------------------------------
*/


exports.indexPage = function(req, res, next) {


  res.render('index', { title: 'Main Log' });
}