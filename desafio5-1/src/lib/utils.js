module.exports = {
    age(timestamp){
        const today = new Date() // formato de data- Hj
        const birthDate = new Date(timestamp) //formato de data -Birth

        let age = today.getFullYear() - birthDate.getFullYear() // idade em anos
        let month = today.getMonth() - birthDate.getMonth() //checa se mes de niver já passou

        if(month < 0 || month == 0 && today.getDate < birthDate.Date()){
            age = age - 1
        }
        return age
    },
    date(timestamp){
        const date = new Date(timestamp)
        
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            birthday: `${day}/${month}`,
            iso: `${year}-${month}-${day}`
        }
    },
    grauDeEscolaridade(degree){
        
        if(degree =='high-school')
            return 'Nivel Médio Completo'

        else if(degree =='college')
            return 'Nivel Superior Completo'

        else if(degree =='master')
            return 'Mestrado Completo'

        else if(degree =='doctor')
            return 'Doutorado Completo'
        
        else return "Não preenchido"
    },
    getGrade(grade){
        if(grade =='EF5')
            return '5º Ano do Ensino Fundamental'

        else if(grade =='EF6')
            return '6º Ano do Ensino Fundamental'

        else if(grade =='EF7')
            return '7º Ano do Ensino Fundamental'

        else if(grade =='EF8')
            return '8º Ano do Ensino Fundamental'
        
        else if(grade =='EF9')
            return '9º Ano do Ensino Fundamental'
    
        else if(grade =='EM1')
            return '1º Ano do Ensino Médio'

        else if(grade =='EM2')
            return '2º Ano do Ensino Médio'

        else if(grade =='EM3')
            return '3º Ano do Ensino Médio'

        else return "Não preenchido"
    }
}