<h1 align="center"> API REST - Pasarela de pago en Nodejs</h1>

## Tabla de contenidos:

---

-   [Descripción y contexto](#descripción-y-contexto)
-   [Guía de usuario](#guía-de-usuario)
-   [Guía de instalación](#guía-de-instalación)
-   [Example del procedimiento](#example-del-procedimiento)

## Descripción y contexto

---

API REST:

Validaciones del lado servidor.

## Guía de usuario

---

Endpoint: "{HOSTING}/docs": se describe detalladamente cada proceso que debe realizar el Frontend para operar correctamente con la API REST

## Guía de instalación

---

La API REST y el sistema servidor cumple con ciertos requisitos indispensables para su buen funcionamiento.

-   Sistemas Operativos: Windows, Linux, Mac requestMin(1GB RAM, 1GB HDD/SSD)
-   Gestor de base de datos: MySQL
-   Aplicaciones: Nodejs and npm (http://nodejs.org) entorno para la ejecucion de JavaScript

Guía de instalación:

-   LLenar las variables de entorno:

```
    PORT: Puerto del hosting
    PAYPAL_DEV: true(para testear las tranferencias, entorno de prueba), false(para produccion, api de paypal)
    PAYPAL_CLIENT_ID: Credenciales Id de la cuenta que recibira los pagos
    PAYPAL_SECRET: Credenciales password de la cuenta que recibira los pagos
    HOSTING: URL Donde se encuentra el servidor example(http://localhost:PORT/) <== url local
    LANDING_PAGE: Pagina portada
```

-   Comandos para correr el proyecto

Descarga de dependencias para el funcionamiento del sistema

```
npm install
```

Servidor de desarrollo

```
npm run dev
```

Transpilar el codigo a javascript

```
npm run build
```

Servidor de produccion

```
npm run start
```

## Example del procedimiento

---

Endpoint: "{HOSTING}/": Simple button checkout que envia un cuerpo JSON a la url({HOST:PORT}/)
Obtien:
URL: Proceso de pago generado con la API de PayPal
URL: Si es aceptado el pago se abrira una pagina de aceptado
URL: Si es cancelado se abrira el la pagina HOME
En "payments.txt"(persistencia de los pagos realizados).
