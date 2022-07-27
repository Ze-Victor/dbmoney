export const changeField = (e, setValue, valueInput) => {
    const auxValues = { ...valueInput };
    auxValues[e.target.name] = e.target.value;
    setValue(auxValues);
};