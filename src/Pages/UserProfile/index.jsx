import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Favourites from "../../Components/Favourites/index";
/* import BoughtList from "../../Components/BoughtIllustrations/index"
 */
function Profile() {
  const [user, setUser] = useState(null);
  const [userIllustrations, setUserIllustrations] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        let responseUser = await axios.get(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/user-profile/${id}`
        );
        let responseUserIllustrations = await axios.get(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/illustration/owner/${id}`
        );
        setUser(responseUser.data);
        setUserIllustrations(responseUserIllustrations.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [id]);

  return (
    <div className="user-profile-page">
      <div className="header-user-profile-options">
      {user && <h5>{user.email}</h5> }
        <Link to={`/user-profile/${id}/edit`} className="edit-profile">
          Edit your Profile
        </Link>
        <Link
          to={`/user-profile/${id}/add-illustration/`}
          className="illustration-link"
        >
          <p>Add Illustrations</p>
        </Link>
      </div>
<div className="user-profile-body">
      {user && (
        <div>
          <div className="user-info">
            <h3>Your Artworks</h3>
            
          </div>
          <div className="user-added-artworks">
            {userIllustrations.map((illustration) => {
              return (
                <>
                  <img src={illustration.imageUrl} alt="illustration image" />
                </>
              );
            })}
          </div>
        </div>
      )}
      <div className="user-bought">
        <h3>Artworks bought</h3>
       {/*  <BoughtList/> */}
      </div>
      <div className="user-favourites">
      <h3>Favourites</h3>
      <Favourites />
      </div>
    </div>
    </div>
  );
}

export default Profile;
