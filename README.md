# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

new optimisations are added like useRef is used this time instead of useState 
this helps as the page does not everytime has to reload when ever we change the input form because we aint using any onChange methods and assigning the input value to value={} instead we calling out the value by using .current.value of useRef 
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
