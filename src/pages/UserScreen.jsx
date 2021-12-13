import React from 'react';
import { NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { getAllUsers } from '../assets/data/users';

export default function Users() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const users = getAllUsers();
    const filter = searchParams.get("filter") ?? "";
    const location = useLocation();

    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value });
    }
    return (
        <div>
            <h1>Users</h1>
            <input value={filter} onChange={handleFilter} type="text" placeholder='filter' />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <ul>
                    { users.filter(user => {
                        if(!filter) return true;

                        const name = user.name.toLowerCase();
                        return name.includes(filter.toLowerCase());
                    }).map(user => (
                        <li key={user.id}>
                            <h2>
                                <NavLink 
                                    style={({ isActive }) => isActive ? 
                                    {color: 'red'}: {}} 
                                    to={user.id.toString() + location.search}>{ user.name }</NavLink>
                            </h2>
                        </li>
                    )) }
                </ul>
                <article>
                    <Outlet />
                </article>
            </div>
        </div>
    )
}
