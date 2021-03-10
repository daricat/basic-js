module.exports = function createDreamTeam(arr) {
  if ( !(Array.isArray(arr)) ) {
    return false;
  }
  coolName = [];
  arr.forEach(element => {
    if (typeof element !== 'string') return false;
    coolName.push(element.trim().charAt(0).toUpperCase());
  });
  return coolName.sort().join('');
};