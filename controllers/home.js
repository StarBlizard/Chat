/*
* Main page
*/
module.exports.index = function(req, res){
  res.status(200).send('Home');
};

/*
 * Landing page
 * */
module.exports.landing = function(req, res){
  res.status(200).send('Landing page');
};
