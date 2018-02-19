exports.config = {
  bundles: [
    { components: ['my-app', 'app-home', 'app-nav', 'app-bio'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
