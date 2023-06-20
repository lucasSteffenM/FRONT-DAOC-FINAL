import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import agent from '../../services/agent';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function ModalComponet() {

    const [modalIsOpen, setIsOpen] =useState(false);

    const [titulo, setTitulo] = useState('');

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleChange(event){
        setTitulo(event.target.value)

    }

    async function handleSave(){
        
        if (titulo.length === 0){
            return;
        }
        
        const task = {
            "title":titulo,
            "description":'',
            "status":'tarefas'
        }

        await agent.Api.inserir(task);

        closeModal();

        window.location.reload(true)

    }

    return (
        <div>
            <button onClick={openModal} className='btn btn-secondary ms-2'>Inserir</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div className='fs-5'>Criar uma tarefa</div>
                    <button onClick={closeModal} className='btn'>X</button>
                </div>
                <div className="mb-3">
                    <label className="form-label fs-6">Nome da tarefa</label>
                    <input type="text" className="form-control" id="titulo" aria-describedby="titulohelp" onChange={handleChange}  />
                    <div className='d-flex justify-content-end mt-2'>
                        <button onClick={handleSave} className='btn btn-primary'>Salvar</button>
                    </div>

                </div>
            </Modal>
        </div>

    );

}