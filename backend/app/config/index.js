const config = {
    app: {
        port: process.env.PORT || 8080
    },
    db: {
        url: "mongodb://localhost:27017/shopping"
    },
    jwt: {
        secret: "shopping-secret-key"
    }
};

module.exports = config;
