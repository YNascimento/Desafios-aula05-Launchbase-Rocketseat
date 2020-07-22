const Student = require('../models/Student')
const {age, date, grauDeEscolaridade, getGrade} = require('../../lib/utils')

module.exports = {
    index(req,res){
        Student.all(function(students){
            return res.render('students/index', {students})
        })
    },
    create(req,res){

        Student.teacherSelectOptions(function(options){
            return res.render('students/create', {teacherOptions : options})
        })
    },
    post(req,res){
        // validate if there is any empty fields
        for(key of Object.keys(req.body)){
            if(req.body[key] == ""){
                res.send('Please fill all the fields')
            }
        }

        Student.create(req.body, function(student){
            res.redirect(`/students/${student.id}`)
        })

    },
    show(req,res){
        Student.find(req.params.id, function(student){
            if(!student) return res.send('Student not found')

            student.age = age(student.birth)
            student.education = grauDeEscolaridade(student.education)
            student.created_at = date(student.created_at).format

            return res.render('students/show',{student})
        })
    },
    edit(req,res){
        Student.find(req.params.id, function(student){
            if(!student) return res.send('Student not found')

            student.birth = date(student.birth).iso

            Student.teacherSelectOptions(function(options){
                return res.render('students/edit', {student, teacherOptions : options})
            })
        })
    },
    put(req,res){
        // validate if there is any empty fields
        for(key of Object.keys(req.body)){
            if(req.body[key] == ""){
                res.send('Please fill all the fields')
            }
        }
        
        Student.update(req.body,function(){
            return res.redirect(`/students/${req.body.id}`)
        })
    },
    delete(req,res){
        Student.delete(req.body.id, function(){
            return res.redirect('/students')
        })
    },
}