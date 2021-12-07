const { db } = require('../database');


module.exports = {

addOrder: (req, res) => {
    let { so, client, product, design, potong, press, sablon, bordir, jahit, finishing, deadline, order_status } = req.body
    console.log(req.body)
    console.log(`Connecting to super admin API success, registering order no ${req.body.so}`)
    let insertQuery = `Insert into order_db (so, client, product, design, potong, press, sablon, bordir, jahit, finishing, deadline, order_status) values (
    ${db.escape(so)},
    ${db.escape(client)},
    ${db.escape(product)},
    ${db.escape(design)},
    ${db.escape(potong)},
    ${db.escape(press)},
    ${db.escape(sablon)},
    ${db.escape(bordir)},
    ${db.escape(jahit)},
    ${db.escape(finishing)},
    ${db.escape(deadline)},
    ${db.escape(order_status)}
    );`
        console.log(insertQuery)
    db.query(insertQuery, (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        } else {
        console.log("Success Processing add Order API")
        return res.status(201).send({message: "order created"})
        }
    }) 
},

}