import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/universidad', {})
.then(() => console.log("Conectado a MongoDB"))
.catch((err) => console.log(err))

const esquema = mongoose.Schema({
    _id:Number,
    Nombre:String,
    Apellido:String,
    Profesion:String,
    Edad:Number,
}, {versionKey:false})

const modelo = mongoose.model('docentes', esquema)  

// Consultas
async function consultar () {
    let documentos = await modelo.find()
    console.log(documentos)
}

const consultaEsp = async () => {
    let documento = await modelo.find({Nombre:"Jonier"})
    console.log(documento)
}

const insertar = async () => {
    let documento = new modelo({
        _id:8096,
        Nombre:"Nicolas",
        Apellido:"Rodriguez",
        Edad:28
    })

    await documento.save()
}

async function eliminar() {
    let documento = await modelo.deleteMany({Nombre:"Jonier"})
}

const actualizar = async () => {
    let documento = await modelo.updateMany({Nombre:"Nicolas"}, {
        $set:{
            Nombre:"Jonier",
            Edad:25
        }
    })
}

export {consultar, consultaEsp, insertar, eliminar, actualizar}
