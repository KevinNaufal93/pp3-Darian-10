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

    searchOrder: (req,res) => {
        let { so } = req.body;
        console.log(`API searching for ${so} detail`)
        let scriptQuery = `SELECT * FROM order_db WHERE so = ${db.escape(req.body.so)} and order_status = 'started';`;
        db.query(scriptQuery, (err, result) => {
            console.log(result)
            if (err) {
                return res.send({err, message: "search result error"})
            } else if(result) {
                console.log("Order found")
                return res.status(201).send({data:result})
            } else {
                return res.send({err, message: "search result not found"})
            }
        })
    },

    updateOrder: (req,res) => {
        let { so, design, potong, press, sablon, bordir, jahit, finishing } = req.body;
        console.log(`API updating for ${so}`)
        let scriptQuery = `UPDATE order_db SET 
        design = ${db.escape(design)},
        potong = ${db.escape(potong)},
        press = ${db.escape(press)},
        sablon = ${db.escape(sablon)},
        bordir = ${db.escape(bordir)},
        jahit = ${db.escape(jahit)},
        finishing = ${db.escape(finishing)} WHERE so = ${db.escape(so)};`;
        db.query(scriptQuery, (err, result) => {
            //console.log(scriptQuery, result)
            if (err) {
                return res.send({err, message: "update result error"})
            } else {
                return res.send({err, message: "update success"})
            }
        })
    },

    updateOrderStatus: (req,res) => {
        let { so, deadline, order_status } = req.body;
        console.log(`API updating status for ${so}`)
        let scriptQuery = `UPDATE order_db SET 
        deadline = ${db.escape(deadline)}, 
        order_status = ${db.escape(order_status)} 
        WHERE so = ${db.escape(so)};`;
        db.query(scriptQuery, (err, result) => {
            if (err) {
                return res.send({err, message: "update result error"})
            } else {
                return res.send({err, message: "update success"})
            }
        })
    }
    

}