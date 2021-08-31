import { Fragment } from 'react';
import Header from "./Layout/Header";
import Users from "./Users/Users";

function App() {
 
// let arr = ['ahmed','mohamed','kamel','tahn']

// const [data_ap, setCartIsShown] = useState([]);



//   axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
     
//       setCartIsShown(res.data);
 
//     // console.log(data_ap[0])
  // })
  return (
    <Fragment>
      <Header />
      <Users/>
     
      </Fragment>
  );
}

export default App;
