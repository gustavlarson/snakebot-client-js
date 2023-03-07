require('ts-node').register({ transpileOnly: true });
const { reachableTiles, scoreDirection } = require('./scoreWorker');

module.exports = { reachableTiles, scoreDirection };
