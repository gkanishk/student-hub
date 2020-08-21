import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import {auth} from '../firebase'

function NavigationBar() {
    const [data,setUser]=React.useState('');
    React.useEffect(() => {
        auth.onAuthStateChanged((user)=>{
        console.log(user)
        if(user){
        setUser(user);
    }
        else{
        setUser(null);
    }})
    }, [])
    const logoutUser=()=>{
        setUser(null);
        auth.signOut();
        alert('Logged out successfully')
    }
    const signIn=
                <Navbar bg="light" variant="light" style={{justifyContent:'space-between'}}>
                <Navbar.Brand href="#home">Students Hub</Navbar.Brand>
                <Nav style={{alignSelf:'center'}}>
                <Nav.Item>
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link><Link to="/signup">Sign-Up</Link></Nav.Link>
                </Nav.Item>
                </Nav>
                </Navbar>;
    const loggedIn=<Navbar bg="light" variant="light" style={{justifyContent:'space-between'}}>
                    <Navbar.Brand href="#home">Students Hub</Navbar.Brand>
                    <Nav style={{alignSelf:'center'}}>
                    <Nav.Item>
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link><Link to='/Profile'>Profile</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link><Link to='/Admin'>Add Posts</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={logoutUser} color="#2770BE">Logout</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    </Navbar>;
    return (
        <>{data?loggedIn:signIn}</>
    )
}

export default NavigationBar
