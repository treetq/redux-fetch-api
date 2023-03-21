const User = (props) => {
  console.log(props);
  return (
    <div className={props.className}>
      <img
        src={`https://api.lorem.space/image/face?w=240&h=240&hash=${props.data.id}`}
        alt=""
      />
      <div className="details">
        <p>username: {props.data.username}</p>
        <p>email: {props.data.email}</p>
      </div>
    </div>
  );
};

export default User;
