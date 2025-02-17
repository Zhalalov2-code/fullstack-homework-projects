import { useEffect, useState } from "react";
import Modal from "../components/modal";
import { Link } from "react-router-dom";

function Main() {
    const [habits, setHabits] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [habitEdit, setHabitEdit] = useState(null);

    const openModal = () => {
        setHabitEdit(null)
        setModalOpen(true);
    };

    const closeModal = () => {
        setHabitEdit(null)
        setModalOpen(false);
    };

    useEffect(() => {
        const storedHabit = JSON.parse(localStorage.getItem('habits')) || [];
        setHabits(storedHabit);
    }, []);

    function addHabit(habit) {
        let newId = 1;
        if (habits.length > 0) {
            const lastHabitId = Math.max(...habits.map(h => h.id));
            newId = lastHabitId + 1;
        }

        const newHabit = {
            id: newId,
            ...habit,
            status: "В процессе"
        };

        const updatedHabits = [...habits, newHabit];
        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
    }

    function deleteHabit(id) {
        const habitDelete = habits.filter(e => e.id !== id);
        setHabits(habitDelete);
        localStorage.setItem('habits', JSON.stringify(habitDelete));
    }

    function status(id) {
        const updatedHabits = habits.map(habit => {
            if (habit.id === id) {
                if (habit.status === 'В процессе') {
                    return { ...habit, status: 'Выполнено' };
                } else {
                    return { ...habit, status: 'В процессе' };
                }
            }
            return habit;
        });

        setHabits(updatedHabits);
        localStorage.setItem('habits', JSON.stringify(updatedHabits));
    }

    function editHabit(id){
        const updateHabit = habits.find(habit => habit.id === id);
        setHabitEdit(updateHabit);
        setModalOpen(true);
    }

    function saveEditHabit(updateHabit){
        const updateHabits = habits.map(habit => {
            if (habit.id === updateHabit.id){
                return updateHabit;
            }else{
                return habit;
            }
        });
        setHabits(updateHabits);
        localStorage.setItem('habits', JSON.stringify(updateHabits));
        closeModal();
    }

    return (
        <div>
            <div className="row">
                <div className="col-12 div1 p-2 text-center">
                    <h3 className="text-white">Заметки</h3>
                    <button className="btn btn-dark" onClick={openModal}>Добавить</button>
                </div>
                <div className="col-12 p-5">
                    {habits.length === 0 ? (
                        <p className="text-center">Список пуст</p>
                    ) : (
                        <div className="row">
                            {habits.map((habit) => (
                                <div key={habit.id} className="col-12 col-md-4 mb-4 p-3">
                                    <div className="card p-3">
                                        <h4>Название: {habit.title}</h4>
                                        <p>Описание: {habit.discription}</p>
                                        <p>Статус: {habit.status}</p>
                                        <button className="btn btn-secondary" onClick={() => status(habit.id)} >{habit.status === "В процессе" ? "Отметить как выполненное" : "Отметить как в процессе"}</button>
                                        <button className="btn btn-danger mt-2" onClick={() => deleteHabit(habit.id)}>удалить</button>
                                        <button className="btn btn-primary mt-2" onClick={() => editHabit(habit.id)}>Редактировать</button>
                                        <Link to={`/habit.details/${habit.id}`}><button className="btn btn-secondary mt-2">Подробнее</button></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Modal show={modalOpen} onClose={closeModal} onAdd={addHabit} habitData={habitEdit} onEditSave={saveEditHabit}/>
        </div>
    );
}

export default Main;