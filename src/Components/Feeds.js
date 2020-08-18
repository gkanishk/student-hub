import React,{useEffect,useState} from 'react';
import {firestore,auth} from '../firebase';
import {Card,Button} from 'react-bootstrap';

function Feeds() {
    const [user,setUser]=useState(null);
    const [data,setData]=useState([]);
    useEffect(() => {
        setUser(localStorage.getItem('User'));
        auth.onAuthStateChanged((user)=>{
            console.log(user)
            if(user){
            setUser(user.email);
        }
            else{
            setUser(null);
        }
        })
        firestore.collection('post').onSnapshot(data=>{
            setData(data.docs.map(doc=>doc.data()))
        })
    }, [])
    const applyData=()=>{
        if(user==null)
        alert('Please Login or Sign-Up')
        else
        alert('Applied')
    }
    return (
        <Card>
            <div style={{display:'flex',flexWrap:"wrap",justifyContent:"center"}}>
            {data.map((dt)=>(
                <Card style={{ width: '20rem',display:'flex',flexDirection:'rows',margin:'3vw'}}>
                <Card.Img variant="top" src={dt.photo} style={{height:'200px',width:'auto'}}/>
                <Card.Body>
                <Card.Title>{dt.name}</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary" style={{margin:'5px'}} onClick={applyData}>Apply</Button>
                <a href={dt.link} target='_blank' rel="noopener noreferrer"><Button style={{margin:'5px'}}>View Details</Button></a>
                </Card.Body>
                </Card>
            ))}
            </div>
        </Card>
    )
}

export default Feeds
