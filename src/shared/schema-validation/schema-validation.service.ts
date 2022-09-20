import Ajv, { Schema, ValidateFunction } from "ajv";

export interface SchemaValidationService {
    validate(schema: Schema): ValidateFunction;
}

export class SchemaValidationServiceImpl<T> implements SchemaValidationService {
    public validate(schema: Schema): ValidateFunction {
        const ajv = new Ajv();

        return ajv.compile<T>(schema);
    }
}
