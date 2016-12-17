# codepipeline-node
This is an example of CodePipeline using CodeBuild for a Node application.  It will run tests for node, then create a Docker image from the application and push it to an ECR Repository.

To integrate this workflow into your own Node project:

1. Copy the `Dockerfile`, `biuldspec.yml`, and `cloudformation.yml` files to the root of your project. They are all generic, so no changes are required.
2. Ensure `npm run test` will run your unit tests
3. Ensure `npm start` will run your node application
4. Run the Cloud Formation script to create your stack.

Once this is done, CodePipeline will automatically create new builds when there are GitHub changes in your repo.

## Create Stack

The command below will create the CodePipeline stack. This stack will create the following resources:

1. CodePipeline Role
2. CodeBuild Role
3. ECR Repository named after the Git Repository
4. CodeBuild Project for Tests
5. CodeBuild Project for Container Build
6. CodePipeline that integrates Source > Test > Container Build

To run this command, you will need fill in the parameters in angled brackets.

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
