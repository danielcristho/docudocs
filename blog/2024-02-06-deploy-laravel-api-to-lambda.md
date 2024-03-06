---
slug: 2024-02-06-deploy-laravel-api-to-lambda.md
title: Deploy Laravel API To Lambda
tags: [cloud, aws]
enableComments: true
---

About two months ago, I was given the task of deploying a Laravel API to Lambda. Finally I found a ways to deploy it with [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) and [Bref](https://bref.sh/docs/laravel/getting-started).

## What is Serverless Framework?

The Serverless Framework is an open-source framework that allows developers to build and deploy serverless applications and functions. It simplifies the process of managing serverless architectures by abstracting away the underlying infrastructure management. With the Serverless Framework, developers can focus more on writing code and less on managing servers or provisioning resources.

To install serverless, you should using npm:

```bash
npm install -g serverless
```

## What is Bref?

To managing the function, Bref provides a command-line interface (CLI) tool for initializing, deploying, and managing serverless PHP applications. Developers can use the CLI to create new projects, deploy functions to AWS Lambda, and manage configuration settings.

You guys also, set the runtime environment for running PHP applications using Bref. This environment includes support for PHP 7.x, 8.x, extensions commonly used in PHP applications, and features like HTTP request handling, environment variables, and logging.

Install Bref using composer:

```bash
cd laravel-project
```

```bash
composer require bref/bref bref/laravel-bridge --update-with-dependencies
```

Lastly, to deploy our function or application we need to define everything, including the runtime, runtime version, stage, environment, cloud provider in a file called `serverless.yml`

### Setup

Okay, I think that's enough explanation and installation. Now let's do some setup. :)

```bash
cd laravel-project
```

Create `serverless.yml`:

```bash
php artisan vendor:publish --tag=serverless-config
```

Now, you need

```yml
service: laravel

provider:
    name: aws
    region: ap-southeast-2
    stage: dev
    runtime: provided.al2
    environment:
        DB_HOST: wwww.ap-southeast-2.rds.amazonaws.com
        DB_DATABASE: xxxx
        DB_USERNAME: yyyy
        DB_PASSWORD: zzzz
   vpc:
    securityGroupIds:
    - sg-xyz
    subnetIds:
        - subnet-abcd

package:
    # Files and directories to exclude from deployment
    patterns:
        - '!node_modules/**'
        - '!resources/assets/**'
        - '!storage/**'
        - '!tests/**'
        - '!docker/'
        - '!.husky/'
        - '!.github/**'

functions:
    # This function runs the athena website/API
    athena:
        handler: public/index.php
        runtime: php-82-fpm
        timeout: 28 # in seconds (API Gateway has a timeout of 29 seconds)
        events:
            - httpApi: '*'

    # This function lets us run artisan commands in Lambda
    artisan:
        handler: artisan
        runtime: php-82-console
        timeout: 720 # in seconds
        # Uncomment to also run the scheduler every minute
        #events:
        #    - schedule:
        #          rate: rate(1 minute)
        #          input: '"schedule:run"'

plugins:
    # We need to include the Bref plugin
    - ./vendor/bref/bref
```

### A bit of explanation

```yml
service: laravel

provider:
    name: aws
    region: ap-southeast-2
    stage: dev
    runtime: provided.al2
    environment:
        DB_HOST: wwww.ap-southeast-2.rds.amazonaws.com
        DB_DATABASE: xxxx
        DB_USERNAME: yyyy
        DB_PASSWORD: zzzz
    vpc:
    securityGroupIds:
    - sg-xyz
    subnetIds:
        - subnet-abcd
```

