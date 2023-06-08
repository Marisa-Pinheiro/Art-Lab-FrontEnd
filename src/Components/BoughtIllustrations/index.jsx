import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/auth.context";

function BoughtList() {
  const { user } = useContext(AuthContext);

  


  return (
    <div>
      {user &&
        user.bought && user.bought.map((paid) => {
          <div>
            <div>
              <img src={paid.imageUrl} alt={paid.name} />
            </div>
            <div>
              <p>{paid.name}</p>
            </div>
          </div>;
        })}
    </div>
  );
}

export default BoughtList;
