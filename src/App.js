import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import {IoMdAdd} from 'react-icons/io'
import {RiEditBoxLine} from 'react-icons/ri'
import {TiDeleteOutline} from 'react-icons/ti'
import {MdOutlineSaveAlt} from 'react-icons/md'


function App() {
  let [txt, setTxt] = useState("")
  let [list, setList] = useState([]);

  const editButton = (index) => {
    setList(list.map((value, i) => {
      if (index === i) {
        return {
          ...value,
          edit: value.edit ? false : true,
        }

      }

      else {
        return {
          ...value,
          edit: false,
        }
      }
    }))
  }

  const add = () => {

    setList([...list, { val: txt }])

  }

 let deleteValue;
  const deleteButton = (index) => {
    const deletelist = [...list]
    deleteValue = deletelist.filter((todoValue, indexValue) => {
      if(index !== indexValue) {
        return todoValue;
      } 
    })
    setList(deleteValue)
  }

  const todolist = list.map((todo, index) => {
    return (
      <div className='list1 mt-4'>
        <div className='list'>
    
        <li className='list2 fs-2 d-flex' key={index}> {todo.edit ? <input className='inputstyle' type="text" value={todo.val}
          onChange={(inpVal) => {
            setList(list.map((e, i) => {
              if (index == i) {
                return {
                  ...e,
                  val: inpVal.target.value,
                }
              }
              else {
                return e;
              }
            }))
          }} /> : todo.val
        }
         <div>
          <Button classes={"btn fs-3"}  click={() => editButton(index)} addValue={todo.edit ? <MdOutlineSaveAlt className='emoj' /> : <RiEditBoxLine className='emoj' /> }  />
          {!todo.edit && <Button classes={"btn fs-3"}  click={() => deleteButton(index)} addValue={<TiDeleteOutline className='emoj'/>} />}
          </div>


        </li>
        </div>
      </div>
    )
  })

  return (
    <>
     <Header/>
    <div className='text-center my-5'>
      <input className='inp p-2 fs-4' onChange={(e) => {
        setTxt(e.target.value)
      }} />

      <Button classes={"btn fs-3"} addValue={<IoMdAdd/>} click={add} />

    </div>
      {todolist}  
    </>
  );
}

export default App;