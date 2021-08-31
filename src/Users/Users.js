import { Fragment } from 'react';
import axios from "axios";
import { useState } from "react";
import classes from './Users.module.css';
import Header from '../Layout/Header';

const Users = (props) => {
    

     
const [data_ap, setCartIsShown] = useState([]);


axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
   
    setCartIsShown(res.data);

    
})
  return (
    <Fragment>
        <div className={classes.posts}>
        <ul>
            {data_ap.map(res => 
            <li  key ={res.id}>
                <div  className={classes.post}>
                    <header className={classes.header}><h3>Post {res.id}</h3></header>
                    <div className={classes.title}>
                        <h5>Post Tiltle</h5>
                        <p>{res.title}</p>
                    </div>
                    <div className={classes.title}>
                        <h5>Post Title</h5>
                        <p>{res.body}</p>
                    </div>
                </div>
            </li>)}
        </ul>
        </div>
   

 
    </Fragment>
  );
};

export default Users;
