import React from 'react'
import { Container, Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FaQuestionCircle } from 'react-icons/fa'

const FornecedorForm = () => {
  return (
    <Container className="mt-4">
        <h2 className="mb-4 d-flex align-items-center">
            { /* Por enquanto, apenas o texto de Adicionar, depois colocamos Editar tb */ }
            Adicionar Fornecedor
            <OverlayTrigger
                placement="right"
                overlay={<Tooltip>Preencha os dados do fornecedor</Tooltip>}
            >
                <span className="ms-2" style={{ cursor: 'pointer' }}>
                    <FaQuestionCircle />
                </span>
            </OverlayTrigger>
        </h2>

        <Form>
            
        </Form>

    </Container>
  )
}

export default FornecedorForm