import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container } from 'react-bootstrap'

const ClienteForm = () => {

    // Estou verificando se existe o ID na URL
    const { id } = useParams()

    const apiUrl = import.meta.env.VITE_API_URL

    const [cliente, setCliente] = useState({
        nome: "",
        email: "",
        telefone: "",
        endereco: {
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            estado: "",
            pais: 'Brasil'
        }
    })

    const handleEndereco = (campo, valor) => {
        setCliente((prev) => ({
            ...prev,
            endereco: { ...prev.endereco, [campo]: valor }
        }))
    }

    const handleCepChange = (e) => {
        // Tem que estar pronto para mudar também o endereço completo
        handleEndereco('cep', e.target.value )
    }

    useEffect(() => {
        const cep = cliente.endereco.cep.replace(/\D/g, '')
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                handleEndereco('logradouro', response.data.logradouro)
                handleEndereco('bairro', response.data.bairro)
                handleEndereco('cidade', response.data.localidade)
                handleEndereco('estado', response.data.estado)
            })
            .catch(error => console.error("Houve um erro ao buscar o endereço no viacep: ", error))
        }
    }, [cliente.endereco.cep])

    const handleSubmit = (e) => {
        e.preventDefault()

        const request = id
        ? axios.put(`${apiUrl}/clientes/${id}`, cliente)
        : axios.post(`${apiUrl}/clientes`, cliente)

        request.then(() => setModalAberto(true))
        .catch(error => console.error("Erro ao cadastrar/editar cliente: ", error))
    }


  return (
    <Container className="mt-4">
        <h2 className="mb-4 d-flex align-items-center">
            { id ? 'Editar Cliente' : 'Adicionar Cliente' }
        </h2>

    </Container>
  )
}

export default ClienteForm