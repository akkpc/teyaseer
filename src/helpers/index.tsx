const getItemLocal = (key: string) => {
    return localStorage.getItem(key);
}

const setItemLocal = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export {
    getItemLocal,
    setItemLocal
};
