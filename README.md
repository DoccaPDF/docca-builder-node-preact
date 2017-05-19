Docca Builder
-------------

Docca Builder is a server that you can run on-site and use to generate PDF files customised to your needs.

You design templates for the PDF documents you need to generate then post data and images to Docca Builder. Builder renders a Docca document from the template and data, sends it to the Docca server, and returns the resulting PDF document as the response.

[Preact](https://preactjs.com/) is used as the document renderer allowing complex templates to be easily built and maintained. Preact allows you to break your document into reusable components and apply logic using Javascript wherever necessary.

The documents that Builder send to the Docca server are never stored by the Docca server. Images unique to a document are saved to disk while the PDF is being generated and are then deleted.

Docca Builder includes example templates, endpoints, and helper functions which you can use to create a solution that's perfect for your requirements.

- format timestamps as readable strings
- format currency amounts
- request data from remote sources
- include images unique to the document being generated
- include common images stored on the Docca server

**Requirements:**

- a Docca API key
- [Node](https://nodejs.org/)

Fork and/or clone this repository to you local system.

#### docca.io setup

- Go to [docca.io](https://docca.io) and signup.
- Go to "API Keys", enter a name for the key and generate it.

In `config/default.yaml` set `docca.api_key` with your API key id.

#### Run it natively

Install [Yarn](https://yarnpkg.com/) and use it to install the service dependancies. Is Yarn. Is good.
```bash
npm i -g yarn
cd docca-builder
yarn
```

Start in development mode

```
yarn start
```

Start in production mode
```
yarn run compile
yarn run serve
```

#### Run it with Docker
```
docker-compose build docca-builder
docker-compose up -d docca-builder
```

#### Example Templates

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

**A generic, single page invoice**
```
curl --data "@./demo/data/invoice.json" \
  -H "Content-Type: application/json" \
  http://localhost:8765/invoice-demo-logo > invoice-logo-demo.pdf
```

**A generic, multi-page invoice**
```
curl --data "@./demo/data/invoice-long.json" \
  -H "Content-Type: application/json" \
  http://localhost:8765/invoice-demo-logo > invoice-long-demo.pdf
```

**A Chargify Statement**
```
curl --data "@./demo/data/chargify-statement.json" \
  -H "Content-Type: application/json" \
  http://localhost:8765/chargify-statement > chargify-statement.pdf
```

**A Stripe Invoice**
```
curl --data "@./demo/data/stripe-invoice.json" \
  -H "Content-Type: application/json" \
  http://localhost:8765/stripe-invoice > stripe-invoice.pdf
```
or.. configure your Stripe api key and..
```
curl http://localhost:8765/stripe/invoice/in_sTrIpEiNvOiCeId \
  > stripe-invoice.pdf
```
