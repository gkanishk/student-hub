import React,{useState} from 'react'
import {Form,Button,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {auth,firestore} from '../firebase'

function SignUp(){
    const [name,setName]=useState('');
    const [user,setUser]=useState('');
    const [phone,setPhone]=useState('');
    const [college,setCollege]=useState('');
    const [city,setCity]=useState('');
    const [Country,setCountry]=useState('');
    const [year,setYear]=useState('');
    const [Pyear,setPYear]=useState('');
    const [pass,setPass]=useState('');
    const [cpass,setCpass]=useState('');
    const [message,setMess]=useState('');
    const [marks,setMarks]=useState('');
    const signUp=(e)=>{
        e.preventDefault();
        if(pass===cpass){
            console.log(user,pass,cpass)
            auth.createUserWithEmailAndPassword(user,pass).then((s)=>{
                firestore.collection('user').doc(user).set({
                    name: name,
                    email:user,
                    phone:phone,
                    dob:year,
                    college:college,
                    city:city,
                    country:Country,
                    passingyear:Pyear,
                    marks:marks,
                })
            }).catch((err)=>{
                if(err.code==='auth/invalid-email')
                setMess("Invalid detail");
                else if(err.code==='auth/email-already-in-use')
                setMess("User already exists")
                else
                setMess(err.code);
            })
        }
        else{
            setMess('Password does not match')
        }
    }
    return (
        <Card style={{minHeight:'90vh'}}>
            <h2 style={{marginTop:'20px'}}>Sign Up</h2>
            <Card.Body style={{ width: '28rem',alignSelf:'center' }}>
            <Form style={{padding:'25px',backgroundColor:'#F8F9FA',borderRadius:'5px',marginTop:'2vh'}} onSubmit={signUp}>
                <Form.Group controlId="formBasicName" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" onChange={e=>setName(e.target.value)}  required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e=>setUser(e.target.value)}  required/>
                </Form.Group>
                <Form.Group controlId="formBasicPhone" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number" maxLength='10' onChange={e=>setPhone(e.target.value)}  required/>
                </Form.Group>
                <Form.Group controlId="formBasicDOB" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Date Of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Enter DOB" onChange={e=>setYear(e.target.value)}  required/>
                </Form.Group>
                <Form.Group controlId="formBasicCollege" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>College</Form.Label>
                    <Form.Control type="text" placeholder="Enter College or Choose from list" list='colle' name='colle' onChange={e=>setCollege(e.target.value)} required />
                    <datalist id="colle">
                    <option>IIT Delhi</option>
                    <option>BIT</option>
                    <option>VIT</option>
                    <option>Chandigarh University</option>
                    </datalist>
                </Form.Group>
                <Form.Group controlId="formBasicCity" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter City" onChange={e=>setCity(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formBasicCountry" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter Country" onChange={e=>setCountry(e.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formBasicMarks" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Marks(%)</Form.Label>
                    <Form.Control type="text" placeholder="Enter Average Marks Throughout" maxLength='5' onChange={e=>setMarks(e.target.value)}  required/>
                </Form.Group>
                <Form.Group controlId="formBasicPassingYear" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Passing Year</Form.Label>
                    <Form.Control type="number" min="1998" max="2030" step="1" maxLength='4' placeholder="Enter Passing Year" onChange={e=>setPYear(e.target.value)}  required/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e=>setPass(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId="formBasicCPassword">
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e=>setCpass(e.target.value)} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <Form.Text className="text-muted" >
                    {message}
                </Form.Text>
            </Form>
            <p>Already a user? <Link to='/login'>Login</Link> here</p>
            </Card.Body>
            </Card>
    )
}

export default SignUp
