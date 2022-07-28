export const changeField = (e, setValue, valueInput) => {
    const auxValues = { ...valueInput };
    auxValues[e.target.name] = e.target.value;
    setValue(auxValues);
};

export const required = (value) => {
    if (value === undefined || value.toString().trim().length === 0) {
      return 'Este campo é obrigatório';
    }
    return null;
};

export const isEquals = (value1, value2) => {
    if (value1 !== value2) {
        return 'Senha não coincidem';
    }
    return null;
}