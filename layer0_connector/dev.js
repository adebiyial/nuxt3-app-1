/** Called when the user runs 0 dev.
	 Starts this application in development mode.
*/
const { createDevServer } = require('@layer0/core/dev');

module.exports = async function dev() {
  return createDevServer({
    // All console output from your app will be prefixed with this label
    label: 'Nuxt3 Beta',

    // The command to start your app in dev mode
    command: () => `npx nuxi dev`,

    // Once your app's console output has matched all of
    // the following patterns, the "Layer0 ready on ..."
    // message will be displayed
    ready: [/Listening on/i, /Listening on/i],
  });
};
