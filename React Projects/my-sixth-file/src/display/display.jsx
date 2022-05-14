import React from 'react';
import Planets from "../fetchUsers/fetchUsers";
import './display.css';

function Swing() {

    const[handle] = Planets();

    return(
        <div>
            <table>
                <thead>

                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Id</th>
                        <th>Last Name</th>
                    </tr>
                </thead>

                <tbody>
                    {handle.map(user => <tr>
                        <td>{user.email}</td>
                        <td>{user.first_name}</td>
                        <td>{user.id}</td>
                        <td>{user.last_name}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
  }

export default Swing;