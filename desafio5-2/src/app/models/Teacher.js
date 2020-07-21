const db = require('../../config/db')
const {age, date, grauDeEscolaridade} = require('../../lib/utils')

module.exports ={
    all(callback){
        db.query(`SELECT * FROM teachers ORDER BY name ASC`, function(err,results){
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
    }
}