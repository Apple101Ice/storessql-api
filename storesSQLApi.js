const format = require("pg-format");
const db = require('postgresql-query')

let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
const port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

db.config({
    username: "root",
    password: "xAZjZm0YI1ATiLGZwabXsZYF2jqGMWuz",
    database: "testdb_ncdn",
    port: 5432,
    host: "dpg-cfidrokgqg40klnee660-a.singapore-postgres.render.com",
    ssl: { rejectUnauthorized: false }
});

const { storesData } = require("./storesData");

app.get("/resetData", function (req, response) {
    let delshop = "DELETE FROM shops";
    let delprod = "DELETE FROM products";
    let delpurch = "DELETE FROM purchases";
    const shops = storesData.shops.map(v1 => [v1.shopid, v1.name, v1.rent]);
    const products = storesData.products.map(v1 => [v1.productid, v1.productname, v1.category, v1.description]);
    const purchases = storesData.purchases.map(v1 => [v1.purchaseid, v1.shopid, v1.productid, v1.quantity, v1.price]);
    let insertshops = format("INSERT INTO shops VALUES %L", shops);
    let insertproducts = format("INSERT INTO products VALUES %L", products);
    let insertpurchases = format("INSERT INTO purchases VALUES %L", purchases);

    db.query([[delshop], [delprod], [delpurch], [insertshops], [insertproducts], [insertpurchases]],
        function (err, resQuery) {
            if (err) {
                console.log(err);
                response.status(404).send(err);
            }
            else {
                response.send("Data reset.");
            }
        });
});

app.get("/shops", function (req, response) {
    let sql = "SELECT * FROM shops";
    db.query(sql, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.post("/shops", function (req, response) {
    const v1 = req.body;
    const shop = [v1.shopid, v1.name, v1.rent];
    let insertshop = format("INSERT INTO shops VALUES (%L)", shop);
    db.query(insertshop, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.get("/products", function (req, response) {
    let sql = "SELECT * FROM products";
    db.query(sql, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.get("/products/:id", function (req, response) {
    const id = +req.params.id;
    let product = format("SELECT * FROM products WHERE productid = %L", id);
    db.query(product, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.post("/products", function (req, response) {
    const v1 = req.body;
    const product = [v1.productid, v1.productname, v1.category, v1.description];
    let insertproduct = format("INSERT INTO products VALUES (%L)", product);
    db.query(insertproduct, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.put("/products/:id", function (req, response) {
    const id = +req.params.id;
    const body = req.body;
    const updatedData = [body.category, body.description, id];
    let sql = "UPDATE products SET category = $1 , description = $2 WHERE productid = $3";
    db.query(sql, updatedData, function (err, resQuery) {
        if (err)
            response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.get("/purchases", function (req, response) {
    const name = req.query.name;
    const productname = req.query.productname;
    const sort = req.query.sort;

    let sql = "SELECT * FROM purchases";
    let condParams = "";
    if (name) {
        condParams += format(" WHERE purchases.\"shopid\" = (SELECT shopid FROM shops WHERE name = %L)", name);
    }

    if (productname) {
        const prodList = productname.split(',');
        condParams += condParams ? " AND" : " WHERE";
        condParams += format(" purchases.\"productid\" IN ( SELECT productid FROM products WHERE productname IN (%L))", prodList);
    }

    if (sort) {
        if (sort === 'QtyAsc')
            condParams += " ORDER BY quantity ASC";
        if (sort === 'QtyDesc')
            condParams += " ORDER BY quantity DESC";
        if (sort === 'ValueAsc')
            condParams += " ORDER BY (price*quantity) ASC";
        if (sort === 'ValueDesc')
            condParams += " ORDER BY (price*quantity) DESC";
    }
    sql += condParams;

    db.query(sql, function (err, resQuery) {
        if (err) {
            console.log(err);
            response.status(404).send(err);
        }
        else {
            response.send(resQuery);
        }
    });
});

app.get("/purchases", function (req, response) {
    let sql = "SELECT * FROM purchases";
    db.query(sql, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.get("/purchases/shops/:id", function (req, response) {
    const id = +req.params.id;
    let sql = format("SELECT * FROM purchases WHERE shopid = %L", id);
    db.query(sql, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.get("/purchases/products/:id", function (req, response) {
    const id = +req.params.id;
    let sql = format("SELECT * FROM purchases WHERE productid = %L", id);
    db.query(sql, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.get("/totalpurchase/shop/:id", function (req, response) {
    const id = +req.params.id;
    let sql = `SELECT products."productname" as productname, SUM(quantity) AS totalpurchase  FROM purchases
                FULL JOIN products 
                ON purchases."productid" = products.productid
                WHERE purchases."shopid" = ${id}
                GROUP BY productname`;

    db.query(sql, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.get("/totalpurchase/product/:id", function (req, response) {
    const id = +req.params.id;
    let sql = `SELECT shops."name" AS shopname, SUM(quantity) AS totalpurchase FROM purchases
                INNER JOIN shops 
                ON purchases."shopid" = shops.shopid
                WHERE purchases."productid" = ${id}
                GROUP BY shops."name";`;

    db.query(sql, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});

app.post("/purchases", function (req, response) {
    const v1 = req.body;
    const purchase = [v1.purchaseid, v1.shopid, v1.productid, v1.quantity, v1.price];
    let insertpurchase = format("INSERT INTO purchases VALUES (%L)", purchase);
    db.query(insertpurchase, function (err, resQuery) {
        if (err) response.status(404).send(err);
        else {
            response.send(resQuery);
        }
    });
});