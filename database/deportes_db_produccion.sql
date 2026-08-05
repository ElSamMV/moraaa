-- =====================================================================
--  deportes_db — volcado listo para importar en MySQL 8 en la nube
--  (Aiven for MySQL, TiDB Cloud, Clever Cloud, MySQL local)
--
--  Generado a partir del export de phpMyAdmin, con estos ajustes:
--    * FOREIGN_KEY_CHECKS=0 durante la importación, para que los
--      DROP TABLE no fallen por las claves foráneas al reimportar.
--    * SQL_MODE relajado y zona horaria fijada en UTC.
--    * Sin CREATE DATABASE ni USE: los proveedores gratuitos entregan
--      la base ya creada (en Aiven se llama `defaultdb`). Si importas
--      en local, descomenta las dos líneas de abajo.
--    * Al final se añade el administrador de demostración que la
--      pantalla de login muestra públicamente.
--
--  Importar:
--    mysql -h HOST -P PUERTO -u USUARIO -p --ssl-mode=REQUIRED BASE < deportes_db_produccion.sql
-- =====================================================================

-- CREATE DATABASE IF NOT EXISTS `deportes_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE `deportes_db`;

SET NAMES utf8mb4;
SET time_zone = "+00:00";
SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

DROP TABLE IF EXISTS `equipo`;
CREATE TABLE IF NOT EXISTS `equipo` (
  `id_equipo` int NOT NULL AUTO_INCREMENT,
  `nombre_equipo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pais` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadio` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fundacion` year DEFAULT NULL,
  `entrenador` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_admin` int DEFAULT NULL,
  PRIMARY KEY (`id_equipo`),
  KEY `id_admin` (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id_equipo`, `nombre_equipo`, `pais`, `ciudad`, `estadio`, `fundacion`, `entrenador`, `id_admin`) VALUES
(1, 'Delfín SC', 'Ecuador', 'Manta', 'Estadio Jocay', '1989', 'Guillermo Duró', 1),
(2, 'LDU Portoviejo', 'Ecuador', 'Portoviejo', 'Estadio Reales Tamarindos', '1969', 'Humberto Pizarro', 1),
(3, 'Manta FC', 'Ecuador', 'Manta', 'Estadio Jocay', '1998', 'Efrén Mera', 1),
(4, 'Juventud Italiana', 'Ecuador', 'Manta', 'Estadio Complejo Tohallí', '1962', 'José Volkmar', 1),
(5, 'Grecia de Chone', 'Ecuador', 'Chone', 'Estadio Los Chonanas', '1986', 'Nandinho', 1),
(6, 'Politécnico de Manabí', 'Ecuador', 'Calceta', 'Estadio Complejo ESPAM', '2005', 'Carlos Ramón', 1),
(7, 'Universitario ULEAM', 'Ecuador', 'Manta', 'Estadio Universitario', '2010', 'Luis Alfonso', 1),
(8, 'Halcones de Jipijapa', 'Ecuador', 'Jipijapa', 'Estadio Arturo Zavala', '2015', 'Walter Gómez', 1),
(9, 'Atlético Manabí', 'Ecuador', 'Portoviejo', 'Estadio Reales Tamarindos', '2020', 'Marcos Zambrano', 1),
(10, 'Barcelona SC', 'Ecuador', 'Guayaquil', 'Estadio Monumental', '1925', 'Diego López', 1),
(11, 'Emelec', 'Ecuador', 'Guayaquil', 'Estadio George Capwell', '1929', 'Hernán Torres', 1),
(12, 'Liga de Quito', 'Ecuador', 'Quito', 'Estadio Rodrigo Paz Delgado', '1918', 'Paolo Guerrero', 1),
(13, 'Independiente del Valle', 'Ecuador', 'Sangolquí', 'Estadio Banco Guayaquil', '1958', 'Javier Gandolfi', 1),
(14, 'El Nacional', 'Ecuador', 'Quito', 'Estadio Olímpico Atahualpa', '1964', 'Ever Hugo Almeida', 1),
(15, 'Aucas', 'Ecuador', 'Quito', 'Estadio Gonzalo Pozo Ripalda', '1945', 'Gerardo Espinoza', 1),
(16, 'Universidad Católica', 'Ecuador', 'Quito', 'Estadio Olímpico Atahualpa', '1963', 'Jorge Célico', 1),
(17, 'Macará', 'Ecuador', 'Ambato', 'Estadio Bellavista', '1939', 'Alex Pallarés', 1),
(18, 'Técnico Universitario', 'Ecuador', 'Ambato', 'Estadio Bellavista', '1971', 'Paúl Vélez', 1),
(19, 'Mushuc Runa', 'Ecuador', 'Echaleche', 'Estadio Mushuc Runa COAC', '2003', 'Ever Hugo', 1),
(20, 'Deportivo Cuenca', 'Ecuador', 'Cuenca', 'Estadio Alejandro Serrano', '1971', 'Luis Zubeldía', 1),
(21, 'Orense SC', 'Ecuador', 'Machala', 'Estadio 9 de Mayo', '2009', 'Santiago Escobar', 1),
(22, 'Cumbayá FC', 'Ecuador', 'Quito', 'Estadio Olímpico Atahualpa', '2020', 'Norberto Araujo', 1),
(23, 'Libertad FC', 'Ecuador', 'Loja', 'Estadio Reina del Cisne', '2017', 'Geovanny Cumbicus', 1),
(24, 'Imbabura SC', 'Ecuador', 'Ibarra', 'Estadio Olímpico de Ibarra', '1993', 'Joe Armas', 1),
(25, 'San Antonio FC', 'Ecuador', 'Ibarra', 'Estadio Olímpico de Ibarra', '2022', 'Alex Aguinaga', 1),
(76, 'BARCELONA', 'ESPAÑA', 'MADRID', 'XD', '1994', 'YO PUES', 1),
(77, 'BARCELONA', 'ESPAÑA', 'MADRID', 'XD', '2001', 'YO PUES', 1),
(78, 'BARCELONAAAAAAA', 'ESPAÑA', 'MADRID', 'XD', '0000', 'YO PUES', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadistica_jugador`
--

DROP TABLE IF EXISTS `estadistica_jugador`;
CREATE TABLE IF NOT EXISTS `estadistica_jugador` (
  `id_estadistica` int NOT NULL AUTO_INCREMENT,
  `id_jugador` int NOT NULL,
  `id_torneo` int DEFAULT NULL,
  `partidos_jugados` int DEFAULT NULL,
  `goles` int DEFAULT NULL,
  `asistencias` int DEFAULT NULL,
  `minutos_jugados` int DEFAULT NULL,
  `tarjetas_amarillas` int DEFAULT NULL,
  `tarjetas_rojas` int DEFAULT NULL,
  `id_admin` int DEFAULT NULL,
  PRIMARY KEY (`id_estadistica`),
  KEY `id_jugador` (`id_jugador`),
  KEY `id_torneo` (`id_torneo`),
  KEY `id_admin` (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `estadistica_jugador`
--

INSERT INTO `estadistica_jugador` (`id_estadistica`, `id_jugador`, `id_torneo`, `partidos_jugados`, `goles`, `asistencias`, `minutos_jugados`, `tarjetas_amarillas`, `tarjetas_rojas`, `id_admin`) VALUES
(1, 1, 1, 10, 8, 3, 900, 2, 0, 1),
(2, 2, 2, 8, 4, 1, 720, 1, 0, 1),
(3, 3, 3, 12, 6, 2, 1080, 4, 1, 1),
(4, 4, 4, 5, 2, 4, 450, 0, 0, 1),
(5, 5, 5, 3, 0, 0, 270, 0, 0, 1),
(6, 6, 6, 14, 0, 0, 1260, 1, 0, 1),
(7, 7, 7, 9, 5, 6, 780, 2, 0, 1),
(8, 8, 8, 11, 7, 3, 910, 3, 0, 1),
(9, 9, 9, 6, 3, 0, 420, 0, 0, 1),
(10, 10, 10, 15, 2, 8, 1350, 5, 0, 1),
(11, 11, 11, 13, 1, 5, 1100, 2, 0, 1),
(12, 12, 12, 10, 0, 1, 900, 3, 1, 1),
(13, 13, 13, 8, 2, 0, 720, 1, 0, 1),
(14, 14, 14, 4, 0, 0, 360, 0, 0, 1),
(15, 15, 15, 12, 1, 4, 1050, 4, 0, 1),
(16, 16, 16, 7, 0, 2, 580, 2, 0, 1),
(17, 17, 17, 11, 3, 3, 940, 1, 0, 1),
(18, 18, 18, 14, 1, 2, 1200, 6, 0, 1),
(19, 19, 19, 9, 4, 4, 710, 0, 0, 1),
(20, 20, 20, 5, 2, 1, 390, 1, 0, 1),
(21, 21, 21, 3, 1, 0, 180, 0, 0, 1),
(22, 22, 22, 10, 3, 5, 820, 2, 0, 1),
(23, 23, 23, 12, 9, 1, 1010, 1, 0, 1),
(24, 24, 24, 8, 4, 0, 640, 2, 1, 1),
(25, 25, 25, 6, 2, 1, 480, 0, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugador`
--

DROP TABLE IF EXISTS `jugador`;
CREATE TABLE IF NOT EXISTS `jugador` (
  `id_jugador` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pais` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estatura` decimal(4,2) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `sexo` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dorsal` int DEFAULT NULL,
  `id_equipo` int DEFAULT NULL,
  `id_posicion` int DEFAULT NULL,
  `id_admin` int DEFAULT NULL,
  PRIMARY KEY (`id_jugador`),
  KEY `id_equipo` (`id_equipo`),
  KEY `id_posicion` (`id_posicion`),
  KEY `id_admin` (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `jugador`
--

INSERT INTO `jugador` (`id_jugador`, `nombre`, `pais`, `estatura`, `fecha_nacimiento`, `sexo`, `dorsal`, `id_equipo`, `id_posicion`, `id_admin`) VALUES
(1, 'Carlos Garcés', 'Ecuador', 1.83, '1990-03-20', 'Masculino', 9, 1, 3, 1),
(2, 'Jaime Ayoví', 'Ecuador', 1.85, '1988-02-21', 'Masculino', 17, 2, 3, 1),
(3, 'Roberto Ordóñez', 'Ecuador', 1.86, '1985-05-10', 'Masculino', 11, 3, 3, 1),
(4, 'Junior Sornoza', 'Ecuador', 1.70, '1994-01-28', 'Masculino', 10, 4, 2, 1),
(5, 'Pedro Ortiz', 'Ecuador', 1.88, '1990-02-19', 'Masculino', 1, 5, 1, 1),
(6, 'Alexander Domínguez', 'Ecuador', 1.95, '1987-06-05', 'Masculino', 22, 6, 1, 1),
(7, 'Kendry Páez', 'Ecuador', 1.77, '2007-05-04', 'Masculino', 16, 7, 2, 1),
(8, 'Janner Corozo', 'Ecuador', 1.75, '1995-09-08', 'Masculino', 13, 8, 2, 1),
(9, 'Allen Obando', 'Ecuador', 1.84, '2006-06-13', 'Masculino', 9, 9, 3, 1),
(10, 'Moises Caicedo', 'Ecuador', 1.78, '2001-11-02', 'Masculino', 8, 10, 2, 1),
(11, 'Pervis Estupiñán', 'Ecuador', 1.75, '1998-01-21', 'Masculino', 6, 11, 4, 1),
(12, 'Piero Hincapié', 'Ecuador', 1.84, '2002-01-09', 'Masculino', 3, 12, 4, 1),
(13, 'Félix Torres', 'Ecuador', 1.87, '1997-01-11', 'Masculino', 2, 13, 4, 1),
(14, 'Willian Pacho', 'Ecuador', 1.86, '2001-10-16', 'Masculino', 4, 14, 4, 1),
(15, 'Angelo Preciado', 'Ecuador', 1.74, '1998-02-18', 'Masculino', 17, 15, 4, 1),
(16, 'Carlos Gruezo', 'Ecuador', 1.71, '1995-04-19', 'Masculino', 5, 16, 2, 1),
(17, 'Alan Franco', 'Ecuador', 1.74, '1998-08-21', 'Masculino', 21, 17, 2, 1),
(18, 'Joao Ortiz', 'Ecuador', 1.73, '1996-05-01', 'Masculino', 15, 18, 2, 1),
(19, 'Angel Mena', 'Ecuador', 1.68, '1988-01-21', 'Masculino', 14, 19, 2, 1),
(20, 'John Yeboah', 'Ecuador', 1.70, '2000-06-23', 'Masculino', 9, 20, 2, 1),
(21, 'Jeremy Sarmiento', 'Ecuador', 1.78, '2002-06-16', 'Masculino', 10, 21, 2, 1),
(22, 'Gonzalo Plata', 'Ecuador', 1.78, '2000-11-01', 'Masculino', 19, 22, 2, 1),
(23, 'Enner Valencia', 'Ecuador', 1.77, '1989-11-04', 'Masculino', 13, 23, 3, 1),
(24, 'Kevin Rodríguez', 'Ecuador', 1.80, '1997-03-04', 'Masculino', 11, 24, 3, 1),
(25, 'Jordy Caicedo', 'Ecuador', 1.87, '1997-11-18', 'Masculino', 7, 25, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login_administrador`
--

DROP TABLE IF EXISTS `login_administrador`;
CREATE TABLE IF NOT EXISTS `login_administrador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cedula` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contrasena` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre_completo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `correo` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cedula` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `login_administrador`
--

INSERT INTO `login_administrador` (`id`, `cedula`, `contrasena`, `nombre_completo`, `fecha_nacimiento`, `correo`, `telefono`) VALUES
(1, '2300348592', '$2a$12$77lrn8wOPEQfNbj3y5xb7eqcBjBXlWH8MW9zaYJ87r5sfdGaf4Oui', 'sam123', '2001-01-20', 'sam@example.com', '0998765432'),
(2, '1737056677', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Antonio Martínez Martínez', '1993-11-19', 'antonio.martínez38@gmail.com', '0975977464'),
(3, '2400344708', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Daniel Díaz Gómez', '1983-07-03', 'daniel.díaz54@gmail.com', '0905682967'),
(4, '0824073298', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Laura Torres Mendoza', '2004-06-18', 'laura.torres82@epn.edu.ec', '0907938665'),
(5, '2141775765', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Fernando Cruz Gómez', '2002-03-28', 'fernando.cruz35@epn.edu.ec', '0998726671'),
(6, '0946928224', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Pedro Jiménez Pérez', '1998-08-11', 'pedro.jiménez85@epn.edu.ec', '0983797867'),
(7, '0158587019', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Daniel Herrera Ruiz', '1987-09-25', 'daniel.herrera52@uleam.edu.ec', '0976901582'),
(8, '0618727609', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Jessica Jiménez Morales', '1987-08-19', 'jessica.jiménez23@yahoo.com', '0972141946'),
(9, '1853767559', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Ana Pérez Jiménez', '1997-06-09', 'ana.pérez16@hotmail.com', '0909918960'),
(10, '1314929938', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Sebastián Martínez Moreno', '1996-11-20', 'sebastián.martínez19@hotmail.com', '0924149175'),
(11, '0729669461', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Laura Herrera García', '1984-06-16', 'laura.herrera60@epn.edu.ec', '0989068499'),
(12, '0726232664', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Paula Aguilar Vargas', '2002-12-05', 'paula.aguilar48@yahoo.com', '0926472934'),
(13, '0402772744', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Fernando Romero Morales', '1994-08-05', 'fernando.romero20@gmail.com', '0947920341'),
(14, '1930103608', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Diana López García', '1984-05-18', 'diana.lópez65@epn.edu.ec', '0972357893'),
(15, '1619431763', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Alejandro Gómez Torres', '1983-08-21', 'alejandro.gómez76@gmail.com', '0989628514'),
(16, '0526109156', '$2a$12$6HRk3iJmxBTOeDm2F7A1QOIVy7JC0gfodFAkpqLnWCLDaFGoYurX6', 'Mateo Torres Jiménez', '1997-08-26', 'mateo.torres10@epn.edu.ec', '0947311945');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posicion`
--

DROP TABLE IF EXISTS `posicion`;
CREATE TABLE IF NOT EXISTS `posicion` (
  `id_posicion` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_posicion`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `posicion`
--

INSERT INTO `posicion` (`id_posicion`, `nombre`) VALUES
(1, 'Portero'),
(2, 'Defensa Central'),
(3, 'Lateral Derecho'),
(4, 'Lateral Izquierdo'),
(5, 'Mediocentro Defensivo'),
(6, 'Mediocentro Ofensivo'),
(7, 'Extremo Derecho'),
(8, 'Extremo Izquierdo'),
(9, 'Delantero Centro'),
(10, 'Interior Derecho'),
(11, 'Interior Izquierdo'),
(12, 'Mediapunta'),
(13, 'Libero'),
(14, 'Carrilero'),
(15, 'Falso 9'),
(16, 'Portero Suplente'),
(17, 'Defensa Suplente'),
(18, 'Medio Suplente'),
(19, 'Delantero Suplente'),
(20, 'Capitán'),
(21, 'Especialista Faltas'),
(22, 'Juvenil'),
(23, 'Invitado'),
(24, 'Prueba'),
(25, 'Leyenda');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `torneo`
--

DROP TABLE IF EXISTS `torneo`;
CREATE TABLE IF NOT EXISTS `torneo` (
  `id_torneo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pais_sede` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `estado` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'Pendiente',
  `id_admin` int DEFAULT NULL,
  PRIMARY KEY (`id_torneo`),
  KEY `id_admin` (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=1003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `torneo`
--

INSERT INTO `torneo` (`id_torneo`, `nombre`, `tipo`, `pais_sede`, `fecha_inicio`, `fecha_fin`, `estado`, `id_admin`) VALUES
(1, 'Copa cabana', 'Liga', 'Ecuador', '2026-01-10', '2026-05-20', 'Activo', 1),
(2, 'Inter-Facultades ULEAM', 'Eliminatoria', 'Ecuador', '2026-06-01', '2026-07-15', 'Pendiente', 1),
(3, 'Liga Pro Ecuador', 'Liga', 'Ecuador', '2026-02-15', '2026-11-30', 'Activo', 1),
(4, 'Copa Manta Centenario', 'Eliminatoria', 'Ecuador', '2026-06-10', '2026-07-20', 'Pendiente', 1),
(5, 'Torneo Relámpago FACCO', 'Amistoso', 'Ecuador', '2026-05-15', '2026-05-18', 'Activo', 1),
(6, 'Liga Universitaria ULEAM', 'Liga', 'Ecuador', '2026-07-01', '2026-12-15', 'Pendiente', 1),
(7, 'Copa El Diario Manabí', 'Eliminatoria', 'Ecuador', '2026-08-05', '2026-10-30', 'Pendiente', 1),
(8, 'Inter-Carreras Ingeniería', 'Liga', 'Ecuador', '2026-02-20', '2026-04-10', 'inactivo', 1),
(9, 'Copa Tricolor Nacional', 'Liga', 'Ecuador', '2026-03-01', '2026-11-15', 'Activo', 1),
(10, 'Torneo Provincial Manabita', 'Eliminatoria', 'Ecuador', '2026-09-12', '2026-12-01', 'Pendiente', 1),
(11, 'Copa de la Costa', 'Amistoso', 'Ecuador', '2026-01-05', '2026-01-25', 'inactivo', 1),
(12, 'Automovilismo Portoviejo', 'Liga', 'Ecuador', '2026-05-01', '2026-08-30', 'Activo', 1),
(13, 'Challenger Chone 2026', 'Eliminatoria', 'Ecuador', '2026-10-10', '2026-11-20', 'Pendiente', 1),
(14, 'Copa Fundadores ULEAM', 'Amistoso', 'Ecuador', '2026-11-01', '2026-11-05', 'Pendiente', 1),
(15, 'Liga Inter-Facultades Salud', 'Liga', 'Ecuador', '2026-06-15', '2026-09-15', 'Pendiente', 1),
(16, 'Torneo Integración Jipijapa', 'Amistoso', 'Ecuador', '2026-04-10', '2026-04-12', 'inactivo', 1),
(17, 'Copa San Gregorio', 'Eliminatoria', 'Ecuador', '2026-07-25', '2026-09-05', 'Pendiente', 1),
(18, 'Liga de Filiales Manabí', 'Liga', 'Ecuador', '2026-03-10', '2026-08-15', 'Activo', 1),
(19, 'Copa Ciudad de Montecristi', 'Eliminatoria', 'Ecuador', '2026-08-20', '2026-10-10', 'Pendiente', 1),
(20, 'Torneo Nocturno Calceta', 'Amistoso', 'Ecuador', '2026-05-02', '2026-06-02', 'Activo', 1),
(21, 'Supercopa Ecuador 2026', 'Eliminatoria', 'Ecuador', '2026-02-01', '2026-02-15', 'inactivo', 1),
(22, 'Copa Eloy Alfaro', 'Liga', 'Ecuador', '2026-06-05', '2026-11-25', 'Pendiente', 1),
(23, 'Inter-Clubes Bahía', 'Amistoso', 'Ecuador', '2026-07-12', '2026-07-15', 'Pendiente', 1),
(24, 'Copa San Vicente', 'Liga', 'Ecuador', '2026-05-01', '2026-07-01', 'Activo', 1),
(25, 'Liga Pro Serie A', 'Amistoso', 'Ecuador', '2026-12-01', '2026-12-05', 'inactivo', 1),
(1002, 'sasasas', 'sasasas', 'sasasa', '2026-07-02', '2026-08-01', 'sasasas', 4);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD CONSTRAINT `equipo_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `login_administrador` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `estadistica_jugador`
--
ALTER TABLE `estadistica_jugador`
  ADD CONSTRAINT `estadistica_jugador_ibfk_1` FOREIGN KEY (`id_jugador`) REFERENCES `jugador` (`id_jugador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `estadistica_jugador_ibfk_2` FOREIGN KEY (`id_torneo`) REFERENCES `torneo` (`id_torneo`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `estadistica_jugador_ibfk_3` FOREIGN KEY (`id_admin`) REFERENCES `login_administrador` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `jugador`
--
ALTER TABLE `jugador`
  ADD CONSTRAINT `jugador_ibfk_1` FOREIGN KEY (`id_equipo`) REFERENCES `equipo` (`id_equipo`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `jugador_ibfk_2` FOREIGN KEY (`id_posicion`) REFERENCES `posicion` (`id_posicion`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `jugador_ibfk_3` FOREIGN KEY (`id_admin`) REFERENCES `login_administrador` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `torneo`
--
ALTER TABLE `torneo`
  ADD CONSTRAINT `torneo_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `login_administrador` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;


-- --------------------------------------------------------
--
-- Administrador de demostración publicado en la pantalla de login
--   Cédula:     1000000000
--   Contraseña: Demo1234
-- El hash es bcrypt con coste 12. Para cambiarlo usa `npm run seed:demo`
-- en el backend con otras variables DEMO_ADMIN_*.
--

INSERT INTO `login_administrador`
    (`cedula`, `contrasena`, `nombre_completo`, `fecha_nacimiento`, `correo`, `telefono`)
VALUES
    ('1000000000',
     '$2b$12$ghBYabM3W.twBdPkJ0q24ucxOF2T7VM0AaaWarZ2UBXCIvR4vi6UC',
     'Usuario Demo',
     '2000-01-01',
     'demo@ejemplo.com',
     '0000000000')
ON DUPLICATE KEY UPDATE
    `contrasena` = VALUES(`contrasena`),
    `nombre_completo` = VALUES(`nombre_completo`);

SET FOREIGN_KEY_CHECKS = 1;

-- Comprobación rápida tras importar:
--   SELECT 'equipo' t, COUNT(*) n FROM equipo
--   UNION ALL SELECT 'jugador', COUNT(*) FROM jugador
--   UNION ALL SELECT 'torneo', COUNT(*) FROM torneo
--   UNION ALL SELECT 'login_administrador', COUNT(*) FROM login_administrador
--   UNION ALL SELECT 'posicion', COUNT(*) FROM posicion
--   UNION ALL SELECT 'estadistica_jugador', COUNT(*) FROM estadistica_jugador;
