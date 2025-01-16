export function useHistory() {
    const history = [
        {
            time: '2025-01-14 10:00',
            item: 'Pacman',
            price: '500'
        },
        {
            time: '2025-01-13 19:00',
            item: 'Lata Coca Cola',
            price: '500'
        },
        {
            time: '2025-01-13 12:00',
            item: 'Tetris',
            price: '500'
        }
    ]

    return { history };
}