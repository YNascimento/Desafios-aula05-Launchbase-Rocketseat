const Teacher = require('../models/Teacher')
const {age, date, grauDeEscolaridade} = require('../../lib/utils')

module.exports = {
    index(req,res){
        Teacher.all(function(teachers){
            return res.render('teachers/index', {teachers})
        })
    },
    create(req,res){
        return res.render('teachers/create')
    },
    post(req,res){
        // validate if there is any empty fields
        for(key of Object.keys(req.body)){
            if(req.body[key] == ""){
                res.send('Please fill all the fields')
            }
        }

        Teacher.create(req.body,function(teacher){
            res.redirect(`/teachers/${teacher.id}`)
        })

    },
    show(req,res){
        Teacher.find(req.params.id, function(teacher){
            if(!teacher) return res.send('Teacher not found')

            teacher.age = age(teacher.birth)
            teacher.created_at = date(teacher.created_at).format
            teacher.subjects = teacher.subjects.split(',')
            teacher.education = grauDeEscolaridade(teacher.education)

            return res.render('teachers/show',{teacher})
        })
    },
    edit(req,res){
        Teacher.find(req.params.id, function(teacher){
            if(!teacher) return res.send('Teacher not found')

            teacher.birth = date(teacher.birth).iso
            teacher.created_at = date(teacher.created_at).format
            teacher.subjects = teacher.subjects.split(',')
            teacher.degree = grauDeEscolaridade(teacher.degree)

            return res.render('teachers/edit',{teacher})
        })
    },
    put(req,res){
        // validate if there is any empty fields
        for(key of Object.keys(req.body)){
            if(req.body[key] == ""){
                res.send('Please fill all the fields')
            }
        }
        
        Teacher.update(req.body,function(){
            return res.redirect(`/teachers/${req.body.id}`)
        })
    },
    delete(req,res){
        Teacher.delete(req.body.id, function(){
            return res.redirect('/teachers')
        })
    },
}