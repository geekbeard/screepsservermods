// Change the server welcome text dialog

module.exports = function(config) {
    if(config.backend) {
        config.backend.welcomeText = `ADHC Screeps Server`;
    }
};
