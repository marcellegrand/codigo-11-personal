1) Instalar el json-server
npm install --save-dev json-server

2) Inicializar el servidor json. Se recomienda registrar esto en el package.json
 "scripts": {
    "dbFake": "npx json-server --watch ./db.json"
  },

3) Ejecutar el script
npm run dbFake