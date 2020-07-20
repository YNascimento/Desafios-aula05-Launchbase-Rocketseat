const {age, date, grauDeEscolaridade} = require('../../lib/utils')

module.exports = {
    index(req,res){
        return res.render('teachers/index')
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

        let {avatar_url, name, birth, degree, classType, subjects} = req.body

        return
    },
    show(req,res){
        return
    },
    edit(req,res){
        return
    },
    put(req,res){
        // validate if there is any empty fields
        for(key of Object.keys(req.body)){
            if(req.body[key] == ""){
                res.send('Please fill all the fields')
            }
        }
        return
    },
    delete(req,res){
        return
    },
}

// exports.index = function(req,res){
//     return res.render('teachers/index', {teachers: data.teachers})
// }

// exports.create = function(req,res){
//     return res.render('teachers/create')
// }

// exports.post = function(req,res){

//     // validate if there is any empty fields
//     for(key of Object.keys(req.body)){
//         if(req.body[key] == ""){
//             res.send('Please fill all the fields')
//         }
//     }

//     // select and prepare necessary variables
//     let {avatar_url, name, birth, degree, classType, subjects} = req.body
//     birth = Date.parse(req.body.birth)
//     const createdAt = Date.now()
//     const id = Number(data.teachers.length +1)

//     //copy to data e write do data.json file
//     data.teachers.push({id, name, avatar_url ,birth, degree, classType, subjects, createdAt})
//     fs.writeFile('./backend/data.json', JSON.stringify(data,null,2),function(err){
//         if(err) return res.send('Writefile error')

//         return res.redirect('/teachers')
//     })
// }

// exports.show = function(req, res){

//     const {id} = req.params
//     const foundTeacher = data.teachers.find( function(teacher){
//         return teacher.id == id
//     })

//     if(!foundTeacher) return res.send("invalid Id")

//     const teacher = {
//         ...foundTeacher,
//         age: age(foundTeacher.birth),
//         subjects: foundTeacher.subjects.split(','),
//         degree: grauDeEscolaridade(foundTeacher.degree),
//         createdAt: Intl.DateTimeFormat('pt-BR').format(foundTeacher.createdAt)
//     }

//     return res.render('teachers/show', {teacher})
// }

// exports.edit = function(req,res){
//     const {id} = req.params
//     const foundTeacher = data.teachers.find( function(teacher){
//         return teacher.id == id
//     })

//     if(!foundTeacher) return res.send("invalid ID")

//     const teacher = {
//         ...foundTeacher,
//         birth: date(foundTeacher.birth),
//         // subjects: foundTeacher.subjects.split(','),
//         // degree: grauDeEscolaridade(foundTeacher.degree)
//     }

//     return res.render('teachers/edit', {teacher})
// }

// exports.put = function(req,res){
//     const {id} = req.body
//     let index=0
//     const foundTeacher = data.teachers.find(function(teacher,foundIndex){
//         if(teacher.id == id){
//             index = foundIndex
//             return true
//         }
//     })

//     if(!foundTeacher) return res.send("Teacher not found")

//     let teacher = {
//         ...foundTeacher,
//         ...req.body,
//         birth: Date.parse(req.body.birth)
//     }

//     data.teachers[index] = teacher

//     fs.writeFile("backend/data.json",JSON.stringify(data,null,2),function(err){
//         if(err) return res.send('write error')

//         return res.redirect(`teachers/${id}`)
//     })
// }

// exports.delete = function(req,res){
//     const { id } = req.body
//     const filteredTeachers = data.teachers.filter(function(teacher){
//         return teacher.id != id
//     })

//     data.teachers = filteredTeachers

//     fs.writeFile('backend/data.json',JSON.stringify(data,null,2),function(err){
//         if(err) return res.send ('writefile error')

//         return res.redirect('teachers')
//     })
// }