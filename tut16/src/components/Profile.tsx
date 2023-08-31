const Profile = (props: ProfileTypes) => {
  return <div>Private Profile Components {props.name}</div>;
};

export type ProfileTypes = {
  name: string;
};

export default Profile;
