var mongoose = require('mongoose');
module.exports = function(mongoUrl){
 mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

const inputComment = mongoose.model('inputComment',{
    input:String
   
});

return {
    inputComment
};
}
