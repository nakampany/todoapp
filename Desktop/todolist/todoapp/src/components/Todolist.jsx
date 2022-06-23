import React from 'react'

export const Todolist = ({taskList ,setTaskList }) => {
  
  const handleDelete =  (id) =>{
    // タスクを削除
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  const handleCompleted =  (id) =>{
    // 取り消し線を追加
    setTaskList(taskList.map((task) => {
        if (id === task.id){
            return{
                ...task,
                completed : !task.completed
            };
        }
        return task;
    }))
  };

    return (
    <div>
        <div className="Todolist">
            <div className="todos">
                {taskList.map((task,index) =>(
                    // classない便利
                    <div className={`todo ${task.completed ? "completed" : ""}`} key = {index}>
                    <div className="todoText">
                        <span>{task.text}</span>
                    </div>
                    <div className="icons">
                        <button onClick ={() => handleCompleted(task.id)}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                        <button onClick ={() => handleDelete(task.id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )

}
