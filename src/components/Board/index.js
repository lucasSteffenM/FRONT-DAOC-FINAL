import React, { useState } from 'react';
import { produce } from 'immer';

import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List';

import { Container } from './styles';
import ModalComponet from '../modal/modal';

import { useEffect } from 'react';
import agent from '../../services/agent';


const data = loadLists();

export default function Board() {

    const [lists, setLists] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await agent.Api.listar();
            data.forEach((item) => {
                item.cards.push({
                    
                        "id": 0,
                        "content": ""
                    
                })
                return item;
            })
            setLists(data);
        }
        fetchData();
    }, [])


    function move(fromList, toList, from, to) {
        const newList = produce(lists, draft => {
            const dragged = draft[fromList].cards[from];
            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);
        })


        const itemToUpdate = {
            id: newList[toList].cards[to].id,
            title: newList[toList].cards[to].content,
            status: newList[toList].title
        };

        agent.Api.update(itemToUpdate)

        setLists(newList);
    }

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>
                <div className='d-flex flex-column'>
                    <ModalComponet></ModalComponet>
                    <div className='d-flex flex-row'>
                        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
                    </div>

                </div>

            </Container>
        </BoardContext.Provider>
    )
}