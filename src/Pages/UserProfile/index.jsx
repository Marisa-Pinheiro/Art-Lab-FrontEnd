import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Favourites from "../../Components/Favourites/index";

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

      {user && (
        <div>
          <div className="user-info">
            <h1>{user.username} Illustrations List</h1>
            <h5>{user.email}</h5>
          </div>
          <div className="user-added-artworks">
            <h3>{user.username} Artworks</h3>
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
      <div className="user-favourites">Favourites</div>
      <Favourites />
    </div>
  );
}

export default Profile;
