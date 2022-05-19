import React from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://nameless-shelf-94689.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    Toastify({
                        text: 'Faild to make an Admin',
                        className: "info",
                        gravity: "top",
                        position: "center",
                        style: {
                            background: "linear-gradient(to right, #FF0000, #FF0000)",
                            fontWeight: 'bold',
                            letterSpacing: '0.1em'
                        }
                    }).showToast();
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Toastify({
                        text: `Successfully made an Admin`,
                        className: "info",
                        gravity: "top",
                        position: "center",
                        style: {
                            background: "linear-gradient(to right, #02AABD, #00CDAC)",
                            fontWeight: 'bold',
                            letterSpacing: '0.1em'
                        }
                    }).showToast();
                }
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>
                {
                    role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
                }
            </td>
            <td><button className="btn btn-xs bg-red-500">Remove User</button></td>
        </tr>
    );
};

export default UserRow;