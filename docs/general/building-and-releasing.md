# Building and releasing.

The `@bigbinary/neeto-cist` package gets published to NPM when we merge a PR
with `patch`, `minor` or `major` label to the `main` branch. The `patch` label
is used for bug fixes, `minor` label is used for new features and `major` label
is used for breaking changes. You can checkout the `Create and publish releases`
workflow in GitHub Actions to get a live update.

In case if you missed to add the label, you can manually publish the package.
For that first you need to create a PR to update the version number in the
`package.json` file and merge it to the `main` branch. After merging the PR, you
need to create a
[new github release](https://github.com/bigbinary/neeto-cist/releases/new) from
main branch. Whenever a new release is created with a new version number, the
github actions will automatically publish the built package to npm. You can
checkout the `Publish to npm` workflow in GitHub Actions to get a live update.

Please note that before publishing the package, you need to verify the
functionality in some of the neeto web-apps locally using `yalc` package
manager. The usage of yalc is explained in this video:
https://youtu.be/QBiYGP0Rhe0

Type declaration files are written & kept in `typeTemplates` folder. The
`jsdoc-builder` script will take these declaration files, add jsdoc comments and
copy it to the root folder. The root declaration files will be exported along
with the package. The jsdoc script will be run automatically whenever the
package is build.
