const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !members.length) {
    return false;
  }
  let dreamteam = [];
  dreamteam = members.filter(a => typeof a === 'string').map(a => a.trim()[0].toUpperCase()).sort().join('');
  return dreamteam;  
}

module.exports = {
  createDreamTeam
};
