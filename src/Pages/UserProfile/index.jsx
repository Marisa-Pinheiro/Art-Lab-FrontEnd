import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
/* import profileImg from "../images/profile-img.jpg"; */
import AddIllustration from "../AddIllustration/index";



function Profile() {
  return (
    <div><h1>Profile</h1></div>
  )
}



/*  
function Profile() {
  const [buyer, setBuyer] = useState(false);
  const [artist, setArtist] = useState(false);
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  const getAllIllustrations = () => {
    //Route created in backend and tested in Postman
    axios
      .get(`${apiURL}/illustrations`)
      .then((response) => setIllustrations(response.data))
      .catch((error) => console.log(error));
  };

  const getUser = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      let response = await axios.get(
        `${process.env.VITE_APP_SERVER_URL}/api/user-profile/${id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setUser(response.data);
      console.log(response.data);

      if (response.data.userType === "Artist") {
        setArtist(true);
      } else {
        setBuyer(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  return (
    <div className="profilePage">
      {buyer && (
        <>
          <header>
            {/* <img src={profileImg} alt="profile-pic" className="profile-image" /> }*/
            /*<h1 className="location">Hello, {user.username}</h1>
            <p>Logged in with: {user.email}</p>

            <Link className="tag" to={`/user-profile/${user._id}/edit`}>
              Edit Account
            </Link>
          </header>
          <div className="profile-favs">
            <div className="profile-table">
              <div>
                <h2 className="title">Favourites:</h2>
                {user.favourites.map((favourite) => (
                  <li className="borderBox" key={favourite._id}>
                    <h5>
                      <b>Name:</b> {favourite.name}
                    </h5>
                    <h6>
                      <b>Price:</b> {favourite.price}€
                    </h6>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {artist && (
        <>
          <header>
            <img src={profileImg} alt="profile-pic" />
            <h1>{user.name} Art</h1>
            {/* How to edit a profile to edit the artist view for other users?} */
          /*</header>
          <div>
            <div>
              <div>
                <h2>Illustrations</h2>
                {user.artistIllustrations.map((art) => (
                  <li key={art._id}>
                    <div>{art.image}</div>
                    <div>
                      <h5>
                        <b>{art.name}</b>
                      </h5>
                      <p>{art.date}</p>
                      <h6>{art.price}</h6>
                    </div>
                  </li>
                ))}
              </div>
              <AddIllustration refreshIllustration={getAllIllustrations} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
*/

export default Profile;
