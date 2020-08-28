module.exports = {
    client: {
        // Add env ENGINE_API_KEY
        service:  'HydroPortfolio',
        url:      'http://localhost:4000/graphql',
        // headers: {
        //     // optional
        //     authorization: 'Bearer lkjfalkfjadkfjeopknavadf'
        //   },
        tagName:  'graphql',
        includes: [ './src/bus/**/*.graphql' ],
        excludes: [ '**/__tests__/**' ],
    },
};
