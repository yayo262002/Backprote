const validationEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //REGEX EMAIL;
    return regex.test(String(email).toLowerCase());
}

const validationPassword  = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,20}$/; //REGEX EMAIL;
    return regex.test(String(password));
}

module.exports = { validationPassword, validationEmail };