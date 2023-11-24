# HTML CSS JS Code Along Backend Setup Steps

To prepare for this code along please follow along with these steps. 

## Get Ready for the code along
The first part you should have extensive experience in. You will need to log in to your `aws console` and create a DynamoDB table called `contact` giving the table a `partition key` of `id` with a `type` of `String`.

At this point you should open the project up in intellij IDE, and follow the instructions below to get your `api` up and running.

- Create a File called `application-dev.properties` and edit the variables, filling in your `awsaccesskey` and your `awesecretkey` along with the dynamodb backend url `https://dynamodb.us-west-2.amazonaws.com` using the application.properties file as a template, and save the file.
- Open the `ContactApplication` file. Click on the green run button to run the backend API to make sure it builds and runs. 
- Once you have done this you should see the SpringBoot api startup information in the bottom right pane of your IDE.
- Open your browser and browse to the address `http://localhost:8080/contacts/`. You should be presented with an empty list from your backend if you have followed the steps correctly.
- now move back to the main [README.md](../README.md) to get the front end up and running ready for the code along.
