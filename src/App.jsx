import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Paination from './components/Pagination'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import './styles.css'


function App() {
    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        fetch('https://zcixnpspcpctzqmfmkke.supabase.co/rest/v1/users', {
            headers: {
                'apikey': 'sb_publishable_erFUf6AXpupi-OgRKJ33Qw_lnj1qVG2'
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <UserSearch />

                    <UserList users={users}/>

                    {/* New user button  */}
                    <button className="btn-add btn">Add new user</button>

                    <Paination />

                </section>
                {/* User details component  */}


            </main>
            <Footer />
        </>
    )
}

export default App
