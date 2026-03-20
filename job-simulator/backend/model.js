export const validateData = (data) => {
    const { campo1, campo2, campo3, campo4, campo5, campo6 } = data;

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
    if (typeof campo1 != "string") return "Campo 1 debe ser un string";
    if (typeof campo2 != "string") return "Campo 2 debe ser un string";
    if (typeof campo3 != "string") return "Campo 3 debe ser un string";
    if (typeof campo4 != "integer") return "Campo 4 debe ser un integer";
    if (typeof campo5 != "float") return "Campo 5 debe ser un float";
    if (typeof campo6 != "boolean") return "Campo 6 debe ser un boolean";
    return null;

};