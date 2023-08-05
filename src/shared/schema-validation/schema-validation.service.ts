import Ajv, { Schema, ValidateFunction } from "ajv";

export interface SchemaValidationService {
    getValidationFunction(schema: Schema): ValidateFunction;
}

export class AjvSchemaValidationService<T> implements SchemaValidationService {
    // Singleton instance of Ajv, as instanciation is to costly and not needed multiple times as
    // the compile method is called anyway with the current schema
    private ajvInstance: Ajv;

    public getValidationFunction(schema: Schema): ValidateFunction {
        if (!this.ajvInstance) {
            this.ajvInstance = new Ajv();
        }

        return this.ajvInstance.compile<T>(schema);
    }
}
