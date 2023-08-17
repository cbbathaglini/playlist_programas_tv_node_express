# playlist_programas_tv_node_express

1) npm init
2) npm install express
3) npm install nodemon
4) npm install cors --save

rodar: nodemon app.js



Fluxo 
index.js -> rota -> controller -> service -> db

<h1>Rotas</h1>
Na pasta Route estão definidas todas as possíveis rotas, seja para filmes, séries ou documentários. 
Como por exemplo, no código abaixo foram definidas as possíveis rotas de séries:
``` javascript
    router.get("/", getAllSeries)
    router.get("/:id", getSerieById)
    router.post("/", registrateSerie)
```