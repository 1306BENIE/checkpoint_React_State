import React from "react";

// Composant fonctionnel qui affiche les informations d'une personne
const Profile = ({ fullName, bio, imgSrc, profession }) => {
  return (
    <div className="profile-card">
      <h2>{fullName}</h2>
      <img src={imgSrc} alt="Profil" className="profile-img" />
      <p><strong>Bio:</strong> {bio}</p>
      <p><strong>Profession:</strong> {profession}</p>
    </div>
  );
};

export default Profile;