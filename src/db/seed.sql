INSERT INTO authors (name, email, bio) VALUES
('Alejandro Guitierrez', 'alejandro.guitierrez@example.com', 'Apasionante por el desarrollo de software.'),
('Maria Lopez', 'maria.lopez@example.com', 'Creativa y apasionada por la escritura.'),
('Carlos Ramirez', 'carlos.ramirez@example.com', 'Estudiante de Ingeniería en Informática.');


INSERT INTO posts (author_id, title, content) VALUES
(1, 'Primer Post', 'Este es el contenido del primer post.'),
(2, 'Segundo Post', 'Este es el contenido del segundo post.'),
(3, 'Tercer Post', 'Este es el contenido del tercer post.'),
(1, 'Aprendiendo Express', 'Conceptos basicos de Express y rutas.'),
(2, 'Introducción a PostgreSQL', 'Cómo conectar PostgreSQL con Node.js.');