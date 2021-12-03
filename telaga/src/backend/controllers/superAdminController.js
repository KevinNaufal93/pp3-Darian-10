const { db } = require('../database');


module.exports = {

addOrder: (req, res) => {
    let { order_id, order_desc, order_spec, deadline, order_status } = req.body
    console.log(req.body)
    console.log(`Connecting to super admin API success, registering order no ${req.body.order_id}`)
    let insertQuery = `Insert into order_db (order_id, order_detail, spec, deadline, order_status) values (
    ${db.escape(order_id)},
    ${db.escape(order_desc)},
    ${db.escape(order_spec)},
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