export function useUsers() {
    const users = [
        {
            room: 303,
            pass: 5150,
            cash: 1500
        },
        {
            room: 208,
            pass: 1985,
            cash: 0
        },
        {
            room: 609,
            pass: 5555,
            cash: 20000
        },
        {
            room: 101,
            pass: 3131,
            cash: 850
        },
        {
            room: 102,
            pass: 1234,
            cash: 0
        }
    ]

    return { users };
}