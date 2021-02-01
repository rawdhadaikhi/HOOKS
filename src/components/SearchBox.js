import React  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol } from "mdbreact";

const SearchPage = (props) => {
  const {handleInput} = props;
  
   
  return (
   
    <MDBCol md="6">
      <div className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" type="text" name="search" placeholder="Search" onChange={handleInput}></input>
       
      </div>
    </MDBCol>
    
  );
}

export default SearchPage;