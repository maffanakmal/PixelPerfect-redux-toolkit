import React, { useEffect } from 'react'; // Fixed typo here: userEffect -> useEffect
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './userSlice';

function UserComponent() { // Changed the component name to start with uppercase
    const userData = useSelector((state) => state.user.data);
    const isLoading = useSelector((state) => state.user.loading);
    const dispatch = useDispatch();

    useEffect(() => { // Fixed typo here: userEffect -> useEffect
        dispatch(fetchUser());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(userData);

    return (
        <div>
            <h2>User Details</h2>
            {userData?.map((item) => (
                <div key={item.id}>
                    <span>Name: {item.name}</span>
                    <span> - </span>
                    <span>Email: {item.email}</span>
                </div>
            ))}
        </div>
    );
}

export default UserComponent; // Changed the export name to start with uppercase
