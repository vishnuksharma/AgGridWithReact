const jsonServer = require("json-server");

const server = jsonServer.create();

const db = require("./database/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4001;

// middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/api/table/list', (req, res) => {
    // req.body;
    // console.log(db)
    res.json(db.TableData);
});

server.get("/api/table/list/count", (req, res) => {
    const listCount = db.TableData.length;
      res.json({count:listCount});
});

// server.use(router);
server.listen(port);
