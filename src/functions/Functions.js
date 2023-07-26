import axios from "axios";

const getFuturasCarreras = async (state) => {
    const consulta = await axios.get('https://jsonplaceholder.typicode.com/posts')
    state(consulta.data)
}

const getUltimasCarreras = async (state) => {
    const consulta = await axios.get('https://jsonplaceholder.typicode.com/posts')
    state(consulta.data)
}

export{
    getFuturasCarreras,
    getUltimasCarreras
}