$(document).ready(function() {
  showAll();

  function showAll() {
    var addPost = document.getElementById('output').innerHTML;
    var template = Handlebars.compile(addPost);

    $.ajax({
      url: "/api/blogpost",
      type: "GET",
    }).then(function(data) {
      console.log(data);


      document.querySelector(".display").innerHTML = template({
        blogs: data
      })
    })
  }

  $("#sendBtn").click(function() {

    var myPost = $("#views").val();
    console.log(myPost);

    var results = ({
      input: myPost
    })

    $.ajax({
      url: "/api/blogpost",
      type: "POST",
      async: "true",
      dataType: "application/json",
      data: results,

      sucess: function(data) {
        console.log("Sucess");
      }
    })
  })
})

function like(id) {
  const _id = id

      var qty = parseInt(document.getElementById('qty').value);
      var new_qty = qty + val;

      if (new_qty < 0) {
          new_qty = 0;

      document.getElementById('qty').value = new_qty;
      return new_qty;
  }


  console.log("SOMETHING IS HAPPENING", _id);
  counter ++;
}

function disLike(id){
  const _id = id
  console.log("I do not like this", _id);
}

function reply(id){
  const _id = id
  console.log("I Have SOMETHING to say too", _id);
}
