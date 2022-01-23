import React, {Component} from 'react';
import './App.scss';
import About from './About/About';
import Cars from './Cars/Cars';
import {Route, Routes, NavLink, Navigate} from 'react-router-dom'
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {

    state = {
        isLoggedIn: false
    }

    render() {

        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cars'>Cars</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
                <hr/>
                <h3> Is logged in {this.state.isLoggedIn.toString()}</h3>
                <button onClick={() => this.setState({isLoggedIn: !this.state.isLoggedIn})}>
                    Login
                </button>
                <hr/>
                {/* Routing */}
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>}/>
                    {/* secure routing */}
                    {this.state.isLoggedIn ? <Route path="/about" element={<About />}/> : null}
                    <Route path="/cars" element={<Cars />}/>
                    <Route path="/cars/:name" element={<CarDetail />}/>
                    <Route path='*' element={<Navigate replace to='/'/>}/> {/* use at the very end */}
                </Routes>
                {/* Конец */}
            </div>
        );
    }
}

export default App
