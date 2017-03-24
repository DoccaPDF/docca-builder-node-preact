Docca Invoices
--------------

Here we're using [Preact](https://preactjs.com/) to construct a Docca markup document which we send to Docca to render as a PDF. This allows us to break our document into reusable components and apply logic in a really flexible way.

Requirements:

- a Docca API key
- [Node](https://nodejs.org/) installed to use this module.

Go to [docca.io](https://docca.io) and signup.

Go to "API Keys", enter a name for the key and generate it.

Set your shell's DOCCA_API_KEY enviroment variable to your API key.
```
export DOCCA_API_KEY=apikey_yourApiKey
```

Install [Yarn](https://yarnpkg.com/) and use it to install the module dependancies. Is Yarn. Is good.
```bash
npm i -g yarn
yarn
```

Run a demo or two. These will create PDF files in the repo directory as `demo-invoice.pdf` and `demo-invoice-long.pdf`.
```
yarn run demo
yarn run demo:long
```
