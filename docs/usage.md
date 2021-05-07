# Usage
> How to run the app locally


## Run

Compile and start a hot-reloading dev server.

```sh
$ yarn serve
```

Open in the browser:

- https://localhost:8080


## Build

Compile and minify for production.

```sh
$ yarn build
```

Now you can view the output in the unversioned `dist` directory.


## Lint

Detect errors and warnings and fix where possible.

```sh
$ yarn lint:fix
```

Run linter but not fix up. Warnings will pass, but any errors will cause an error exit status - this is useful for a CI/CD flow.

```sh
$ yarn lint:check
```
