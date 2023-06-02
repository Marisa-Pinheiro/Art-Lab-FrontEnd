import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

function EditUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {id} = useParams();

    const navigate = useNavigate();

    
  return (
   <form>

   </form>
  )
}

export default EditUser;