# Cypress + Screenplay — Demo Saucedemo

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Cypress](https://img.shields.io/badge/Cypress-16.2.0-green)
![Node.js](https://img.shields.io/badge/Node.js-22%20%7C%2024%20%7C%2026-brightgreen)
![Screenplay](https://img.shields.io/badge/Screenplay-pattern-blue)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Proyecto de ejemplo para mostrar la forma más sencilla de implementar el patrón Screenplay dentro
de un proyecto de Cypress, usando las capacidades que ya ofrece Cypress y sin añadir Cucumber. La
automatización es independiente de la aplicación: los specs describen el flujo con tareas,
interacciones y preguntas.

La variante con Cucumber está en
[cypress-cucumber-screenplay](https://github.com/cedaniel200/cypress-cucumber-screenplay).

## Qué incluye

- **3 pruebas**: login válido, usuario bloqueado y compra de un producto.
- **Screenplay en Cypress**: `tasks` para el negocio, `interactions` para la interfaz,
  `questions` para las validaciones y `ui` para los selectores.
- **Cypress 16** con configuración en `cypress.config.js`.
- **Informe HTML** con `cypress-mochawesome-reporter`, gráficos y capturas embebidas.
- **Datos de prueba** en fixtures: usuarios y datos del checkout.
- **Sin credenciales locales**: saucedemo publica sus usuarios de demo.

## Requisitos

- **Node.js 22, 24 o 26** (los que soporta Cypress 16).
- **npm**.
- **Acceso a internet**: los tests visitan saucedemo.com.

## Cómo se ejecuta

```sh
npm install
npm test
```

Para abrir el runner interactivo:

```sh
npm run cy:open
```

Cypress muestra el resultado en consola y genera el informe HTML al terminar. Las capturas de las
pruebas fallidas quedan en `cypress/screenshots/` y se incrustan en el informe.

## Informe

`npm test` deja un único HTML autocontenido en:

```text
cypress/reports/html/index.html
```

Incluye el resumen de las suites, duración, gráficos y el detalle de cada prueba. La carpeta
`cypress/reports/` está ignorada por git: el informe se regenera en cada ejecución.

## Estructura

```text
cypress
├── e2e
│   ├── authentication.cy.js      # login válido y usuario bloqueado
│   └── purchase.cy.js            # carrito y checkout
├── fixtures
│   ├── users.json                # usuarios de saucedemo
│   └── customer.json             # datos del checkout
├── reports                       # informe generado (ignorado por git)
└── support
    ├── e2e.js                    # carga comandos y tareas
    ├── interactions               # click y escritura
    ├── questions                  # visibilidad y texto
    ├── tasks                      # login, carrito y checkout
    └── ui                         # selectores por pantalla
```

## Screenplay en Cypress

Cypress no trae el patrón Screenplay, así que el ejemplo lo construye con sus propios comandos:

| Concepto | Dónde vive | Ejemplo |
|---|---|---|
| Tarea | `support/tasks` | `cy.authenticate(...)` |
| Interacción | `support/interactions` | `cy.typeInto(...)` |
| Pregunta | `support/questions` | `cy.seeVisible(...)` |
| UI | `support/ui` | selectores de login y carrito |

Las tareas no conocen los selectores: los reciben de `ui` y delegan la interacción en los comandos
básicos. Así el test se lee como el flujo de negocio y no como una lista de clics.

## Ten en cuenta

- **Saucedemo es un sitio público de práctica.** No hay datos reales ni credenciales privadas.
- **Los tests dependen de la red.** Si saucedemo no responde, fallan por el sitio, no por el código.
- **Cypress 16 requiere Node 22 o superior.** Con Node 18 o 20 no arranca.

## Licencia

[MIT](LICENSE) © Cesar Daniel
