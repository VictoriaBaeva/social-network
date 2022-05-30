export const requiredField = (value) => {
    if (value) return undefined;
    return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Length more then ${maxLength} symbols`;
    return undefined;
};
