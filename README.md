# codepipeline-node
This is an example of CodePipeline using CodeBuild for a Node application.  It will run tests for node, then create a Docker image from the application.

## Create Stack

```
aws cloudformation create-stack \
--stack-name <NAME_OF_STACK> \
--template-body file://cloudformation.yml \
--capabilities CAPABILITY_IAM \
--parameters '
[
     {
          "ParameterKey": "GitHubToken",
          "ParameterValue": "<TOKEN>"
     },
     {
          "ParameterKey": "GitHubRepoOwner",
          "ParameterValue": "<USERNAME_OR_ORGANIZATION>"
     },
     {
          "ParameterKey": "GitHubRepoName",
          "ParameterValue": "<REPOSITORY_NAME>"
     },
     {
          "ParameterKey": "GitHubBranch",
          "ParameterValue": "master"
     },
     {
          "ParameterKey": "S3ArtifactStore",
          "ParameterValue": "codepipeline-us-east-1-<ACCOUNTID>"
     }
]'

```