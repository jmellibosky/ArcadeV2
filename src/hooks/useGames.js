export function useGames() {
    const games = [
        {
            id: 1,
            name: 'Pacman',
            price: '500',
            img: '',
            machines: [
                {
                    id: 3,
                    name: 'Arcade 03',
                    img: '',
                    stock: true
                }
            ]
        },
        {
            id: 2,
            name: 'Super Mario Bros',
            price: '500',
            img: '',
            machines: [
                {
                    id: 2,
                    name: 'Arcade 02',
                    img: '',
                    stock: true
                }
            ]
        },
        {
            id: 3,
            name: 'Tetris',
            price: '500',
            img: '',
            machines: [
                {
                    id: 1,
                    name: 'Arcade 01',
                    img: '',
                    stock: true
                }
            ]
        }
    ];

    return { games };
}