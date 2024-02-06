import React, { useState } from 'react'
import '../style.css';
import '../App.css';
import Table from './Table';

function Form() {
const [table,setTable] = useState<string>();
const [url,setURL] = useState<string>();


const btnClick = (e:any)=>{
    e.preventDefault();
    setURL(table);

}
const getTxt = (e:any)=>{
    setTable(e.target.value)
}

const render = ()=>{
    if(url){
        return(<Table/>)
    }
    else{
        return(<>

              <div className='main_div'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Import your table now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={btnClick} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Table URL</span>
                            </label>
                            <input onChange={getTxt} type="text" placeholder="Table URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                            <button  className="btn btn-primary">Import Table</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>    
                </div>
        </>)
    }
}

  return (
    <>
    {
        render()
    }
    </>
  )
}

export default Form
