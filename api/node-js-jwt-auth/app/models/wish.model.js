module.exports = (sequelize, Sequelize) => {
    const Wish = sequelize.define("wishes", {


        idUsername: {
            type: Sequelize.STRING,
            // primaryKey: true
        },
        wish: {
            type: Sequelize.STRING
        },
        isDreamsComesTrue: {

            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return Wish;
};
