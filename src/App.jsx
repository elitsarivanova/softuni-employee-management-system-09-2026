import Footer from './components/Footer'
import Header from './components/Header'
import Paination from './components/Pagination'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import './styles.css'

function App() {

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <UserSearch />

                    <UserList />



                    <Paination />

                </section>
                {/* User details component  */}


            </main>
            <Footer />
        </>
    )
}

export default App
