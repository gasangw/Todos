import uuid from 'react-uuid';
const TODOS = [
    {
        id: uuid(),
        message: "I love what am doing",
        checked: false
    },
    {
        id: uuid(),
        message: "Solve a kata",
        checked: false
    },
    {
        id:uuid(),
        message: "Play music",
        checked: false
    }
]

export default TODOS;
