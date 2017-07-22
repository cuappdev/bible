# The Cornell AppDev JavaScript Bible

The following `README` articulates how to setup your development environment
for client-side and server-side development with `JavaScript` for `AppDev`-
related projects.

## Client-Side

For client-side development, we will be using `ES6` syntax with
[`Flow`](https://flow.org/) type-checking our code.  In addition, we will have
a linter run through [`Atom`](https://atom.io/).

Before we start, the following `devDependencies` are required:

````javascript
{
  "babel-cli": "*",
  "babel-jest": "*",
  "babel-preset-flow": "*",
  "flow-bin": "*",
}
````

For convenience:

````
npm install --save-dev babel-cli babel-jest babel-preset-flow flow-bin
````

**NOTE:** All `ES6`-related transpiling-, `Babel`, and `Webpack`-related things
should be configured by someone who knows what they're doing.  If you are
having issues, seek the leads' help.

1. Download [`Atom`](https://atom.io/)
2. Install [`Nuclide`](https://nuclide.io/)
3. Check this box in the `Nuclide` options screen:

![Install Recommended Packages](img/install-recommended-packages.png)

... and restart `Atom`

4. Point `Nuclide` to use the project's local `Flow` `bin` directory.  Go to
`Nuclide`'s options page in `Atom`, find the `Nuclide-flow` settings, and check
the following box:

![Nuclide Flow](img/nuclide-flow.png)

5. Ensure your `.babelrc` looks something like this:

````javascript
{
  "presets": [
    // Other presets
    "flow",
  ]
}
````

6. Install [`ESLint Atom Plugin`](https://github.com/AtomLinter/linter-eslint)
7. Clone this repo and `npm install` in the `js` directory to setup your global
`ESLint` config.
8. Point your `ESLint Atom Plugin` to the directory containing this repo in the
following way:
![ESLint Atom Config](img/eslint-atom.png)

## Server-Side

Essentially the same as above, but with a slightly different `Webpack` config.
Ask leads for help if this is not setup already.
