exports.config = {
  bundles: [
    { components: ['my-app', 'app-home', 'app-nav'] },
    { components: ['app-profile'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
