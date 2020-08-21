import React,{useEffect,useState} from 'react'
import {firestore} from '../firebase'
import {Card,ListGroup} from 'react-bootstrap'

function Profile() {
    const [user,setUser]=useState(null);
    const [data,setData]=useState({city:'',college:'',country:'',dob:'',email:'',marks:'',name:'',passingyear:'',phone:'',permission:''});
    useEffect(()=>{
        setUser(localStorage.getItem('User'))
    },[])
    useEffect(()=>{
        if(user!==null)
        firestore.collection('user').doc(user).get().then((d)=>{
            setData(d.data())
        })
    },[user])
const display=<Card style={{ width: '28rem',textAlign:'left',alignSelf:'center',marginTop:'10vh'}}>
                <Card.Title style={{alignSelf:'center'}}>Student Profile</Card.Title>
                <ListGroup variant="flush">
                <ListGroup.Item>Name: {data.name}</ListGroup.Item>
                <ListGroup.Item>College: {data.college}</ListGroup.Item>
                <ListGroup.Item>Country: {data.country}</ListGroup.Item>
                <ListGroup.Item>City: {data.city}</ListGroup.Item>
                <ListGroup.Item>Marks: {data.marks} %</ListGroup.Item>
                <ListGroup.Item>Phone: {data.phone}</ListGroup.Item>
                <ListGroup.Item>Email: {data.email}</ListGroup.Item>
                <ListGroup.Item>DOB: {data.dob}</ListGroup.Item>
                <ListGroup.Item>Passing Year: {data.passingyear}</ListGroup.Item>
                </ListGroup>
            </Card>
    return (
        <Card style={{minHeight:'90vh'}}>
            {user?display:"Please Login"}
        </Card>
    )
}

export default Profile
