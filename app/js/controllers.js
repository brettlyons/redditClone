app.controller('RedditClone', function($scope) {
  $scope.posts = [
    {
      title: "Slurpy vorpers snurfle",
      author: "Flarptarg",
      imageUrl: "http://www.placekitten.com/g/213/213",
      content: "Yaaay kittens, this kitten is clearly twice as adorable",
      dateTime: new Date("December 4, 2015 06:38:20"),
      upVotes: 2,
      showcomments: false,
      comments: [{content: "Blarguhblarghl", author: "Snorp"}, {content: "EAaaat it motherfuuuckeerrr!", author:"Rick Sanchez"}],
      showAdd: false
    },
    {
      title: "Valiscous nomenclature", author: "Slurfbits",
      imageUrl: "http://www.placekitten.com/g/202/202",
      content: "Black and white kitten fun",
      dateTime: new Date("December 5, 2015 15:32:58"),
      upVotes: 3,
      showcomments: false,
      comments: [{content: "Larglelargel", author: "Qurp"}, {content:"I (censored) Sleemies", author:"Rick Sanchez"}],
      showAdd: false,
    }
  ]; // test data
  $scope.sortBy = 'date';
  $scope.resort = function (sortTopic) {
    $scope.sortBy = sortTopic;
  };
  $scope.toggleShow = function (post, partOfPost) {
    post[partOfPost] = !post[partOfPost]; 
  };
  $scope.pushComment = function (post, comment) {
    console.log(comment, "<----COMMENT");
    post.comments.push(comment);
    $scope.commentInProgress = {};
  };
  $scope.commentInProgress = {author: "", content: "" };
});
