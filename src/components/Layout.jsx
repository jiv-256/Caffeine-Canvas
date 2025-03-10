import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import Authentication from './Authentication';
import { useAuth } from '../Context/AuthContext'

export default function Layout(props) {
    const { children } = props;
    const [showModal, setShowModal] = useState(false)
    const { globalUser, logout } = useAuth()

    function handleCloseModal() {
        setShowModal(false)
    }
    return (
        <>
             {showModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal} />
                </Modal>
            )}
            <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            {globalUser ? (
                <button onClick={logout}>
                    <p>Logout</p>
                </button>
            ) : (
                <button onClick={() => { setShowModal(true) }}>
                    <p>Sign up free</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
            )}
        </header>

            <main>
                {children}
            </main>

            <footer>
                <p><span className="text-gradient">Caffeine Canvas</span> was made by <a target="_blank" href="https://www.linkedin.com/in/rajiv-nayan-pathak-7b8a80232/">R.N pathak</a><br />Check out the project on <a target="_black" href="https://github.com/jiv-256">GitHub</a>!</p>
            </footer>
        </>
    );
}