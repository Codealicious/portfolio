const ProfileGraphic = () => {
    return (  
        <div className="profile">
            <svg className="profile__svg" viewBox="0 0 500 500">
                <title>Job Title</title>
                <defs>
                    <path id="text-circle" d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" >
                        <animateTransform
                            attributeName="transform"
                            begin="0s"
                            dur="30s"
                            type="rotate"
                            from="0 250 250"
                            to="360 250 250"
                            repeatCount="indefinite" 
                            />
                
                    </path>
                </defs>
                <text className="profile__spinning-text" dy="70" textLength="1220">
                    <textPath xlinkHref="#text-circle">
                        front&nbsp;end&nbsp;developer
                    </textPath>
                </text>
            </svg>
            <img src="assets/images/profile_pic_bw.png" className="profile__img" alt="head shot"/>
        </div>
    );
}
 
export default ProfileGraphic;