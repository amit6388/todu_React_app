import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
export default function Tasks() {
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState("")

    const [des, setDes] = useState("")
    const email = window.localStorage.getItem('id')
    // useEffect(()=>{
    //     window.location.reload(true)
    // },[])

    function uploadTask() {

        const newObj = {
            title: title,
            email: email,
            des: des,
            status: status

        }
        var data = JSON.parse(window.localStorage.getItem("task"))
        if (data == null)
            data = [newObj]
        else
            data.push(newObj)
        window.localStorage.setItem("task", JSON.stringify(data))
        setTitle("")
        setDes("")

    }
    const show = JSON.parse(window.localStorage.getItem("task"))
    function logout() {
        window.localStorage.removeItem('id')
    }


    let handleComplete = (id) => {
        var data = JSON.parse(window.localStorage.getItem("task"))
        data[id].status = 'pending'
        window.localStorage.setItem("task", JSON.stringify(data))
        window.location.reload(true)
    }
    let handlePending = (id) => {
        var data = JSON.parse(window.localStorage.getItem("task"))
        data[id].status = 'completed'
        window.localStorage.setItem("task", JSON.stringify(data))
        window.location.reload(true)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h1 className="text-center"><h1 style={{ color: "red" }}>welcome  </h1><br />Create Task...<Link to={'/'}> <button onClick={logout} className="btn btn-outline-info">logout</button><br /> </Link> </h1>
                    <form>
                        <label>Title</label><br />
                        <input type='text' onChange={(e) => setTitle(e.target.value)} className="form-control" />
                        <label>Description</label>:<br />
                        <textarea className="form-control" onChange={(e) => setDes(e.target.value)} ></textarea> <br />
                        <label>Status</label> : <select onChange={(e) => setStatus(e.target.value)}  >
                            <option>select</option>
                            <option value={'pending'}>Completed</option>
                            <option value={'completed'}>Pending</option>
                        </select> <br /><br />
                        <button onClick={uploadTask} className="btn btn-success">submit</button>
                    </form>
                </div>
                <div className="col-sm-4">  </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-6 p-4">
                    <h1 style={{ color: "red" }}>Completed</h1><br />
                    <table className="table table-bordered">
                        <thead className="text-bg-dark"><tr><th>title</th> <th>Description</th> <th> status</th></tr></thead>
                        <tbody>

                            {show == null ? <span>no records found</span> : show.map((data, index) => {

                                if (data.email == email && data.status == 'pending') {
                                    return (
                                        <tr key={index}>
                                            <td>{data.title}</td>
                                            <td>{data.des}</td>
                                            <td><button className="btn btn-outline-info" onClick={() => { handlePending(index) }}> {data.status}</button></td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-6 p-4">
                    <h1 style={{ color: "red" }}>Pending</h1>
                    <table className="table table-bordered">
                        <thead className="text-bg-dark"><tr><th>title</th> <th>Description</th> <th> status</th></tr></thead>
                        <tbody>

                            {show == null ? <span>no records found</span> : show.map((data, index) => {

                                if (data.email == email && data.status == 'completed') {
                                    return (
                                        <tr key={index}>
                                            <td>{data.title}</td>
                                            <td>{data.des}</td>
                                            <td><button className="btn btn-outline-info" onClick={() => { handleComplete(index) }}> {data.status}</button></td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="row">






            </div>
        </div>
    )
}