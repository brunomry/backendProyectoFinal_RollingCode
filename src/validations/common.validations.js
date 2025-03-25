import { param } from "express-validator";

export const idParamValidacion = [
    param("id").isMongoId()
]