var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();

console.log("hello");