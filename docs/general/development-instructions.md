# Development instructions

1. Clone this repository.
2. Run `yarn install` to download the dependencies and setup the development
   environment.
3. Have a host application ready.
4. Run `yarn build --watch` to automatically transpile code as you save the
   file. You can omit the `--watch` flag if you want to run the build only once.
5. In a different terminal, run `yalc publish` to publish the
   neeto-cist to the local yalc store.
6. Run `yalc add @bigbinary/neeto-cist` to install the
   neeto-cist to the host application.
7. After making necessary changes to `neeto-cist`, run `yalc push`
   to push the changes to the host application (assuming that you are in watch
   mode and the changes are bundled automatically).
8. Video explanation on how to use yalc: https://youtu.be/F4zZFnrNTq8
