# md-groupe-technical-test-express

- RESTful API to facilitate an expense management system

## Built With

These are the technologies used in this solution

- [node.js](https://nodejs.org)
- [mongoDB](https://www.mongodb.com)
- [express.js](https://expressjs.com)
- [jest.js](https://jestjs.io/)

## Running the app locally

1.  Clone the repo
    ```sh
    git clone https://github.com/michelbeyrouty/md-groupe-technical-test.git
    ```
2.  Install dependecies

    ```sh
    npm install
    ```

3.  Add env file

    ```sh
    DB_URL=mongodb+srv://{username}:{password}@db1.khxwl.mongodb.net/{dbName}?retryWrites=true&w=majority
    PORT={PORT}
    ```

4.  Run tests

    ```sh
    npm test
    ```

5.  Start server
    ```sh
    node server.js
    ```

## API Documentation

Documentation can be found by following this [link](https://app.swaggerhub.com/apis/michel_beyrouty/MD-groupe-expenses/1.0.0)
