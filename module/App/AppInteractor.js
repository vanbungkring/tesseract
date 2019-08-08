const branchName = require('current-git-branch');
class AppInteractor {
  ping() {
    return new Promise(function(resolve, reject) {
      resolve("pong");
    })
  }
  branch() {
    return new Promise(function(resolve, reject) {
      resolve(branchName({
        altPath: 'any/git/repo'
      }));
    })
  }

}
module.exports = AppInteractor;