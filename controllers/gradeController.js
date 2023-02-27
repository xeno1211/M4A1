const express = require('express')


exports.getData = (req, res) => {
    const data = {
        subject: 'IFT 458',
        grade: "A",
        date: "01/01/2023"
    }
    res.send(`Data is: ${JSON.stringify(data)}`)
}
exports.postData = (req, res) => res.send('POST')
exports.putData = (req, res) => res.send('PUT')
exports.deleteData = (req, res) => res.send('DELETE')

//module.exports = controller