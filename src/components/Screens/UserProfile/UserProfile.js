import React from 'react';
import './UserProfile.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StarIcon from '@material-ui/icons/Star';

const UserProfile = (props)=>{
    return(
        <div className="container">
            <div className="row intro">
                <div className="col s12 m6 l4">
                    <img className="userImage" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"/>
                </div>
                <div className="col s12 m6 l8 userDetail">
                    <h1 className="name">ELON MUSK</h1>
                    <h3 className="location">Pune, India</h3>
                    <p className="interest">Interests: Fashion & Clothing, Electronics, Books</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m4 l4 extra-data">
                    <h6 className="section-heading">Other Details</h6>
                    <div className="allExtra" >
                    <EmailIcon color="primary"/> <span className="extra-info">email@email.com</span>
                    <br></br>
                    <PhoneIcon color="primary"/><span className="extra-info">+91 9999999999</span>
                    <br></br>
                    <AssignmentTurnedInIcon color="primary"/><span className="extra-info">12 Orders till now</span>
                    <br></br>
                    <StarIcon color="primary"/><span className="extra-info">4.3 average rating</span>
                    </div>
                </div>
                    <h6 className="section-heading">Reviews</h6>
                    <div className="reviews">
                    <div className="col s12 m8 l8 review">
                        <div className="col s12 m4 l4">
                            <img src="https://avatars3.githubusercontent.com/u/54065357?s=400&u=e02a7adcdfffa13bf8ca5a935793139752b1a4ff&v=4"
                                className="seller-img"
                            />
                            <h3 className="seller-name">Nalin Sellers</h3>
                            <p className="seller-rating">Rated 5</p><StarIcon color="primary"/>
                        </div>
                        <div className="col s12 m4 l4 review-text" style={{width:"inherit", textAlign:"left"}}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m4 l4"></div>
                    <div className="col s12 m8 l8 review">
                        <div className="col s12 m4 l4">
                            <img src="https://avatars0.githubusercontent.com/u/67575900?s=400&u=a87b16f58b6cf169801a1f7c97237b039dc2bf76&v=4"
                            className="seller-img"
                            />
                            <h3 className="seller-name">Prerit Retailers</h3>
                            <p className="seller-rating">Rated 5</p><StarIcon color="primary"/>
                        </div>
                        <div className="col s12 m4 l4 review-text" style={{width:"inherit", textAlign:"left"}}>
                            <p>
                            Sed ut perspiciatis unde omnis velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m4 l4"></div>
                    <div className="col s12 m8 l8 review">
                        <div className="col s12 m4 l4">
                            <img src="https://virtual-interview-platform.herokuapp.com/photos/AMIT.jpeg"
                                className="seller-img"
                            />
                            <h3 className="seller-name">Amit Collections</h3>
                            <p className="seller-rating">Rated 5</p><StarIcon color="primary"/>
                        </div>
                        <div className="col s12 m4 l4 review-text" style={{width:"inherit", textAlign:"left"}}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m4 l4"></div>
                    <div className="col s12 m8 l8 review">
                        <div className="col s12 m4 l4">
                            <img src="https://avatars1.githubusercontent.com/u/54314949?s=400&u=038707b14efd687499a9b7864547f5386bbb3bb4&v=4"
                                className="seller-img"
                            />
                            <h3 className="seller-name">Vijay Digital Mart</h3>
                            <p className="seller-rating">Rated 5</p><StarIcon color="primary"/>
                        </div>
                        <div className="col s12 m4 l4 review-text" style={{width:"inherit", textAlign:"left"}}>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                    </div>
                    
            </div>
        </div>
    )
}

export default UserProfile;