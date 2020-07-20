const express = require('express')
const routes = express.Router()
const teacher = require('./app/controllers/teacher')
const student = require('./app/controllers/student')

//ROTAS

//home
routes.get('/',function(req,res){
    return res.redirect('./teachers')
})

//Teachers
routes.get('/teachers', teacher.index)
routes.get('/teachers/create', teacher.create)
routes.post('/teachers', teacher.post)
routes.get('/teachers/:id', teacher.show)
routes.get('/teachers/:id/edit', teacher.edit)
routes.put('/teachers', teacher.put)
routes.delete('/teachers', teacher.delete)

//Students
routes.get('/students', student.index)
routes.get('/students/create', student.create)
routes.post('/students', student.validatePost)
routes.get('/students/:id', student.show)
routes.get('/students/:id/edit', student.edit)
routes.put('/students', student.put)
routes.delete('/students', student.delete)

module.exports = routes