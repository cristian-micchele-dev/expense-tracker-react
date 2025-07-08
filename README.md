# React Expense Tracker

Este es un proyecto de **Expense Tracker** (controlador de gastos) desarrollado con **React**, **Vite** y **Tailwind CSS**. Permite registrar ingresos y egresos, visualizar el balance y ver un gráfico de distribución usando Victory.

---

## Características

- **Agregar transacciones**: Registra ingresos y egresos con descripción y monto.
- **Eliminar transacciones**: Borra cualquier transacción de la lista.
- **Balance automático**: Calcula el balance total, ingresos y egresos.
- **Gráfico de pastel**: Visualiza la proporción entre ingresos y egresos usando VictoryPie.
- **Persistencia global**: Usa Context API para manejar el estado global.
- **Interfaz moderna**: Estilizado con Tailwind CSS.

---

## Tecnologías usadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Victory](https://formidable.com/open-source/victory/) (para gráficos)
- Context API (manejo de estado global)

---

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/cristian-micchele-dev/expense-tracker-react
   cd react-expense-tracker-
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Estructura del proyecto

```
react-expense-tracker-/
│
├── public/
├── src/
│   ├── components/
│   │   ├── ExpenseChart.jsx
│   │   └── transactions/
│   │       ├── TransactionForms.jsx
│   │       └── TransactionItem.jsx
│   ├── context/
│   │   └── GlobalState.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Uso

1. **Agregar transacción:**  
   Escribe una descripción y un monto (positivo para ingresos, negativo para egresos) y haz clic en "add transaction".

2. **Eliminar transacción:**  
   Haz clic en la "X" al lado de la transacción que deseas eliminar.

3. **Visualizar gráfico:**  
   El gráfico circular muestra la proporción de ingresos y egresos. Si no hay ingresos, se mostrará un mensaje.

---

## Configuración de Tailwind CSS

- Tailwind está instalado en la versión `3.4.3`.
- Las directivas de Tailwind están en `src/index.css`.
- El archivo `tailwind.config.js` incluye los paths de los archivos fuente.

---

## Notas técnicas

- El estado global se maneja con Context API en `src/context/GlobalState.jsx`.
- El gráfico usa VictoryPie y se renderiza solo si hay ingresos.
- Se valida que los montos sean números válidos para evitar errores en el gráfico.

---

## Scripts disponibles

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la build de producción.
- `npm run preview` — Previsualiza la build.
- `npm run lint` — Linting del código.

---

## Créditos

Desarrollado por [Cristian Micchele].

---

## Licencia

MIT