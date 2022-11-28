import {useState, useEffect} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import {helpHttp} from '../helpers/helpHttp'
import Loader from './Loader'
import Message from './Message'

const CrudApi = () => {
  
  const [db, setDb] = useState(null)
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  let api = helpHttp()
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true)
    api.get(url).then((res) => {
      //console.log(res)
      if(!res.err) {
        setDb(res)
        setError(null)
      } else {
        setDb(null)
        setError(res)
      }

      setLoading(false)
      });
      }, []);

  const createData = (data) => {
    //console.log(data)
    data.id = Date.now();
    setDb([
      ...db, data
    ])

  }

 const updateData = (data) => {
   let newData = db.map(el => el.id === data.id ? data : el)
   setDb(newData); 
 }

 const deleteData = (id) => {
   //window.confirm es una build-in function de react tipo alert
  let isDelete = window.confirm('¿esta seguro de eliminar el registro con el id ?')  
 
  if(isDelete) {
    let newData = db.filter(el => el.id !== id);
    setDb(newData)
  } else {
    return;
  }

}

  return (
    <>
        <h2>CRUD API</h2>
        <article className="grid-1-2">
        <CrudForm 
        createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit} 
        setDataToEdit={setDataToEdit}
        />
        {loading && < Loader />}
        {error && 
        < Message 
          msg={`Error ${error.status}: ${error.statusText}`} 
          bgColor="#dc3545" 
          />
        }
        {db && <CrudTable 
        data={db} 
        deleteData={deleteData} 
        setDataToEdit={setDataToEdit}
        />}
        </article>
    </>
  )
}

export default CrudApi