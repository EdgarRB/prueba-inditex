# Prueba Inditex

Prueba técnica en la que mostramos 3 pantallas, la primera muestra una lista con los 100 podcasts más populares, la segunda
es una página de detalle del podcast accesible al clickar en las cards de los podcasts y la tercera es una pagina de detalle de un capitulo
de un podcas accesible al clickar en el titulo de un capitulo

## Estructura de la Aplicación

La arquitectura de la aplicación está organizada de la siguiente manera:

    src/
        api/: Contiene las llamadas a la API.
        components/: Componentes reutilizables utilizados en las páginas.
        context/: Contiene el contexto de React para la gestión de estado.
        model/: Interfaces y tipos de datos utilizados en la aplicación.
        pages/: Componentes que actúan como las páginas principales de la aplicación.
        utils/: Funciones comunes y utilidades.

## Requisito de cacheo de datos

- **Uso de localStorage**: Se implementó localStorage para almacenar datos localmente y mejorar el rendimiento al evitar llamadas innecesarias a la API en caso de que el context se haya perdido.
- **tanstack/react-query**: Se implementó react-query para facilitar el trabajo con las apis y permitir el almacenamiento de datos y evitar llamadas innecesarias a la API (mientras no se refresque la pantalla).

## Testing

Se han implementado pruebas unitarias utilizando Jest y React Testing Library para asegurar el correcto funcionamiento de los componentes principales:

```
import { render } from '@testing-library/react';
import NoResult from './NoResult';

describe('NoResult component', () => {
  it('renders with correct styles', () => {
    const { getByText, getByTestId } = render(<NoResult />);

    const containerElement = getByTestId('noResult');
    expect(containerElement).toBeInTheDocument();

    const textElement = getByText(
      'No results found, search again or reload the page'
    );
    expect(textElement).toBeInTheDocument();
  });
});
```
## Requisitos

Antes de poder ejecutar el proyecto es necesario tener los siguientes programas instalados

- Node.js 
- npm

## Instalación

sigue los siguientes pasos para poder ejecutar la aplicación

1. Clona el repositorio:

   ```
   git clone https://github.com/EdgarRB/prueba-ovixia.git
   ```

2. Accede al proyecto a través del terminal que prefieras, en mi caso usando el terminal de vs code
   
![imagen](https://github.com/EdgarRB/prueba-inditex/assets/52667125/3719123d-0c26-4851-bb07-cb15cf573cea)

4. Instala las dependencias:

  ```
   npm install
  ```

## Modo development

1. Arranca el proyecto
  ```
  npm run dev
  ```
2. Abre el navegador en la url que muestra el terminal, en mi caso:

![imagen](https://github.com/EdgarRB/prueba-ovixia/assets/52667125/4b72d6c0-3e4a-4377-b8d9-b801c612b68d)

## Modo production

1. Crea el build de la app
   
  ```
  npm run build 
  ```
2. Arranca el proyecto
   
  ```
  npm run preview 
  ```

3. Abre el navegador en la url que muestra el terminal, en mi caso:
   
![imagen](https://github.com/EdgarRB/prueba-inditex/assets/52667125/19be0b60-e45b-4c39-9173-eea8f26dfe0b)

