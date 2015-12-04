app.controller('RedditClone', function($scope) {
  $scope.posts = [
    {
      title: "Slurpy vorpers snurfle",
      author: "Flarptarg",
      imageUrl: "http://www.placekitten.com/g/213/213",
      content: "Yaaay kittens, this kitten is clearly twice as adorable",
      dateTime: "sometime",
      upVotes: 2,
      showcomments: false,
      comments: [{content: "Blarguhblarghl", author: "Snorp"}, {content: "EAaaat it motherfuuuckeerrr!", author:"Rick Sanchez"}]},
    {
      title: "Valiscous nomenclature", author: "Slurfbits",
      imageUrl: "http://www.placekitten.com/g/202/202",
      content: "Black and white kitten fun",
      dateTime: "some other time",
      upVotes: 3,
      showcomments: false,
      comments: [{content: "Larglelargel", author: "Qurp"}, {content:"I (censored) Sleemies", author:"Rick Sanchez"}]
    }
  ]; // test data
  $scope.sortBy = 'date';
  $scope.resort = function (sortTopic) {
    console.log("Resort by: ", $scope.sortBy);
    $scope.sortBy = sortTopic;
  };
  $scope.toggleShow = function (post) {
    console.log(post);
    console.log("-----------------")
    console.log(post.showcomments);
    post.showcomments = !post.showcomments; 
    console.log(post);
    console.log("-----------------")
    console.log(post.showcomments);
  };

});
