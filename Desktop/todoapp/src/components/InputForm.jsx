
import React, { useState } from 'react'

export const InputForm = ({taskList,setTaskList}) => {

    const [inputText, setInputText] = useState("");
  
    const handlesubmit = (e) => {
        // webサーバーで処理が止まってしまう。
        // inputに出力した、文字をコンソールに出力したい
        e.preventDefault();

        // タスクを管理
        setTaskList([
            ...taskList,
            {
                id :taskList.length,
                text: inputText,
                completed :false
            }
        ]);
        // フォームで追加して、残った入力テキストを消す
        setInputText("")
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
    }



    return (
    <div>
      <div className="inputForm">
        <form onSubmit={handlesubmit}>
            <input type="text" onChange={handleChange} value = {inputText}/>
            <button>
                <i className="fa-solid fa-plus"></i>
            </button>
        </form>
      </div>
    </div>
  )
}
