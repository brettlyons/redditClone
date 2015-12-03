app.controller('RedditClone', function($scope) {
  $scope.resort = function () {
    if($scope.sortBy == 'date') {
      $scope.posts.sort(function(a,b) {
        return a.dateTime - b.dateTime;
      });
    }
    if($scope.sortBy == 'votes') {
      $scope.posts.sort(function(a,b) {
        return a.upVotes - b.upVotes;
      });
    }
    if($scope.sortBy == 'title') {
      $scope.posts.sort(function(a,b) {
        return a.title - b.title;
      });
    }
  }
  $scope.toggleShow = function (elementName) {
    console.log(elementName, !elementName);
    elementName = !elementName;
    console.log(elementName, !elementName);
  }
  
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
});
