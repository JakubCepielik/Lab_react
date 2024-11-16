import { useContext, useState } from "react";
import { useCol } from "react-bootstrap/esm/Col";
import AppContext from "../data/AppContext";

function CreateForm() {
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const dispatch = useContext(AppContext).dispatch;
    
    const onSubmit = async e => {
        e.preventDefault();
        const err=[];
        const data = new FormData(e.target);
        const imie = data.get("imie");

        setErrors(new Array());
        console.log(errors)
        if(imie.slice(0,1) !== imie.slice(0,1).toUpperCase())
        {
            err.push("Imie musi byc z wielkiej litery");
        }

        if(err.length != 0){
            setErrors(err)
            return;
        }
        setErrors([]);

        setSending(true);
        await new Promise(res => setTimeout(res,1000));

        dispatch({
            type: "add",
            data: {}
        })
        setSending(false);
        for(let key of data.keys()){
            e.target[key].value = "";
        }
    }

    return ( 
        <>
        <div className="text-danger">
            {errors.map(e => <span>{e}</span>)}
        </div>
        <h1>Create Form</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="imie">Imie</label>
            <input name="imie" required minLength="3" maxLength="20"/>
            <button disabled={isSending} type="submit">Zapisz</button>
        </form>
        </>
     );
}

export default CreateForm;