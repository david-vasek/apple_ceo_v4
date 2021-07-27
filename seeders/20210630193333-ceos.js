'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Users', [{
                Name: 'Steve Jobs',
                slug: 'steve_jobs',
                first_year_active: 1976,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                Name: 'Mike Scott',
                slug: 'mike_scott',
                first_year_active: 1978,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                Name: 'John Sculley',
                slug: 'john_scully',
                first_year_active: 1983,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('ceos', null, {});
    }
};