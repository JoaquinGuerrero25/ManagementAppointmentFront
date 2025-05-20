export const buildPlainObjectFromFields = (fields, values = {}) => {
    return fields.reduce((acc, field) => {
        acc[field.name] = values[field.name] ?? "";
        return acc;
    }, {});
};