- `service`: This specifies the name of our service. In this case, it's named "laravel".
- `provider`:
    - `name`: Specifies that the cloud provider. For example we using AWS.
    - `region`: Specifies the AWS region where our resources will be deployed. In this case, it's the Asia Pacific (Sydney) region.
    - `stage`: Specifies the deployment stage or environment. Here, it's set to "dev", indicating a development stage, Or `prod` indicating production.
    - `runtime`: Specifies the Lambda runtime. `provided.al2` indicates that we're using a custom runtime based on Amazon Linux 2. This is a common choice for PHP-based applications. Then you will using other runtime likes; Node Js, Python, .NET etc.
    - `environment`: Specifies the environment variable that will be available to our Lambda function. In this case I wrote an environment for RDS Database. Anyway, later I will write about [AWS CDK](https://aws.amazon.com/cdk/) using Python for creating database clusters, etc.
    - `vpc`:  This indicates that we're configuring the Virtual Private Cloud settings for our Lambda functions. This is useful for scenarios where your Lambda functions need to interact with resources that are only accessible within your VPC, such as databases hosted on Amazon RDS or services running on Amazon EC2 instances.
    - `securityGroupIds`: Specifies the security groups associated with our Lambda functions.
    - `subnetIds`: Specifies the subnets in which our Lambda functions will be deployed. Subnets are segments of our VPC where you can place resources. subnet-abcd is the ID of the subnet where our Lambda functions will be deployed.

```yml
package:
    # Files and directories to exclude from deployment
    patterns:
        - '!node_modules/**'
        - '!resources/assets/**'
        - '!storage/**'
        - '!tests/**'
        - '!docker/'
        - '!.husky/'
        - '!.github/**'

functions:
    # This function runs the athena website/API
    athena:
        handler: public/index.php
        runtime: php-82-fpm
        timeout: 28 # in seconds (API Gateway has a timeout of 29 seconds)
        events:
            - httpApi: '*'

    # This function lets us run artisan commands in Lambda
    artisan:
        handler: artisan
        runtime: php-82-console
        timeout: 720 # in seconds
        # Uncomment to also run the scheduler every minute
        #events:
        #    - schedule:
        #          rate: rate(1 minute)
        #          input: '"schedule:run"'

plugins:
    # We need to include the Bref plugin
    - ./vendor/bref/bref
```

#### Package

- `patterns`: Specifies the files and directories to exclude from the deployment package. These are typically directories that contain development or testing files that aren't needed in the production deployment.

#### Functions

- `functions`:  Defines a Lambda function named responsible for running the Athena website/API.
- `handler`: Specifies the entry point for the function. In this case, it's public/index.php, which is typical for Laravel applications.
- `runtime`: Specifies the runtime for the Lambda function. It's set to php-82-fpm, indicating PHP 8.2 running as FastCGI Process Manager (FPM).
- `timeout`: Sets the timeout for the function execution in seconds.
- `events`: Defines the event trigger for the function. In this case, it's an HTTP API event trigger.
- `artisan`: Defines a Lambda function named "artisan" responsible for running artisan commands in Lambda.
- `handler`: Specifies the entry point for the function. Here, it's artisan, indicating the Laravel artisan CLI.
- `runtime`: Specifies the runtime for the Lambda function. It's set to php-82-console, indicating PHP 8.2 running in console mode.

#### Plugins

- `./vendor/bref/bref`: Specifies the Bref plugin, which is necessary for deploying PHP applications to AWS Lambda. This plugin provides the necessary runtime and integration with AWS services.

Okay lastly, we'll deploy the function by running serverless command:

```bash
serverless deploy
```

or

```bash
sls deploy
```

```bash
Deploying laravel to stage dev (ap-southeast-2)

✔ Service deployed to stack laravel-dev (102s)

endpoint: ANY - https://xxyyzz.execute-api.ap-southeast-2.amazonaws.com
functions:
  athena: laravel-dev-athena (45 MB)
  artisan: laravel-dev-artisan (45 MB)

Want a better experience than the AWS console? Try out https://dashboard.bref.sh
```

Migration using bref, usually we use `artisan` command, like `php artisan migrate` but if using bref just use:

```bash
serverless bref:cli --args="migrate"
```

NB: You guys can use bref to run other artisan commands.

Accessing API, in this case i use api/health-check:

```bash
curl https://xxyyzz.execute-api.ap-southeast-2.amazonaws.com/api/health-check
```

Response:

```bash
"Hello to public API."
```

That's all for now, I will write about Lambda or other stuff about AWS later. Hope you enjoy it.
