import { app } from "./app";
import { appDataSource } from "./config";

appDataSource
  .initialize()
  .then(() => {
    app.listen(3333, () => console.log("Server is running in localhost:3333"));
  })
  .catch(error => console.log(error));
