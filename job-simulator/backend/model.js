export const validateData = (data) => {
    const { campo1, campo2, campo3, campo4, campo5, campo6 } = data;

    // validar que todos existan
    if (
        campo1 === undefined ||
        campo2 === undefined ||
        campo3 === undefined ||
        campo4 === undefined ||
        campo5 === undefined ||
        campo6 === undefined
    ) {
        return "Todos los campos son obligatorios";
    }

    // validar strings
    if (typeof campo1 !== "string") return "Campo 1 debe ser un string";
    if (typeof campo2 !== "string") return "Campo 2 debe ser un string";
    if (typeof campo3 !== "string") return "Campo 3 debe ser un string";

    // validar números
    if (typeof campo4 !== "number" || !Number.isInteger(campo4)) {
        return "Campo 4 debe ser un integer";
    }

    if (typeof campo5 !== "number" || isNaN(campo5)) {
        return "Campo 5 debe ser un float";
    }

    // validar boolean
    if (typeof campo6 !== "boolean") {
        return "Campo 6 debe ser un boolean";
    }

    return null;
};