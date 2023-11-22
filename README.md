![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "logotipo de The Bridge")

# 🚀 The bridge - 📚 Books API

## Instalación

Dentro del repositorio ejecuta:

```sh
npm i
```

## Objetivo

Dentro de `app.js` necesitarás crear un servidor express y crear las rutas necesarias para pasar los 10 tests.

## Ejecutar tests

Asegúrate de que el servidor esté corriendo, si no, ejecuta:

```sh
npm run start
```

Para ejecutar los tests corre

```sh
npm run test
```

## Por Hacer

Necesitarás importar `/data/books.json` para enviar los libros necesarios

1. Crea una ruta `/all` para obtener todos los libros

2. Crea una ruta `/first` para obtener el primer libro

3. Crea una ruta `/last` para obtener el último libro

4. Crea una ruta `/middle` para obtener el libro en la mitad (número 50 en el array)

5. Crea una ruta `/author/dante-alighieri` para obtener **SÓLO EL TÍTULO** del libro de `Dante Alighieri`

6. Crea una ruta `/country/charles-dickens` para obtener **SÓLO EL PAÍS** del libro de `Charles Dickens`

7. Crea una ruta `/year&pages/cervantes` para obtener **LAS PÁGINAS Y EL AÑO** del libro de `Miguel de Cervantes`, Ejemplo de respuesta: `{ pages: ..., year: ... }`

8. Crea una ruta `/country/count/spain` para obtener **EL NÚMERO DE LIBROS** de `España`

9. Crea una ruta `/country/at-least/germany` para obtener **VERDADERO O FALSO** dependiendo de si hay o no un libro de `Alemania`

10. Crea una ruta `/pages/all-greater/200` para obtener **VERDADERO O FALSO** dependiendo de si todos los libros tienen más de `200` páginas
