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
  if(!members || members.length === 0 || typeof members.reduce !== 'function'){
    return false;
  } else {
   return members.reduce((acc, elem) => (typeof elem === 'string' && elem.length !== 0) ?
     [...acc, elem.split(' ').join('')] : acc, []).map(elem => elem[0].toUpperCase()).sort().join('');
  }
}

module.exports = {
  createDreamTeam
};
