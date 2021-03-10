const secInHour = 3600;
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;
    let result = {
        turns: turns,
        seconds: Math.floor(turns / (turnsSpeed / secInHour)),
    }
    return result;
}