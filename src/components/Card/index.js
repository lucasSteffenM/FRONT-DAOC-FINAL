import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context'

import { Container } from './styles';

import ModalEditComponent from '../modal/modalEdit';
import './style.css'; // Tell webpack that Button.js uses these styles

export default function Card({ data, index, listIndex, status }) {
    const ref = useRef();
    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'CARD',
        item: { index, listIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                return;
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
            }

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
            item.index = targetIndex;
            item.listIndex = targetListIndex;
        },
    });

    dragRef(dropRef(ref));

    return (
        (
            data?.content 
        ?
        <Container ref={ref} >
            <div className='d-flex justify-content-between align-items-center'> 
            <div style={{ wordBreak: 'break-all' }}>{data?.content}</div>
                <ModalEditComponent card={data} status={status} />
            </div>

        </Container>
        :
        <Container ref={ref} draggable={false} className='box'/>
        )
    );
}