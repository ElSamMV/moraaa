-- Administrador de demostración para la pantalla de login.
-- Credenciales: cédula 1000000000 / contraseña Demo1234
-- (el hash es bcrypt con coste 12; alternativamente usa `npm run seed:demo`)

INSERT INTO login_administrador
    (cedula, contrasena, nombre_completo, fecha_nacimiento, correo, telefono)
VALUES
    ('1000000000',
     '$2b$12$ghBYabM3W.twBdPkJ0q24ucxOF2T7VM0AaaWarZ2UBXCIvR4vi6UC',
     'Usuario Demo',
     '2000-01-01',
     'demo@ejemplo.com',
     '0000000000')
ON DUPLICATE KEY UPDATE
    contrasena = VALUES(contrasena),
    nombre_completo = VALUES(nombre_completo);
