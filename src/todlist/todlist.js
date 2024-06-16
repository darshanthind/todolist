import { useState } from "react"
import store from "./store";
import { ADD, DEL, EDIT } from "./dispatchs.js"
import { useDispatch, useSelector } from "react-redux"


function Todlist() {
    const [inputtext, setInputtext] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.list);
    const [edit, setEdit] = useState([]);
    const [edittext, setEdittext] = useState("");

    const Handle_Edit = (index) => {
        setInputtext(list[index]);
        dispatch(EDIT(index, edittext));
        let j = [...edit];
        j[index] = false;
        setEdit(j);
        setEdittext("");
        setInputtext("");

    }
    const handleadd = (inputtext) => {
        dispatch(ADD(inputtext));
        setInputtext("")
        if (edit > 0) {
            let p = [...edit];
            p[list.length] = false;
            setEdittext(p);
        } else {
            setEdit([false]);
        }
    }
    const handledel = (i) => {
        dispatch(DEL(i))
        edit.splice(i, 1);

    }
    const Editture = (i) => {
        let j = [...edit];
        j[i] = true;
        setEdit(j);
    }

    return (
        <>
            <h1>TODO LIST</h1>
            <input type="text" value={inputtext} onChange={(e) => setInputtext(e.target.value)} ></input>
            <button onClick={() => handleadd(inputtext)} >ADD</button >
            {list?.map((v, i) => (
                <ul>
                    <li key={i}>{v}
                        <p></p>  <button style={{ background: "none", border: "none" }} onClick={() => handledel(i)}>Del</button> <span>/</span><button style={{ background: "none", border: "none" }} onClick={() => Editture(i)}>Edit</button>
                        {edit[i] == true && <>    <input type="text" defaultValue={v} onChange={(e) => setEdittext(e.target.value)} ></input><button onClick={() => Handle_Edit(i)} >Edit</button></>}
                    </li>

                </ul>
            ))
            }

        </>
    )
}

export default Todlist;