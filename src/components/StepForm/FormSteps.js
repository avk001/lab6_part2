import React from 'react'
import { nanoid } from 'nanoid'
import {useState} from 'react'
import MyTime from "./Time";


function FormSteps(props) {
    const ItemtimeZone = {
        name: '',
        timeZone: 3
    }

    const [form, setForm] = useState(ItemtimeZone )
    const [atimeZone, setDays] = useState([]);

    const handleFormSubmin = evt => {
        evt.preventDefault();
        setForm(prevForm => ({...prevForm, [evt.target[0].value]: evt.target[1].value}));

        const day = {id:nanoid(), name:form.name, timeZone:+form.timeZone};
        // const day  = new myTime({id:nanoid(), name:form.name, timeZone:+form.timeZone})

        setDays(prevDays => [...prevDays, day]);

        setForm(ItemtimeZone);
    }

    const handleChange = evt => {
        let {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }
    const handleRemove  = id => {
        setDays(prevDays => prevDays.filter(day => day.id !== id))
    }

    return (
        <React.Fragment>
            <form className='input-form' onSubmit={handleFormSubmin}>
                <div className='input-wrap'>
                    <div className='day'>
                        <label htmlFor='name'>Название</label>
                        <input name='name' value={form.name} onChange={handleChange} />
                    </div>
                    <div className='day'>
                        <label htmlFor='name'>Временная зона</label>
                        <input name='timeZone' value={form.timeZone} onChange={handleChange} />
                    </div>
                    <button className='day submit-btn'> OK </button>
                </div>
            </form>
            <div className='list-wrap'>
                <ul className='days-list'>
                    {
                        atimeZone.sort((a, b) => {
                            return a.timeZone>b.timeZone;
                        })
                            .reverse()
                            .map( o =>
                                    <li className='day-info' key={o.id}>
                                        <MyTime name={o.name} id={o.id}  timeZone={o.timeZone} onRemove={handleRemove}/>
                                    </li>
                            )
                    }
                </ul>
            </div>
        </React.Fragment>

    )
}

export default FormSteps