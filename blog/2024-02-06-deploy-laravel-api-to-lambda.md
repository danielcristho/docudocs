---
slug: 2024-02-06-deploy-laravel-api-to-lambda.md
title: Deploy Laravel API To Lambda
tags: [cloud, aws]
enableComments: true
---

About two months ago, I was given the task of deploying a Laravel API to Lambda. Finally I found a ways to deploy it with `Serverless Framework` and `Bref`.

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
        # imageUri: 140847328111.dkr.ecr.ap-southeast-2.amazonaws.com/athena:latest
        runtime: php-82-fpm
        # name: athena
        timeout: 28 # in seconds (API Gateway has a timeout of 29 seconds)
        # layers:
        #     - ${bref:layer.php-82-fpm}
        events:
            - httpApi: '*'
    # scheduleTask:
    #     handler: handler.php
    #     events:
    #         - schedule:
    #             rate: cron(*/30 * * * ? *)

    # This function lets us run artisan commands in Lambda
    artisan:
        handler: artisan
        runtime: php-82-console
        # layers:
        #     - ${bref:layer.php-82}
        #     - ${bref:layer.console}
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

- `service`: This specifies the name of your service. In this case, it's named "laravel".
- `provider`:
    - `name`: Specifies that the cloud provider. For example we using AWS.
    - `region`: Specifies the AWS region where your resources will be deployed. In this case, it's the Asia Pacific (Sydney) region.
    - `stage`: Specifies the deployment stage or environment. Here, it's set to "dev", indicating a development stage, Or `prod` indicating production.
    - `runtime`: Specifies the Lambda runtime. `provided.al2` indicates that we're using a custom runtime based on Amazon Linux 2. This is a common choice for PHP-based applications. Then you will using other runtime likes; Node Js, Python, .NET etc.
    - `environment`: Specifies the environment variable that will be available to our Lambda function. In this case I wrote an environment for RDS Database. Anyway, later I will write about [AWS CDK] (https://aws.amazon.com/cdk/) using Python for creating database clusters, etc.

