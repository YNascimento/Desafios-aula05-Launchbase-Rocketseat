const db = require('../../config/db')
const {age, date, grauDeEscolaridade} = require('../../lib/utils')

module.exports ={
    all(callback){
        db.query(`SELECT teachers.*, count(students) AS total_students 
            FROM teachers LEFT JOIN students 
            ON (teachers.id = students.teacher_id)
            GROUP BY teachers.id
            ORDER BY total_students DESC`,     
            function(err,results){
            if(err) throw `Database Error : ${err}`
            callback(results.rows)
        })

    },
    create(data,callback){
        const query = `
            INSERT INTO teachers (
                avatar_url,
                name,
                birth,
                education,
                class_type,
                subjects,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id
        `

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.education,
            data.class_type,
            data.subjects,
            date(Date.now()).iso
        ]
        db.query(query,values,function(err,results){
            if(err) throw `Database Error : ${err}`

            callback(results.rows[0])
        })
    },
    find(id,callback){
        db.query(`SELECT * FROM teachers WHERE id = $1`,[id],function(err,results){
            if(err) throw `Database Error : ${err}`

            callback(results.rows[0])
        })
    },
    findBy(filter, callback){
        db.query(
            `SELECT teachers.*, count(students) AS total_students 
            FROM teachers LEFT JOIN students 
            ON (teachers.id = students.teacher_id)
            WHERE teachers.name ILIKE '%${filter}%'
            OR teachers.subjects ILIKE '%${filter}%'
            GROUP BY teachers.id
            ORDER BY total_students DESC`,   
        function(err, results){
            if(err) throw `Database Error : ${err}`

            callback(results.rows)
        })
    },
    update(data,callback){
        const query = `
            UPDATE teachers SET
            avatar_url = ($1),
            name = ($2),
            birth = ($3),
            education = ($4),
            class_type = ($5),
            subjects = ($6)
            WHERE id = $7
        `
        const values = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.education,
            data.class_type,
            data.subjects,
            data.id
        ]
        db.query(query,values,function(err,results){
            if(err) throw `Database Error : ${err}`

            callback()
        })
    },
    delete(id, callback){
        db.query(`DELETE FROM teachers WHERE id = $1`,[id],function(err,results){
            if(err) throw `Database Error : ${err}`

            callback()
        })
    },
    paginate(params){
        let {filter, limit, offset, callback} = params

        let query = ""
        let filterQuery = ""
        let totalQuery = `(SELECT count(*) FROM teachers) AS total`

        if(filter){
            filterQuery = `WHERE teachers.name ILIKE '%${filter}%'
                OR teachers.subjects ILIKE '%${filter}%'`

            totalQuery = `(SELECT count(*) FROM teachers ${filterQuery}) AS total`
        }

        query = `SELECT teachers.*, ${totalQuery},count(students) AS total_students 
            FROM teachers LEFT JOIN students 
            ON (teachers.id = students.teacher_id)
            ${filterQuery}
            GROUP BY teachers.id LIMIT $1 OFFSET $2`

        db.query(query,[limit,offset],function(err,results){
            if(err) throw `database error ${err}`
            callback(results.rows)
        })
    }
}