import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3003/users');
        setUser(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }


    return ( 
        <div className="container">
            <div className="py-4">
                <h1 className="text-center py-3">Contact Book</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/users/${user.id}`} className="btn btn-primary mr-2 rounded-circle"><i className="fas fa-eye"></i></Link>
                                    <Link to={`/users/edit/${user.id}`} className="btn btn-primary rounded-circle mr-2"><i className="fas fa-edit"></i></Link>
                                    <Link className="btn btn-danger" onClick={() => deleteUser(user.id)} ><i className="fas fa-trash-alt"></i></Link>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
     );
}
 
export default Home;