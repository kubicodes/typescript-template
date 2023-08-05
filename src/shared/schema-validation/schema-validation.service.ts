import Ajv, { Schema, ValidateFunction } from "ajv";

export interface SchemaValidationService {
    getValidationFunction(schema: Schema): ValidateFunction;
}

export class AjvSchemaValidationService<T> implements SchemaValidationService {
    private ajvInstance: Ajv;

    public getValidationFunction(schema: Schema): ValidateFunction {
        if (!this.ajvInstance) {
            this.ajvInstance = new Ajv();
        }

        return this.ajvInstance.compile<T>(schema);
    }
}
