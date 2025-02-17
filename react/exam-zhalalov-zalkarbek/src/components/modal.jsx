import { useEffect, useState } from "react";

function Modal({ show, onClose, onAdd, habitData, onEditSave }) {
    const [title, setTitle] = useState('');
    const [discription, setDiscription] = useState('');

    useEffect(() => {
        if (habitData){
            setTitle(habitData.title);
            setDiscription(habitData.discription);
        }else{
            setTitle('');
            setDiscription('');
        }
    }, [habitData])

    if (!show) return null;

    function formSenden(e) {
        e.preventDefault();
        const habit = {
            title: title,
            discription: discription
        };

        if (habitData) {
            const updatedHabit = {
                ...habitData,
                title: habit.title,
                discription: habit.discription,
            };
            onEditSave(updatedHabit);
        } else {
            onAdd(habit);
        }

        onClose();
        setTitle('');
        setDiscription('');
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <form onSubmit={formSenden}>
                    <div className="modal-header text-center text-center">
                        <h3>{habitData ? 'Редактировать' : 'Добавить'}</h3>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="">Название:</label>
                        <br />
                        <input className="form-control" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                        <br />
                        <label htmlFor="">Описание:</label>
                        <input className="form-control" type="text" required value={discription} onChange={(e) => setDiscription(e.target.value)} />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-success">
                            {habitData ? 'Сохранить изменение' : 'Добавить'}
                        </button>
                        <button type="button" onClick={onClose} className="btn btn-danger">Закрыть</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;