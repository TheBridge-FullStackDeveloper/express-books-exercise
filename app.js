const express = require("express");
const app = express();
const port = 3000;
const libros = require("./data/books.json")

app.get("/all", (req, res)=>{
    console.log(libros)
    res.send(libros)
})

app.get("/first", (req, res)=>{
    res.send(libros[0])
})

app.get("/last", (req, res)=>{
    res.send(libros[libros.length - 1])
})

app.get("/middle", (req, res)=>{
    res.send(libros[libros.length / 2])
})

app.get("/author/:autor", (req, res)=>{
    const autor = req.params.autor.replaceAll("-", " ")
    const libroFiltrado = libros.filter(libro => libro.author.toLowerCase().includes(autor))
    res.send(libroFiltrado[0].title)
})

app.get("/country/:autor", (req, res) =>{
    const autor = req.params.autor.replaceAll("-", " ")
    const libroFiltrado = libros.filter(libro => libro.author.toLowerCase().includes(autor))

    res.send(libroFiltrado[0].country)
})

app.get("/year&pages/:autor", (req, res)=>{
   

    const autor = req.params.autor.replaceAll("-", " ")
    const libroFiltrado = libros.filter(libro => libro.author.toLowerCase().includes(autor))
    const { year, pages } = libroFiltrado[0]
    res.send(`pagea: ${pages.toString()}, year: ${year.toString()}`)
})

app.get("/country/count/:country", (req, res)=>{
    const country = req.params.country.replaceAll("-", " ").toLowerCase()
    const libroFiltrado = libros.filter(libro => libro.country.toLowerCase().includes(country))
    res.send(libroFiltrado.length.toString())
})

app.get("/country/at-least/:country", (req, res)=>{
    const country = req.params.country.replaceAll("-", " ").toLowerCase()
    const libroFiltrado = libros.filter((libro)=>libro.country.toLowerCase().includes(country))
    res.send(libroFiltrado[0] ? true : false)
})

app.get("/pages/all-greater/200", (req,res)=>{
    let libros200 = []
    libros.forEach((libro)=>{
        if(libro.pages > 200){
            libros200.push(true)
        }
    })
    res.send(libros200.length === libros.length)
})
 
app.listen(port, ()=>{
    console.log(`El puerto ${port} esta abierto, usalo =)`)
})