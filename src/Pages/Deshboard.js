import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';

const Deshboard = () => {
    const [users, setUser] = React.useState([]);
    const [load, setLoad] = React.useState(false);
    const alart = useAlert();

    useEffect(() => {
        fetch("https://md-iqbal-portfolio.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUser(data))
    }, [load])

    const deleteUser = (id) => {
        const confirm = window.confirm("Are you sure to delete");
        if (confirm) {
            fetch(`https://md-iqbal-portfolio.herokuapp.com/users/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remain = users.filter(user => user._id !== id);
                        setUser(remain);
                        alart.show("user delete successful");
                        if (load) {
                            setLoad(false)
                        } else {
                            setLoad(true)
                        }
                    }
                })
        }
    };
    const statusDpdate = (id) => {
        const data = {
            id: id,
            status: "Done"
        }
        fetch("https://md-iqbal-portfolio.herokuapp.com/users", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 1) {
                    alart.show("Update successful")
                }
            })
    }
    return (
        <div className='px-10 bg-white'>
            {users.length ?
                <div className='grid grid-cols-4 gap-5 py-5 border-b tex'>
                    <p>User details</p>
                    <p>User email</p>
                    <p>Massege</p>
                    <p></p>
                </div> :
                <div className='flex justify-center h-screen items-center text-2xl'>
                    <p>There is no user</p>
                </div>
            }

            {users.length &&
                users.map(user => <div
                    key={user._id}
                    className='grid grid-cols-4 gap-5 py-5 border-b'>
                    <p>{`Name: ${user.name} Number: ${user.number}`}</p>
                    <p>{user.email}</p>
                    <p>{user.massege}</p>
                    <div className='flex justify-center'>
                        <p className='text-green-500'>{user.status}</p>
                        {user.status !== "Done" && <button onClick={() => { statusDpdate(user._id) }} className='btn btn-2'>done</button>}
                        <button onClick={() => { deleteUser(user._id) }} className='btn btn-2'>delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Deshboard;