const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4') 


const app = express()
app.use(express.json())
const cinema = []

app.get('/Cinema',(request, response) =>{
    return response.json(Cinema);

})
app.post('/Cinema', (request, response) =>{
    const {id,poltrona, telão, filmes, escada} = request.body
    const cinema = {poltrona, telão, filmes, escada};
    cinema.push(cinema)
    return response.status(201).json(cinema);

})
app.put('/cinema/cinema:id',(request, response) => {
    const { Cinema_id } = request.params
    const { poltrona, telão, filmes, escada } = request.body
    const newCinema = {id, poltrona, telão, filmes, escada}
    const cinemaindex = alunos.findIndex(aluno => aluno.id == id)
    cinema[cinemaindex] = newCinema;
    return response.json(newCinema)
})

app.delete('/Cinema/:cinema_id',(request, response) => {
    const { Cinema_id } = request.params
    const cinemaindex = cinema.findIndex(cinema => cinema.id == id)
    cinema.splice(cinemaindex, 1)
    return response.status(204). json('deleted');
})

app.listen(8181, () =>{
    console.log('O servidor foi iniciadio!')
})
