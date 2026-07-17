import "./Usercard.css";
const Usercard = ({userName,userDesc,userAge}) => {
    return (
        <>
            <div className="user-card">
      <img
        src="https://wallpaperaccess.com/download/doraemon-hd-2411949"
        alt="User"
        className="user-image"
      />

      <div className="user-info">
        <h2 className="user-name">{userName} , {userAge}</h2>
        <p className="user-description">
          {userDesc}
        </p>
      </div>
    </div>
        </>
    )
}

export default Usercard