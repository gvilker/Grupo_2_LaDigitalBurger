-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2023 a las 23:16:27
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `digital_burger_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `user_Id` varchar(36) NOT NULL,
  `product_Id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `totalPrice` decimal(10,2) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `user_Id`, `product_Id`, `quantity`, `created_at`, `totalPrice`, `updated_at`) VALUES
(23, '980c417d-bd89-4db8-9176-2af3f7d8a2db', 6, 3, '2023-11-11 19:22:30', 13500.00, '2023-11-11 19:22:59'),
(24, '980c417d-bd89-4db8-9176-2af3f7d8a2db', 15, 4, '2023-11-11 19:23:24', 20800.00, '2023-11-11 19:23:24'),
(25, 'e9e4f972-87cf-47ca-929e-bb9c016af460', 15, 2, '2023-11-11 19:31:47', 10400.00, '2023-11-11 19:31:47'),
(26, 'e9e4f972-87cf-47ca-929e-bb9c016af460', 13, 1, '2023-11-11 19:36:05', 4750.00, '2023-11-11 19:36:05'),
(27, 'f3bdf97e-12df-450e-b742-056f02745e64', 14, 1, '2023-11-11 19:36:40', 5250.00, '2023-11-11 19:36:40'),
(28, 'f3bdf97e-12df-450e-b742-056f02745e64', 9, 1, '2023-11-11 19:36:55', 3900.00, '2023-11-11 19:36:55'),
(29, '945c2780-3295-4486-95a8-434a5979ea84', 11, 2, '2023-11-11 19:37:22', 9380.00, '2023-11-11 19:37:22'),
(30, 'b4de7c24-4927-4e46-824d-f1743cace1ec', 12, 1, '2023-11-11 19:37:56', 4500.00, '2023-11-11 19:37:56'),
(31, 'b4de7c24-4927-4e46-824d-f1743cace1ec', 8, 1, '2023-11-11 19:38:04', 4750.00, '2023-11-11 19:38:04'),
(32, '5666951d-e71f-4206-bef5-8716661bf70b', 18, 2, '2023-11-11 19:38:31', 40.00, '2023-11-11 19:38:31'),
(33, 'abfd35c0-9d12-4335-8726-d30bb44493b1', 10, 1, '2023-11-11 19:39:29', 4860.00, '2023-11-11 19:39:29'),
(34, '8beb7dff-635a-4d63-a8c5-ccfa8d9e8946', 13, 2, '2023-11-11 19:40:05', 9500.00, '2023-11-11 19:40:05'),
(35, '2146fc0b-0478-4f2d-b264-047e0476cd8c', 11, 2, '2023-11-11 19:40:41', 9380.00, '2023-11-11 19:40:41'),
(36, '2146fc0b-0478-4f2d-b264-047e0476cd8c', 8, 2, '2023-11-11 19:40:50', 9500.00, '2023-11-11 19:40:50'),
(37, 'c340c39b-63e8-46a6-aaed-6e1bb88720f9', 16, 1, '2023-11-11 19:41:51', 4900.00, '2023-11-11 19:41:51'),
(38, 'c340c39b-63e8-46a6-aaed-6e1bb88720f9', 12, 1, '2023-11-11 19:42:15', 4500.00, '2023-11-11 19:42:15'),
(39, 'c340c39b-63e8-46a6-aaed-6e1bb88720f9', 6, 2, '2023-11-11 19:42:27', 9000.00, '2023-11-11 19:42:27'),
(40, 'c5da9bc0-0e33-49ab-ab86-fa645365bd87', 17, 2, '2023-11-11 19:43:28', 9600.00, '2023-11-11 19:43:28'),
(41, 'c5da9bc0-0e33-49ab-ab86-fa645365bd87', 7, 2, '2023-11-11 19:43:35', 9900.00, '2023-11-11 19:43:35'),
(42, '5fc66609-e314-42cb-9e76-28ca5152adeb', 8, 1, '2023-11-11 19:44:00', 4750.00, '2023-11-11 19:44:00'),
(43, '5fc66609-e314-42cb-9e76-28ca5152adeb', 9, 2, '2023-11-11 19:44:07', 7800.00, '2023-11-11 19:44:07'),
(44, 'dd2b17cf-1dab-48e1-9e35-47b5e1a3e2e9', 13, 2, '2023-11-11 19:45:22', 9500.00, '2023-11-11 19:45:22'),
(45, 'dd2b17cf-1dab-48e1-9e35-47b5e1a3e2e9', 11, 2, '2023-11-11 19:45:35', 9380.00, '2023-11-11 19:45:35'),
(46, '00c657b6-1555-42ab-9bb0-78d033dad1a8', 6, 1, '2023-11-11 19:46:15', 4500.00, '2023-11-11 19:46:15'),
(47, '00c657b6-1555-42ab-9bb0-78d033dad1a8', 13, 4, '2023-11-11 19:46:23', 19000.00, '2023-11-11 19:46:23'),
(48, '00c657b6-1555-42ab-9bb0-78d033dad1a8', 18, 3, '2023-11-11 19:46:32', 60.00, '2023-11-11 19:46:32'),
(49, '35b77f5a-6031-41a0-8bc7-609969056fee', 12, 2, '2023-11-11 19:47:19', 9000.00, '2023-11-11 19:47:19'),
(50, '35b77f5a-6031-41a0-8bc7-609969056fee', 16, 1, '2023-11-11 19:47:27', 4900.00, '2023-11-11 19:47:27'),
(51, '35b77f5a-6031-41a0-8bc7-609969056fee', 9, 2, '2023-11-11 19:47:36', 7800.00, '2023-11-11 19:47:36'),
(52, '8d2bb6ec-19ce-4c7f-b0fc-415930e5cc6f', 14, 2, '2023-11-11 19:48:00', 10500.00, '2023-11-11 19:48:00'),
(53, '8d2bb6ec-19ce-4c7f-b0fc-415930e5cc6f', 9, 4, '2023-11-11 19:48:09', 15600.00, '2023-11-11 19:48:09'),
(54, 'ee004127-9ea8-4c88-b1cb-d58c7603b3c0', 8, 1, '2023-11-15 03:06:04', 4750.00, '2023-11-15 03:06:04'),
(55, '94f73f72-2374-4ce1-9829-b36e944e0676', 6, 1, '2023-11-17 01:28:54', 4500.00, '2023-11-17 01:28:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`) VALUES
(2, 'Cosme Fulanito', 'cosme@hotmail.com', 'Esas hamburguesas están tremendas!! '),
(3, ' Juan Pérez', 'juan.perez@gmail.com', 'Las hamburguesas son increíbles! Me encanta el sabor y la variedad.'),
(4, 'María Rodríguez', 'maria.rodriguez@yahoo.com', 'Fui con mis amigos y disfrutamos mucho de la comida! Definitivamente volveremos.'),
(5, 'Carlos Gómez', 'carlos.gomez@hotmail.com', 'La experiencia en DigitalBurger fue genial. Las hamburguesas son deliciosas y el servicio es excelente.'),
(6, 'Laura Martínez', 'laura.martinez@gmail.com', '¿Tienen alguna promoción especial para cumpleaños? Estamos planeando una celebración y nos encantaría incluir sus deliciosas hamburguesas.'),
(7, 'Diego Sánchez', 'diego.sanchez@yahoo.com', 'Me encantó la última vez que estuve en DigitalBurger, pero me preguntaba si tienen opciones vegetarianas. ¿Ofrecen alguna hamburguesa vegetariana en su menú?'),
(8, 'Carolina López', 'carolina.lopez@hotmail.com', 'Cuál es su hamburguesa más picante? Me encantan las cosas con un toque de picante y estoy buscando algo emocionante.'),
(9, 'Javier Torres', 'javier.torres@gmail.com', '¿Tienen opciones sin gluten en su menú? Mi amigo tiene intolerancia al gluten y estamos buscando un lugar para cenar juntos.'),
(10, 'Ana Rodríguez', 'ana.rodriguez@yahoo.com', 'Ofrecen servicio a domicilio? A veces, prefiero disfrutar de sus hamburguesas desde la comodidad de mi hogar.'),
(11, 'Martín Gutiérrez', 'martin.gutierrez@gmail.com', 'Hola, ¿tienen alguna opción de hamburguesa con ingredientes locales o algún toque especial de la región? Estoy interesado en probar algo auténtico.'),
(12, 'Paula Martínez', 'paula.martinez@yahoo.com', '¿Cuál es su hamburguesa más popular entre los clientes? Estoy buscando recomendaciones para mi próxima visita.'),
(13, 'Alejandro Ramírez', 'alejandro.ramirez@hotmail.com', ' ¿Tienen algún programa de lealtad o membresía para clientes frecuentes? Me encanta su comida y siempre estoy buscando formas de obtener beneficios adicionales.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `calories` int(11) DEFAULT NULL,
  `fat` int(11) DEFAULT NULL,
  `protein` int(11) DEFAULT NULL,
  `carbohydrates` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `spicy` tinyint(1) DEFAULT NULL,
  `additional_ingredients` varchar(255) DEFAULT NULL,
  `suggested_Acompaniments` varchar(255) DEFAULT NULL,
  `additional_Information` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `calories`, `fat`, `protein`, `carbohydrates`, `size`, `spicy`, `additional_ingredients`, `suggested_Acompaniments`, `additional_Information`) VALUES
(6, 'The EJS Burger Stack', 'Una hamburguesa con múltiples capas de ingredientes', 4500.00, '/images/products/1695134452753-EJS Burger Stack.jpg', 295, 4, 11, 24, 195, 0, 'Queso', 'Papas asadas', ''),
(7, 'Crispy CSS Cruncher', 'Una hamburguesa con bacon crujiente y una presentación inspirada en hojas de estilo CSS.', 4950.00, '/images/products/1695134687481-Crispy CSS Cruncher2.png', 16, 5, 17, 32, 235, 1, 'Salsa de ajo y hierbas', 'Nachos con queso', ''),
(8, 'JavaScript Jalapeño Joy', 'Una hamburguesa picante con jalapeños y sabores que despiertan tus sentidos', 4750.00, '/images/products/1695134941667-JavaScript JalapeÃ±o Joy.png', 13, 4, 16, 22, 210, 1, 'Aguacate', 'Salsa y patatas fritas', ''),
(9, 'HTML Classic Patty', 'Una hamburguesa clásica y sencilla', 3900.00, '/images/products/1695135074640-HTML Classic Patty.jpg', 12, 4, 12, 19, 190, 0, 'Lechuga y tomate', 'Papas fritas', ''),
(10, 'JS Slider Burger', 'Una hamburguesa con carne jugosa y una salsa deslizante.', 4860.00, '/images/products/1695135204279-The JS Slider Burger.png', 16, 6, 17, 29, 250, 1, 'Lechuga y tomate', 'Salsa de arándanos', ''),
(11, 'CSS3 Cheese Melt', 'Una hamburguesa con queso derretido que se inspira en las animaciones de transición CSS3.', 4690.00, '/images/products/1695135320728-CSS Cheese Melt.jpg', 15, 4, 16, 22, 220, 1, 'Queso de cabra', 'Palitos de vegetales', ''),
(12, 'Vanilla JS Burger', 'Una hamburguesa simple, sin ingredientes extravagantes.', 4500.00, '/images/products/1695135407975-Vanilla JS Burger.jpg', 14, 4, 13, 24, 210, 0, 'Lechuga y tomate', 'Papas fritas', ''),
(13, 'Flexbox Feast', 'Una hamburguesa que combina ingredientes en un diseño flexible.', 4750.00, '/images/products/1695135692182-flexbox Feast.jpg', 14, 4, 16, 25, 225, 1, 'Salsa de aguacate', 'Maíz a la parrilla', ''),
(14, 'HTML5 Hawaiian Delight', 'Una hamburguesa tropical con piña y sabores innovadores.', 5250.00, '/images/products/1695135798753-HTML5 Hawaiian Delight.jpg', 18, 6, 18, 30, 265, 1, 'Salsa de ajo y hierbas', 'Aros de cebolla', ''),
(15, 'IA Burger', 'Una hamburguesa \"inteligente\" con ingredientes sorprendentes y sabores innovadores.', 5200.00, '/images/products/1695135996961-OIG.mgLG1DWPjJtXEfp.jpg', 14, 5, 16, 21, 200, 0, 'Salsa de mostaza y miel', 'Batatas fritas o asadas', ''),
(16, 'Robot Roaster', 'Una hamburguesa con carne asada a la parrilla.', 4900.00, '/images/products/1695136091336-Robot-Roaster---Una-hamburguesa-con-carne-asada-a-la-parrilla--inspirada-en-robots-y-su-precisi-n-.png', 15, 6, 15, 22, 195, 0, 'Queso', 'Papas fritas', ''),
(17, 'Quantum Cheesebruger', 'Una hamburguesa que combina texturas y sabores en un estado cuántico.', 4800.00, '/images/products/1695136301149-Quantum-Cheeseburger---Una-hamburguesa-que-combina-sabores-y-texturas-en-un-estado-cu-ntico- (1).png', 16, 6, 18, 26, 205, 1, 'Lechuga y tomate', 'Coleslaw', ''),
(18, 'Digital Full Stack', 'La hamburguesa \"Digital Full Stack\" es una deliciosa creación que combina sabores argentinos con un toque contemporáneo. Esta hamburguesa es una experiencia culinaria única que seguramente te dejará con ganas de más.', 2950.00, '/images/products/1697589060858-1697480865278-Dig_FULL_STACK.jpg', 1600, 60, 80, 900, 200, 0, 'queso provolone, chedar. Bacon', 'Papas fritas crujientes, salsa de ajo, cerveza artesanal.', ''),
(30, 'Termolar', 'fdsfdsafdsafdsa', 100.00, '/images/products/1700184143228-1694611134553_img.jpg', 100, 100, 0, 0, 0, 0, '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` varchar(45) NOT NULL,
  `name` varchar(100) NOT NULL,
  `alias` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `user_type` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `alias`, `email`, `password`, `avatar`, `user_type`) VALUES
('00c657b6-1555-42ab-9bb0-78d033dad1a8', 'Usuario15', 'User_15', 'user_15@example.com.ar', '$2b$10$SKA4rrnjcfi9EQMUSwlr0OqcKn3WGcGGCxGvF0TXFQ7nZNT2g1fYq', '1695130419573_img.jpg', 1),
('0a450899-8380-4382-a5f1-086cdf2a103e', 'Usuario24', 'User_24', 'user_24@example.com.ar', '$2b$10$.9qeoSXJXYpETNQ.4I5zWuubRCf8jv/l5U0BrmKGCxP71BuBLm6sS', '1695130647529_img.jpg', 1),
('0e349954-dab3-49b5-b706-9fb6cb7b165a', 'Usuario26', 'User_26', 'user_26@example.com.ar', '$2b$10$yneigxXs9WLH3zExFXbKHO2iIIVaJN/D7D5Y/v5w1Ie31NzeUxnqC', '1695130687677_img.jpg', 1),
('1f2967ec-1b68-40f3-8cf2-af03edae29bd', 'Usuario21', 'User_21', 'user_21@example.com.ar', '$2b$10$pleVIi5eOI0Ddw6IqaztJuAIZSxj0S4QogHoqrd0EtiYL0QldUBnG', '1695130574079_img.jpg', 1),
('2146fc0b-0478-4f2d-b264-047e0476cd8c', 'Usuario9', 'User_9', 'user_9@example.com.ar', '$2b$10$DDzg3TkRZVqdz6RgZTa16uvnS9i3q4h6Da1PO8X8FXgGg714DO3rm', '1695060332038_img.jpg', 1),
('28f41a4c-36ff-4402-946d-ba62342e2c2f', 'Usuario23', 'User_23', 'user_23@example.com.ar', '$2b$10$2A4rnXkVKBh/h/BoUOYX7eCjWJ2hjA7QGgkaV.ejkQ5dKri0MO4wW', '1695130626910_img.jpg', 1),
('35b77f5a-6031-41a0-8bc7-609969056fee', 'Usuario16', 'User_16', 'user_16@example.com.ar', '$2b$10$zbzDHCYN0g/NRoyyaKGmj.6hk9FTalYCOhnS4w3pt4apJ8465muZG', '1695130454296_img.jpg', 1),
('40ced810-0c04-40d4-8833-94b1c3a64e90', 'Usuario20', 'User_20', 'user_20@example.com.ar', '$2b$10$tMt0u.7hae6SyRQ1nfN47uIfWMwruPsYiuBfm7crbiX.iTj0rAPgO', '1695130552102_img.jpg', 1),
('414057c3-3460-46cc-ae39-703b1d737e8b', 'Usuario25', 'User_25', 'user_25@example.com.ar', '$2b$10$oD11yo1oA.cAgOtfOTXbxuFMXGyIhvbaWpAHSdWMNuJgp/zBLlxHS', '1695130668365_img.jpg', 1),
('4718cd88-68e4-4646-8d2f-b8f9d0016d29', 'Usuario19', 'User_19', 'user_19@example.com.ar', '$2b$10$eNa9XR5ybwih4hVcfZ6IQerLxjJLeyS2PVG6pucA2x4IBBNNHSsY2', '1695130526790_img.jpg', 1),
('4fae5682-2563-4e8f-a7bd-41223404cd9c', 'Usuario22', 'User_22', 'user_22@example.com.ar', '$2b$10$xatqaFnJjSRr8/LS9m4mr.iabldJnI/ZFuzZ7Cr6Wl5yq0VNywRZ6', '1695130600958_img.jpg', 1),
('5666951d-e71f-4206-bef5-8716661bf70b', 'Usuario5', 'User_5', 'user_5@example.com.ar', '$2b$10$aNc2pZJpe08rLGVU6XXwOuBXixl21gvDna6G2XZlNP35/HGj7YXuW', '1695060077590_img.jpg', 1),
('57648de0-0f05-4a9a-9e9a-3167eabaadc6', 'Usuario29', 'User_29', 'user_29@example.com.ar', '$2b$10$hE8KK9Hz4iGFdRnWi/wlJedhZm4.BQ2Lph0LNVxxVH3ifkf05HIdu', '1695130749542_img.jpg', 1),
('5fc66609-e314-42cb-9e76-28ca5152adeb', 'Usuario13', 'User_13', 'user_13@example.com.ar', '$2b$10$t7L/.Lwmb3aHTWtVYd/wje1Phad/3Jrg7.l..AgZuNJfS8NxIMrG.', '1695130313224_img.jpg', 1),
('7db36adb-ea4a-4867-907f-8cc64c800a4d', 'Usuario27', 'User_27', 'user_27@example.com.ar', '$2b$10$5WQYHWOcVmCK4sSCsM2A3enVs0kmAtz7Ximc88AZn0ZtRQ5PaGdLq', '1695130709381_img.jpg', 1),
('8beb7dff-635a-4d63-a8c5-ccfa8d9e8946', 'Usuario8', 'User_8', 'user_8@example.com.ar', '$2b$10$Zp4zKahVoeW9TN1UQHbnL.wSqCMHJi3j03QHF1UTe6GlkzIpsil9y', '1695060291991_img.jpg', 1),
('8d2bb6ec-19ce-4c7f-b0fc-415930e5cc6f', 'Usuario17', 'User_17', 'user_17@example.com.ar', '$2b$10$h8DMRPaw9mqEr2nx/4ylh.xSyEqZII2H7irjgyaBu38OwC3Yg6DK2', '1695130482749_img.jpg', 1),
('945c2780-3295-4486-95a8-434a5979ea84', 'Usuario3', 'User_3', 'user_3@example.com.ar', '$2b$10$ry95Mihrq5Kn1wr0Wgam7uFJMBpI8D5GxkXNpF2sPVF8hvFmfxw2S', '1695059988029_img.jpg', 1),
('94f73f72-2374-4ce1-9829-b36e944e0676', 'Cosme Fulanito', 'El Cosme', 'cosme@gmail.com', '$2b$10$5J7/j4tIfF3KfO1.bT5GSuwmSDV/0.FRBONaxquBzHQmOewZJ6GPq', '1700184291604_img.jpg', 1),
('980c417d-bd89-4db8-9176-2af3f7d8a2db', 'Usuario11', 'User_11', 'user_11@example.com.ar', '$2b$10$HUOoRFwNSgnJo6DbykzvS.gGNxqbq/svZy.PAB55INQKKnYM/wqDa', '1695129670173_img.jpg', 1),
('abfd35c0-9d12-4335-8726-d30bb44493b1', 'Usuario7', 'User_7', 'user_7@example.com.ar', '$2b$10$mOl3nKFA/O.o.6xFu4jnue.Vg.ppqP84dt2nKqjwv4Ds4.1IWydIm', '1695060260366_img.jpg', 1),
('b4de7c24-4927-4e46-824d-f1743cace1ec', 'Usuario4', 'User_4', 'user_4@example.com.ar', '$2b$10$PAjZL/DXXQQhazugY1R8xOWs0JflgmwZDO.9xBjK/r9OKgADe8RhC', '1695060023678_img.jpg', 1),
('c340c39b-63e8-46a6-aaed-6e1bb88720f9', 'Usuario10', 'User_10', 'user_10@example.com.ar', '$2b$10$qB3rFd3sCxAzN/Zm/MgN4.FLCRoHxND7tbN20A1wrIAYsPAuvicfy', '1695060364043_img.jpg', 2),
('c5da9bc0-0e33-49ab-ab86-fa645365bd87', 'Usuario12', 'User_12', 'user_12@example.com.ar', '$2b$10$jsGSMDeN62z3ljTSSqSXNuxvY4.qFohI3lxM5r2c6RxYLjIGy416i', '1695130275817_img.jpg', 1),
('ce7d7e03-4935-4750-b0b9-bb354e6f9ea2', 'Usuario6', 'User_6', 'user6@gmail.com', '$2b$10$37oSdTU7XtEWqg512yjyl.lYSJeAwYHK4oxdhJORxfhbW3y//OMSO', '1695060224813_img.jpg', 1),
('ceb58e35-b7e5-4e05-bbad-b5517cee5f5a', 'Usuario18', 'User_18', 'user_18@example.com.ar', '$2b$10$WJ/RlA70cGxOxptIkMxGSeIOIj7v0uMiCHS7MG2/MEqcPdVFBFfaG', '1695130503868_img.jpg', 1),
('dd2b17cf-1dab-48e1-9e35-47b5e1a3e2e9', 'Usuario14', 'User_14', 'user_14@example.com.ar', '$2b$10$Pm9O8wDDpvaX/NHoDejBdO1pzUGxud4r5M7QJcxybHV1MdRj6VETC', '1695130341439_img.jpg', 1),
('e9e4f972-87cf-47ca-929e-bb9c016af460', 'Usuario1', 'User_1', 'user_1@example.com.ar', '$2b$10$ZUEAZxFAt7OlX5BwokFCPeUr/ewSrExp0qy0j2UlYZoFPrU/1wBKi', '1695059891331_img.jpg', 1),
('edffd4e2-6b77-4d4f-8c19-fc07c1945214', 'PEPE', 'ADMINpepe', 'pepe@argento.com', '$2b$10$kMHjQJ/CFHuUv/Yl4iEM0u37H6Sgu3iXxI53LQToqqU3Bk647pNT6', 'Guille1.jpg', 2),
('ee004127-9ea8-4c88-b1cb-d58c7603b3c0', 'Hacker Cat', 'Admin', 'admin@example.com', '$2b$10$9ApArwUP3JZ0zCYnboRzN.JesGW0iO5Sj/dSw5juusHAX8wPNJv3u', '1695059692682_img.jpg', 2),
('f3bdf97e-12df-450e-b742-056f02745e64', 'Usuario2', 'User_2', 'user_2@example.com.ar', '$2b$10$boZhyJGyCU2Il.zVJq4Dee8GCcZuoN.pkfCkd/cVOf6OlkgC5WEye', '1695059932001_img.jpg', 1),
('f6212bbe-4c3b-4a8c-ad58-da9fd158b6cd', 'Usuario28', 'User_28', 'user_28@example.com.ar', '$2b$10$n5lVxnBXV3R5mpJ6Tu7JyOppqHDlpAuPQ5ZaTet5UNhojhqSZ2AEe', '1695130729274_img.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usertype`
--

CREATE TABLE `usertype` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usertype`
--

INSERT INTO `usertype` (`id`, `nombre`) VALUES
(1, 'user'),
(2, 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_Id` (`user_Id`),
  ADD KEY `product_Id` (`product_Id`);

--
-- Indices de la tabla `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_type` (`user_type`);

--
-- Indices de la tabla `usertype`
--
ALTER TABLE `usertype`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `usertype`
--
ALTER TABLE `usertype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`user_Id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`product_Id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_type`) REFERENCES `usertype` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`user_type`) REFERENCES `usertype` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
