# covid-api-lambda

The API to provide a summary information about Covid-19 cases and make queries by countries.

## API documentation

The API is documented using Swagger. You can find the documentation [here](https://app.swaggerhub.com/apis-docs/shehabshalan/COVID/1.0).

### Requirements

- Node.js
- Docker
- AWS CLI
- SAM CLI

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

### Folder structure

```
├── __tests__
│ └── index.test.js
├── events
│ └── event.json
├── lambdas
│ └── index.js
├── layer
│ └── nodejs
│   └── node_modules
│     └── handler
│       └── index.js
│       └── package.json
│   └── package.json
├── package.json
├── package-lock.json
├── README.md
├── samconfig.toml
└── template.yaml
```
