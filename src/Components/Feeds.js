import React,{useEffect,useState} from 'react';
import {firestore} from '../firebase';
import {Card} from 'react-bootstrap';

function Feeds() {
    const [user,setUser]=useState(null);
    const [data,setData]=useState({});
    useEffect(() => {
        setUser(localStorage.getItem('User'));
    }, [])
    return (
        <Card>
            home feeds
        </Card>
    )
}

export default Feeds
