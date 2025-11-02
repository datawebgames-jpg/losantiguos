const express = require("express");
const path = require("path");
const Gamedig = require("gamedig");

const app = express();
const port = 3000;

// Servir archivos estáticos (HTML, imágenes, etc.)
app.use(express.static(__dirname));

// Endpoint para estado del servidor
app.get("/status", async (req, res) => {
  try {
   const state = await Gamedig.query({
  type: "conanexiles",
  host: "190.11.113.54",
  port: 27026 // Puerto de consulta (QueryPort)
});
    res.json({
      status: "online",
      players: state.players.length
    });
  } catch (e) {
    res.json({
      status: "offline",
      players: 0
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor web activo en http://localhost:${port}`);
});
