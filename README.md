# covid-api-lambda

The API to provide a summary information about Covid-19 cases and make queries by countries.

## API documentation

<!-- make a link to this https://app.swaggerhub.com/apis-docs/shehabshalan/COVID/1.0 -->

The API is documented using Swagger. You can find the documentation [here](https://app.swaggerhub.com/apis-docs/shehabshalan/COVID/1.0).

## How to use

### Installation

```bash
clone https://github.com/shehabshalan/covid-api-lambda.git
cd covid-api-lambda
```

```bash
sam build
```

### Run locally

```bash
sam local start-api
```

### Deploy

```bash
sam deploy --guided
```

### Test

```bash
npm install
```

```bash
npm test
```

### Requirements

- Node.js
- AWS CLI
- SAM CLI

### Folder structure

├── **tests**
│ └── index.test.js
├── events
│ └── event.json
├── lambdas
│ └── index.js
├── package.json
├── package-lock.json
├── README.md
├── samconfig.toml
└── template.yaml
