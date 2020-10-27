import React, { useEffect, useState, MouseEvent } from 'react';
import api from './services/api'
import { Cardnote } from './styles/styles'
import { connect } from 'react-redux'
import { requestApiData } from './store/notes/actions'

import A from './A'
import INote from './interfaces/INote'


function App({ notesStore, dispatch }: any) {
  const [notes, setNotes] = useState<INote[]>([]);
  const [b, setB] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  useEffect(() => {
    // api.get('notes').then(response => {
    //   setNotes(response.data);
    // })
    setNotes(dispatch(requestApiData()))
  }, [dispatch]);

  const handleCreate = async (e: MouseEvent) => {
    e.preventDefault()
    let result: any = await api.post('notes', { title: title, body: body })
    const {
      _id,
    } = result.data
    setNotes([...notes, { _id: _id, title: title, body: body }])
    setB(false)
    setTitle('')
    setBody('')
  }

  const handleDelete = async (id: string) => {
    await api.delete(`notes/${id}`)
    setNotes(notes.filter(note => note._id !== id))
  }

  return (
    <div className="App">
      <button onClick={e => setB(!b)}>Create New Note</button>
      {b && (
        <Cardnote>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} /> <br />
          <input type="text" value={body} onChange={e => setBody(e.target.value)} /> <br />
          <button onClick={e => { handleCreate(e) }}>Save</button>
        </Cardnote>
      )}
      {
        //@ts-ignore
        notesStore.map(note => (
          < Cardnote key={note._id} >
            <A
              note={note}
              delete={handleDelete}
            />
          </Cardnote>
        ))
      }
    </div >
  );
}

const mapStateToProps = (state: any) => {
  return {
    notesStore: state.notes

  }
}

export default connect(mapStateToProps)(App)
//export default App;
