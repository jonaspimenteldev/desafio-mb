import swaggerAutogen from "swagger-autogen";

const swaggerGenerator = swaggerAutogen();

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/interfaces/routes/UserRoutes.js"];

swaggerGenerator(outputFile, endpointsFiles);
