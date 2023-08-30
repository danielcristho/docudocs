---
title: Jenkins
---

## Jenkinsfile (Declarative Pipeline) - Example Structure

```shell
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
```

## Quick Start Jenkinsfile Example for Python

```shell
# Requires the Docker Pipeline plugin
pipeline {
    agent { docker { image 'python:3.9.18-slim-bookworm' } }
    stages {
        stage('build') {
            steps {
                sh 'python3 --version'
            }
        }
    }
}
```