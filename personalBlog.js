module.exports = function(blog) {

  var blogModel = blog.inputComment;


const index = function(req, res, done){
  blogModel.find({},function(err,result){
    if(err){
      return done(err);
    }
    console.log(result);
    res.send(result)
  })
}
  const myPosts = function(req, res, done) {
    var blog = req.body;

        blogModel.create({
          input: blog.input
        }, function(err, result) {
          if (err) {
            return done(err)
          }
      res.send(result)
    });
  }


  return {
    index,
   myPosts
  }
}
