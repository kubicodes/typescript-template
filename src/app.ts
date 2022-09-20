import { loadAsync } from "node-yaml-config";
import { ApplicationConfig, ApplicationConfigSchema } from "./shared/application-config/application-config.schema";
import { SchemaValidationServiceImpl } from "./shared/schema-validation/schema-validation.service";
import express from "express";

(async () => {
    const NODE_ENV = process.env.NODE_ENV;

    const app = express();
    
    const config: ApplicationConfig = await loadAsync(__dirname + `/../config/${NODE_ENV}.yml`);
    const schemaValidationService = new SchemaValidationServiceImpl<ApplicationConfig>();
    const validate = schemaValidationService.validate(ApplicationConfigSchema);

    if (!validate(config)) {
        console.error(JSON.stringify(validate.errors));
        throw new Error("Invalid App config");
    }

    app.listen(config.port, () => {
        console.log(`App listening on port: ${config.port}`);
    });
})();
