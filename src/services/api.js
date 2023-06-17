export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Card 1',
            labels: ['#7159c1'],
            user: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          },
          {
            id: 2,
            content: 'Card 2',
            labels: ['#7159c1'],
            user: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          },
          {
            id: 3,
            content: 'Card 3',
            labels: ['#7159c1']
          },
          {
            id: 4,
            content: 'Card 4',
            labels: ['#54e1f7'],
            user: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          },
          {
            id: 5,
            content: 'Card 5',
            labels: ['#54e1f7']
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Card 6',
            labels: [],
            user: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          },
          {
            id: 7,
            content: 'Card 7',
            labels: [],
            user: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          },
          {
            id: 8,
            content: 'Card 8',
            labels: [],
            user: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 9,
            content: 'Card 9',
            labels: ['#7159c1'],
            user: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          },
          {
            id: 10,
            content: 'Card 10',
            labels: ['#54e1f7'],
            user: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          },
          {
            id: 11,
            content: 'Card 11',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 12,
            content: 'Card 12',
            labels: [],
          },
          {
            id: 13,
            content: 'Card 13',
            labels: ['#54e1f7'],
          },
          {
            id: 14,
            content: 'Card 14',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }