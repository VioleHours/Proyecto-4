export function validation(userData) {
    let errors = {};

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const regexPassword = /^(?=\w*\d)\S{6,10}$/;
    
    if(!regexEmail.test(userData.username)){
        errors.username = 'Debe ser correo electronico'
    }
    if(!userData.username){
        errors.username = 'No puede ser vacio'
    }
    if(userData.username.length > 35){
        errors.username = 'Debe tener menos de 35 caracteres'
    }

    if(!regexPassword.test(userData.password)){
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }
    if(!regexPassword.test(userData.password)) {
        errors.password = 'La contraseña debe incluir un numero'
    }
    //EXS
    // if(!userData.username) errors.username = 'El nombre de usuario no existe'
    // else if (userData.username.length > 0 && !regexEmail.test(userData.username)) errors.username = 'El campo debe ser un email';
    // else if (userData.username.lenght > 35) errors.username = 'El nombre de usuario es demasiado largo';
    // else if (!regexEmail.username) errors.username = 'El nombre no es valido'

    // if (userData.password.lenght < 6) errors.password = 'La contraseña es demasiado corta';
    // else if (userData.password.lenght > 10) errors.password = 'La contraseña es demasiado larga';
    // else if (!regexPassword.password) errors.password = 'La contraseña no es válida.'
    return errors
}