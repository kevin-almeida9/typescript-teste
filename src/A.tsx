import React, { useState, useEffect, MouseEvent } from 'react'

import api from "./services/api"

const A = (props: any) => {
    const [value, setValue] = useState('')
    const [b, setB] = useState(false);
    const [c, setC] = useState(true);

    const { note } = props
    useEffect(() => {
        setValue(note.body)

    }, [note])

    const handleUpdate = async (e: MouseEvent) => {
        e.preventDefault()
        await api.put(`notes/${note._id}`, { title: note.title, body: value })
    }
    const handleDelete = async (e: MouseEvent) => {
        e.preventDefault()
        props.delete(note._id)
        // await api.delete(`notes/${note._id}`)
    }
    return (
        <>
            <h1>{note.title}</h1>

            { b ? (<input value={value} onChange={e => setValue(e.target.value)} />) : <p>{value}</p>}

            {c ? (<button
                onClick={e => {
                    console.log(e)
                    setB(!b)
                    setC(!c)

                }}
            >botao
            </button>
            ) : <button
                onClick={e => {
                    console.log(e)
                    setB(!b)
                    setC(!c)
                    handleUpdate(e)
                }}
            >alterar
           </button>}

            <button style={{ marginLeft: "10px" }} onClick={e => handleDelete(e)}>Delete</button>
        </>)

}

export default A;