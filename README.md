Docca Builder
-------------

Docca Builder is a customer-side server that builds Docca markup documents with submitted data using [Preact](https://preactjs.com/) and converts them to PDF using the Docca server. Preact allows us to break our document into reusable components and apply logic in a really flexible way. This is just one way of generating Docca markup though, just about any templating system you prefer could do the job too.

Requirements:

- a Docca API key
- [Node](https://nodejs.org/)

Fork and/or clone this repository to you local system.

#### docca.io setup

- Go to [docca.io](https://docca.io) and signup.
- Go to "API Keys", enter a name for the key and generate it.

#### local service setup

In `config/default.yaml` set `docca.api_key` with your API key id.

Install [Yarn](https://yarnpkg.com/) and use it to install the service dependancies. Is Yarn. Is good.
```bash
npm i -g yarn
cd docca-builder
yarn
```

#### Demos

This first demo uses the endpoint you would use in production.

It includes no images so you can test it without uploading any to your Docca
account.
```
curl --data "@./demo/data/invoice-nologo.json" \
  -H "Content-Type: application/json" \
  http://localhost:8765/invoice > invoice-nologo-demo.pdf
```

The following command will generate the Docca Markup Reference.
```
curl http://localhost:8765/markup-reference > docca-markup-reference.pdf
```

If you log in to Docca, go to Template Editor -> Images you can upload an image
to your account. Upload an image called `logo.png` and run the following command.
Only the invoice data will be posted to Docca but the image referenced in the
document will be found in your account and included in the PDF.
```
curl --data "@./demo/data/invoice.json" \
  -H "Content-Type: application/json" \
  http://localhost:8765/invoice > invoice-customlogo-demo.pdf
```

The following two use a modified endpoint which will post the demo image along
with the Docca document to be included in the PDF. You don't want to be posting
the same image for every document though, so this is not something you'd use in
production, it's just here to demo images.

They are, however, also a demonstration of how you can include images unique to
a document when required.
```
curl --data "@./demo/data/invoice.json" \
  -H "Content-Type: application/json" \
  http://localhost:8765/invoice-demo-logo > invoice-logo-demo.pdf
```
```
curl --data "@./demo/data/invoice-long.json" \
  -H "Content-Type: application/json" \
  http://localhost:8765/invoice-demo-logo > invoice-long-demo.pdf
```

