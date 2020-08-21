import React,{useState,useEffect} from 'react'
import {firestore} from '../firebase'
import {Card,Button,Form} from 'react-bootstrap'

function Admin() {
    const [permision,setPermision]=useState('');
    const [name,setName]=useState('');
    const [Link,setLink]=useState('');
    const [Photo,setPhoto]=useState('');
    const [email,setEmail]=useState('');
    useEffect(()=>{
        firestore.collection('user').doc(localStorage.getItem('User')).get().then((d)=>{
            setPermision(d.data().permission)
    })},[])
    const postData=(e)=>{
        e.preventDefault();
        if(permision==='yes'){firestore.collection('post').add({
            name:name,
            link:Link,
            photo:Photo,
            email:email
        })
        alert('Submited');
        setName('');
        setLink('');
        setPhoto('');}else{
            alert('Contact Admin for permission');
        }
    }
    return (
        <Card style={{minHeight:'90vh'}}>
            <h2 style={{marginTop:'30px'}}>Add Post</h2>
            <Card.Body style={{ width: '28rem',alignSelf:'center' }}>
            <Form style={{padding:'25px',backgroundColor:'#F8F9FA',borderRadius:'5px',marginTop:'5vh'}} onSubmit={postData}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name of scholarship" onChange={e=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicLink">
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter Link to post" onChange={e=>setLink(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPhotoLink">
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Photo Link</Form.Label>
                    <Form.Control type="text" placeholder="Enter Photo Link" onChange={e=>setPhoto(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{textAlign:'left',width:'100%'}}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Organization Email" onChange={e=>setEmail(e.target.value)}/>
                </Form.Group>  
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted" >
                </Form.Text>
            </Form>
            </Card.Body>
            </Card>
    )
}

export default Admin
