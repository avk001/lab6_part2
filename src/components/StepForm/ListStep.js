import React from 'react'

function ListDaysSteps(props) {
    const data = props.data;

    return (
        <ul>
            {
                data.map(d=>
                <li key={d.id}>
                    <p>{d.name}</p>
                    <p>{d.timeZone}</p>
                    <button >Del</button>
                </li>
            )}
        </ul>
    )
}
/*onClick={() => handleRemove(d.id)}*/

export default ListDaysSteps