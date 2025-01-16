export function useDrinks() {
    const drinks = [
        {
            id: 1,
            name: 'Lata Coca Cola',
            price: '500',
            img: '',
            machines: [
                {
                    id: 1,
                    name: 'Comedor',
                    img: '',
                    stock: true
                },
                {
                    id: 2,
                    name: '2do Piso',
                    img: '',
                    stock: false
                }
            ]
        },
        {
            id: 2,
            name: 'Lata Coca Sprite',
            price: '450',
            img: '',
            machines: [
                {
                    id: 1,
                    name: 'Comedor',
                    img: '',
                    stock: false
                },
                {
                    id: 2,
                    name: '2do Piso',
                    img: '',
                    stock: false
                }
            ]
        }
    ];

    return { drinks };
}