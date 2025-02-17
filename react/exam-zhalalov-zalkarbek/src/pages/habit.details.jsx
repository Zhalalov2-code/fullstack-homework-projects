import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function HabitDetails() {
    const { id } = useParams();
    const [habit, setHabit] = useState(null);

    useEffect(() => {
        const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
        const detailsHabits = storedHabits.find(habit => habit.id === parseInt(id));
        setHabit(detailsHabits);
    }, [id])

    if (!habit) {
        return <div>Не найдено</div>
    }
    
    return (
        <div className="habit-details p-3">
            <h1>Название: {habit.title}</h1>
            <p>Описание: {habit.discription}</p>
            <p>Статус: {habit.status}</p>
            <Link to='/'>
                <button className='btn btn-success'>Назад</button>
            </Link>
        </div>
    )
}

export default HabitDetails;