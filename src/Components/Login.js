import React,{useState} from 'react'
import {Form,Button,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {auth} from '../firebase'

function Login() {
    const [user,setUser]=useState('');
    const [pass,setPass]=useState('');
    const [error,setError]=useState('Enter details to login');

    const loginUser=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(user,pass).then((l)=>{
            setError('');
        }).catch((err)=>{
            console.log(err.code);
            setError("User not found/Invalid credentials")
        })
    }
    return (
        <div>
            <Card style={{minHeight:'90vh'}}>
            <h2 style={{marginTop:'30px'}}>Login</h2>
            <Card.Body style={{ width: '28rem',alignSelf:'center' }}>
            <Form style={{padding:'25px',backgroundColor:'#F8F9FA',borderRadius:'5px',marginTop:'5vh'}} onSubmit={loginUser}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e=>setUser(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e=>setPass(e.target.value)}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted" >
                    {error}
                </Form.Text>
            </Form>
            <p>Not a user? <Link to='/signup'>Sign-Up</Link> here</p>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Login
