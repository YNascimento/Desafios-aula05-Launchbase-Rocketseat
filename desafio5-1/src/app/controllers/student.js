const {age, date, grauDeEscolaridade, getGrade} = require('../../lib/utils')

module.exports = {
    index(req,res){
        return res.render('students/index')
    },
    create(req,res){
        return res.render('students/create')
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
//     return res.render('students/index', {students : data.students})
// }
// exports.create = function(req,res){
//     return res.render('students/create')
// }
// exports.validatePost = function(req,res){

//     // validate if there is any empty fields
//     for(key of Object.keys(req.body)){
//         if(req.body[key] == ""){
//             res.send('Please fill all the fields')
//         }
//     }

//     birth = Date.parse(req.body.birth)
//     gradeName = getGrade(req.body.grade)

//     //check for existing data before setting id
//     let id = 1
//     const lastStudent = data.students[data.students.length -1]
//     if(lastStudent) id = lastStudent.id + 1

//     //copy to data e write do data.json file
//     data.students.push({...req.body, id, birth, gradeName})

//     fs.writeFile('./backend/data.json', JSON.stringify(data,null,2),function(err){
//         if(err) return res.send('Writefile error')

//         return res.redirect('/students')
//     })
// }
// exports.show = function(req, res){

//     const {id} = req.params
//     const foundStudent = data.students.find( function(student){
//         return student.id == id
//     })

//     if(!foundStudent) return res.send("invalid Id")

//     const student = {
//         ...foundStudent,
//         age: age(foundStudent.birth)
//     }

//     return res.render('students/show', {student})
// }
// exports.edit = function(req,res){
//     const {id} = req.params
//     const foundStudent = data.students.find( function(student){
//         return student.id == id
//     })
//     if(!foundStudent) return res.send("invalid Id")

//     const student = {
//         ...foundStudent,
//         birth: date(foundStudent.birth).iso,
//     }

//     return res.render('students/edit', {student})
// }
// exports.put = function(req,res){
//     const {id} = req.body
//     let index=0
//     const foundStudent = data.students.find(function(student,foundIndex){
//         if(student.id == id){
//             index = foundIndex
//             return true
//         }
//     })

//     if(!foundStudent) return res.send("Student not found")

//     let student = {
//         ...foundStudent,
//         ...req.body,
//         birth: Date.parse(req.body.birth),
//     }

//     gradeName = getGrade(student.grade)
//     data.students[index] = student
//     data.students[index].gradeName = gradeName

//     fs.writeFile("backend/data.json",JSON.stringify(data,null,2),function(err){
//         if(err) return res.send('write error')

//         return res.redirect(`students/${id}`)
//     })
// }
// exports.delete = function(req,res){
//     const { id } = req.body
//     const filteredStudents = data.students.filter(function(student){
//         return student.id != id
//     })

//     data.students = filteredStudents

//     fs.writeFile('backend/data.json',JSON.stringify(data,null,2),function(err){
//         if(err) return res.send ('writefile error')

//         return res.redirect('students')
//     })
// }