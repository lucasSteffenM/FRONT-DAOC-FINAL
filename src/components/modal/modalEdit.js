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

export default function ModalEditComponent({card, status}) {

    const [modalIsOpen, setIsOpen] =useState(false);
    const [titulo, setTitulo] = useState(card.content);

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

    async function handleDelete(){
        const body={
           id: card.id
        }
        await agent.Api.delete(body)

        closeModal();
        window.location.reload(true)
    }

    async function handleSave(){
        
        if (titulo.length === 0){
            return;
        }
        
        const task = {
            "title":titulo,
            "status":status,
            "id": card.id
        }

        await agent.Api.update(task);

        closeModal();

        window.location.reload(true)
    }

    return (
        <div>
            {card.content && 
             <button onClick={openModal} className='btn btn-outline-primary px-2'><svg fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 306.637 306.637" space="preserve">
             <g>
                 <g>
                     <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
     l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"/>
                     <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
     L265.13,75.602L231.035,41.507z"/>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
                 <g>
                 </g>
             </g>
         </svg></button>
         }
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <div className='fs-5'>Atualizar tarefa</div>
                    <button onClick={closeModal} className='btn'>X</button>
                </div>
                <div className="mb-3">
                    <label className="form-label fs-6">Nome da tarefa</label>
                    <input type="text" className="form-control" id="titulo" aria-describedby="titulohelp" value={titulo} onChange={handleChange}  />
                    <div className='d-flex justify-content-end mt-2'>
                    <button onClick={handleDelete} className='btn btn-danger me-2'>Deletar</button>
                        <button onClick={handleSave} className='btn btn-primary'>Salvar</button>
                    </div>

                </div>
            </Modal>
        </div>

    );

}