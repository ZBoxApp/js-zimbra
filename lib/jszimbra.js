var communication = require('./api/communication');

module.exports = {

    Communication: communication

};

(function() {
    if (window) {
        window.Zimbra = communication;
    }
})();