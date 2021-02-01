import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap'


const MovieCard = (props) => {
    const {handleinput } = props;

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const [newMovie, setNewMovie] = useState({title:"", description:"",posteUrl:"",rate:0});

      const handleChange =(e) =>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
      }
       
    
    return(
        <div>
            <Button variant="primary" onClick={handleShow}>add new movie</Button>
  
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                 <Modal.Title>Add new movie</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                     <div>
                         <label className="lab">Title:</label>
                         <input type="text" size="20" name="title" className="inp-text"  onChange={handleChange} ></input><br/>
                         <label className="lab">Description:</label>
                         <input type="text" size="20" name="description" className="inp-text" onChange={handleChange}></input><br/>
                         <label className="lab">PosteUrl:</label>
                         <input type="text" size="20" name="rate" className="inp-text" onChange={handleChange}></input><br/>
                         <label className="lab">Rate</label>
                         <input type="text" size="20"  name="rate" className="inp-text" onChange={handleChange}></input>
                     </div>
                 </Modal.Body>
                 <Modal.Footer>
                 <Button variant="secondary" onClick={handleClose}>Close</Button>
                 <Button variant="primary" onClick={handleinput} >Save changes</Button>   
                </Modal.Footer>       
            </Modal>

        </div>
    )
}
export default MovieCard;