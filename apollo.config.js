module.exports = {
    client: {
        service:  'HydroPortfolio',
        url:      'http://localhost:4000/graphql',
        // headers: {
        //     // optional
        //     authorization: 'Bearer lkjfalkfjadkfjeopknavadf'
        //   },
        includes: [ './src/bus/**/*.graphql' ],
        excludes: [ '**/__tests__/**' ],
    },
};
