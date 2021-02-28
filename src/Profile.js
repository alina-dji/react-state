import React from 'react';

const cardStyle = { 
    border: '2px solid #17a589',
    boxShadow: '5px 6px 0px #17a589',
    borderRadius: '3px',
    padding: '21px',
    textAlign: 'center',
    width: '340px' };
const imgStyle = {borderRadius: '50%', border: '4px solid #17a589'};

function Profile(props) {
    if (props.infos.show)
    {
        return (
            <div style={cardStyle}>
                <div>
                    <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="avatar"
                        width='140'
                        height='140'
                        style = {imgStyle} >
                    </img>
                </div>
                <br></br>
                <div>
                    <h1 style={{color : '#17a589'}}>{props.infos.fullName}</h1>
                </div>
                <div>
                    <p style={{fontSize: '.8rem'}}>{props.infos.profession}</p>
                </div>
                <br></br>
                <div>
                    <p>{props.infos.bio}</p>
                </div>
            </div>
        );
    }
    else return (<div></div>);
}

export default Profile;