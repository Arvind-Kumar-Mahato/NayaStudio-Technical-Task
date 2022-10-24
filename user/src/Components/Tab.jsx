import React,{useState,useEffect} from 'react'
import Table from "react-bootstrap/Table";
import axios from "axios";
const Tab = () => {
  const [showdata, SetshowData] = useState({});
useEffect(()=>{
axios
    .get(`http://localhost:5000/posts`)
    .then(function (response) {
      SetshowData(response.data);
     
    })
    .catch(function (error) {
      console.log(error);
    });
})
console.log(showdata);




  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title </th>
            <th>Sketch</th>
          </tr>
        </thead>
        <tbody>
          {showdata.map((element) => (
            <tr>
              <td>{element.title} </td>
              <td>
                <img className = "img_size" src={element.selectedFile} />
               
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tab
