import "./Profile.css";
const Profile = () => {
  const userProfile = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  return (
    <>
      <img
        className="avatar"
        src={userProfile.imageUrl}
        alt={"Photo of " + userProfile.name}
        style={{
          width: userProfile.imageSize,
          height: userProfile.imageSize,
        }}
      />
      <h1>{userProfile.name}</h1>
    </>
  );
};

export default Profile;
