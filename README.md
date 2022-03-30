# Real-Estate-Project
Gestión de inmobiliaria global.

¡¡¡Ola ke ase!!!

Para este proyecto hemos decidido crear un portal inmobiliario basandonos en entrevistas a pequeños autonomos del sector y en la necesidad concreta de unos clientes, combinado con un CRM de gestión de clientes y de propiedades que combine practicamente las funciones mas basicas para que un pequeño autónomo tenga una herramienta simple y potente con la que publicitar sus ofertas y realizar cruces de datos para filtrar las propiedades en base a las caracteristicas comunes que poseen sus clientes y las propiedades, un gestor de tareas y una agenda donde guardar y planificar visitas, gestiones, prospección, etc.

El proyecyto constará de dos repositorios separados, uno para el Front End hecho con Nuxt y Vuetify y otro para el Back End, una API hecha con Node Axios, Cors, Morgan etc.

La API esta creada para 4 tipos de usuarios. 

- Administradores: Tienen el control total de la API y el acceso a las tareas CRUD para todos los usuarios. También pueden realizar tareas CRUD en todos los documentos de la base de datos. 

- Compradores: Son los usuarios del front-end que están interesados en adquirir alguna vivienda. Éstos tendrán la posibilidad de registrarse en el front-end para revisar las viviendas disponibles para la venta, y solicitar visitas a las mismas. En este último caso, se realizará un pequeño cuestionario para facilitar esa cita y en el futuro poder ofrecer viviendas acorde a las necesidades y posibilidades del comprador. Además deberán aceptar la posibilidad de recibir "comunicaciones comerciales" y la información relativa al GPDR (ley de proteccion de datos).

- Agentes: Son los empleados de la inmobiliaria, que tienen acceso a editar las propiedades que se ven en el Front-End y trabajar en las funcionalidades disponibles en el Back-End. 


Inmobiliaria (resumen):

  1- Los clientes deben poder ver diferentes propiedades, filtrarlas por municipos, metros cuadrados, precio de venta, numero de habitaciones, baños...
  
  2- Los clientes deben poder hacer una peticion para hacer una visita a la propiedad o propiedades selecionadas o simplemente una cita con el agente inmobiliario (administrador) para recibir mas información.
  
  3- El agente inmobiliario (admin) debe poder subir, editar, actualizar tanto las propiedades que se suben a la web como los clientes que se registran.
  
  4- El agente inmobiliario (admin) debe poder filtrar las propiedades al igual que el cliente en el punto 1.
  
  5- El agente inmobiliario (admin) puede cruzar los datos de la coleccion de clientes y de las propiedades para obtener rapidamente las potenciales ventas.
  
  6- El agente inmobiliario (admin) debe poder agendar las visitas conectado a Google calendar desde la propia Web.
  
  7- El agende inmovialiario (admin) debe poder visualizar, editar, borrar, actualizar y cambiar estado a terminado, en progreso o pendiente tareas en una todo list directamente desde la web.

# API Endpoints

Todas las solicitudes de API deben ir precedidas de /api
El flujo de autenticación para la aplicación es:

### Authentication Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | User Signup              | name, surname, email, phone, password           | token
POST   | /auth/login      | -     | User Login               | email, password                                 | token



