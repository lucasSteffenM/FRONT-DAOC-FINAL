import React from 'react';



import Card from '../Card';

import { Container } from './styles';



export default function List({ data, index: listIndex }) {
    
    
    return(
        <Container done={data.done}>
            <br/>
            <header>
                <h2 className='fw-bold text-capitalize'>{data.title}</h2>
            </header>

            <ul>
                { data.cards.map((card, index) => (
                    <Card 
                        key={card.id} 
                        listIndex={listIndex}
                        index={index} 
                        data={card}
                        status={data.title}
                    />
                )) }
            </ul>
        </Container>
    )
}