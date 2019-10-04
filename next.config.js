const nextBuildId = require('next-build-id');
const withManifest = require('next-manifest');

const defaults = {
  output: './static/',
  name: '',  //TODO the cli tool should update this name
  icons: [
    {
      "src": "/static/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/static/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};


module.exports = withManifest({
  generateBuildId: async () => {
    const fromGit = await nextBuildId({ dir: __dirname });
    return fromGit.id;
  },
  manifest: {
    ...defaults
  }
});
