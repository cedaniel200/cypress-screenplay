# Cypress - Screenplay

Proyecto de ejemplo donde se trata de implementar el patrón screenplay dentro de un proyecto de Cypress de la manera más simple y usando las caracteristicas y herramientas provistas por Cypress. En este ejemplo la automatización es independiente a la aplicación y no usamos Cucumber (su uso queda para otro ejemplo).

## Instalación
Abrimos una consola y nos ubicamos en el directorio del proyecto. Ejecutamos el siguiente comando.

    npm install

## Ejecución

Antes de ejecutar el proyecto hay que cambiar dentro de la carpete cypress/fixtures el archivo **user.json** dos datos:

    "email": "your@Email",
    "rightPassword": "your_password"

Es importante tener en cuenta que los comando que usamos para las ejecuciones estan configurados en el archivo package.json en el atributo scripts, a continuación los comandos y su equivalencia:

    cy:open: cypress open
    e2e: cypress run
    e2e-report: node scripts/cypress.js

### Ejecución desde el modo interactivo

Para abrir el Cypress Test Runner en modo interactivo ejecutamos el comando:

    npm run cy:open

Una vez abierto, seleccionamos el archivo (filename.spec.js) que queramos ejecutar. 

### Ejecución en navegador headless
Para ejecutar sobre la consola ejecutamos el comando:

    npm run e2e

### Reporte de pruebas
Para obtener un reporte de pruebas diferente al que nos aporta Cypress, ejecutamos el comando:

    npm run e2e-report

Se creará la carpeta mochawesome-report donde se encontrará el archivo **mochawesome.html**

## Arquitectura 

### Fixtures
Encontramos los datos estaticos usados en la automatización.

### Integration 
Encontramos las pruebas en sí, es decir, nuestros casos de pruebas  y/o escenarios de pruebas.

### plugins
Para este ejemplo no se usa, pero se usa para agregar los complementos que sean necesarios.

### Support
Permite agregar nuestros archivos de soporte, en este caso aca se incluiran los directorios necesarios para dar soporte al patrón screenplay.
*   interactions -> Representan las interacciones directas con la interfaz de usuario
*   taks -> Representan tareas que se realizan a nivel de proceso de negocio
*   ui -> Mapean los elementos de la interfaz de usuario

