<!--
title: 'Serverless Framework Node Express API on AWS'
description: 'This template demonstrates how to develop and deploy a simple Node Express API running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node Express API on AWS

This template demonstrates how to develop and deploy a simple Node Express API service running on AWS Lambda using the traditional Serverless Framework.

## Usage

### Deployment

Install dependencies with:

```
npm install
```

and then deploy with:

```
serverless deploy
```

You can start local emulation with:

```
npm run dev
```

Unit tests with:

```
npm run test
```

After running deploy, you should see output similar to:

```bash
Deploying aws-node-express-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-express-api-project-dev (196s)

endpoint: ANY - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com
functions:
  api: aws-node-express-api-project-dev-api (766 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [`httpApi` event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://w94r6l6ohl.execute-api.us-east-2.amazonaws.com/
```

Documentation in OpenApi/Swagger, you can call the via HTTP:

```bash
curl https://w94r6l6ohl.execute-api.us-east-2.amazonaws.com/api-docs/
```


To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
