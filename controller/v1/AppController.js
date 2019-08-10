let AppInteractor = require(PATH + '/module/App/AppInteractor.js');
let controller = {
  index: index,
  ping: ping
}

async function ping(req, res) {
  let interactor = new AppInteractor();
  await interactor.ping().then(function(result) {
    return res.status(200).send(OUTPUT(true, result, []));
  }, function(err) {
    var arr = [];
    arr.push(err);
    return res.status(500).send(OUTPUT(false, null, err));
  })

}

async function index(req, res) {
  let interactor = new AppInteractor();
  await interactor.branch().then(function(result) {
    return res.status(200).send(OUTPUT(true, result, []));
  }, function(err) {
    var arr = [];
    arr.push(err);
    return res.status(500).send(OUTPUT(false, null, err));
  })
}
module.exports = controller;