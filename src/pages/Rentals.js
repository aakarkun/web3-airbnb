import React, { useState } from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import logo from '../images/airbnbRed.png';

import { useLocation } from "react-router";
import { Button, ConnectButton, Icon } from "web3uikit";

import RentalsMap from "../components/RentalsMap";

const Rentals = () => {

  // Search filters from Home page
  const { state: searchFilters } = useLocation();
  // Google map highlight
  const [highlight, setHighlight] = useState();

  // Dummy rental list
  const rentalList = [
    {
      attributes: {
        city: "New South Wales",
        unoDescription: "3 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area",
        imgUrl:
        // "https://a0.muscache.com/im/pictures/miso/Hosting-53710248/original/3e07cb85-4c06-4ef2-a48e-b13e25809722.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-53710248/original/04612220-51a9-414f-93ac-1e527f43c6e2.jpeg?im_w=1200",
        lat: "-33.870453",
        long: "151.208755",
        name: "The Luxurious Apartment with Courtyard",
        pricePerDay: "3",
      },
    },
    {
      attributes: {
        city: "Tasmania",
        unoDescription: "2 Guests • 1 Bed • 1 Private bath",
        dosDescription: "Wifi • Kitchen • Living Area • Balcony",
        imgUrl:
        "https://a0.muscache.com/im/pictures/miso/Hosting-574073295058124098/original/b29ff371-ee86-4740-8f03-73e8ce948c60.jpeg?im_w=1200",  
        lat: "-41.640079",
        long: "146.315918",
        name: "Boat Reflections Acc Franklin",
        pricePerDay: "4",
      },
    },
  ];

  let cords = [];

  rentalList.forEach((e) => {
    cords.push({
      lat: e.attributes.lat,
      lng: e.attributes.long
    })
  })

  return (
    <>
    {/* Top banner */}
     <div className="topBanner">
       <div>
         {/* App logo and link to home page */}
         <Link to={"/"}>
           <img className="logo" src={logo} alt="logo"></img>
         </Link>
       </div>
       {/* Search Reminders */}
       <div className="searchReminder">
         {/* User selected destination */}
         <div className="filter">
           {searchFilters.destination}
         </div>
         <div className="vl" />
         <div className="filter">
           {/**
            * User selected Date | From - To 
            * Default format: Month Day (Apr 18 - Apr 19)
            * **/}
           {`
            ${searchFilters.checkIn.toLocaleString("default", {month: "short"})}
            ${searchFilters.checkIn.toLocaleString("default", {day: "2-digit"})}
            -
            ${searchFilters.checkOut.toLocaleString("default", {month: "short"})}
            ${searchFilters.checkOut.toLocaleString("default", {day: "2-digit"})}
           `}
         </div>
         <div className="vl" />
         <div className="filter">
           {/* User input number of guests */}
           {searchFilters.guests} Guest(s)
         </div>
         {/* Search button */}
         <div className="searchFiltersIcon">
           <Icon fill="#ffffff" size={20} svg="search" />
         </div>
       </div>
      {/* Connect Wallet Button for Web3 connection - using web3uikit  */}
       <div className="lrContainers">
         <ConnectButton />
       </div>
     </div>

     <hr className="line" />
     <div className="rentalsContent">
       <div className="rentalsContentL">
            Stays Available For Your Destination
            {rentalList &&
            rentalList.map((e, i) => {
              return(
                <>
                  <hr className="line2" />
                  <div className={highlight === i ? "rentalDivH" : "rentalDiv"}>
                    <img className="rentalImg" src={e.attributes.imgUrl} alt="rentalImg"></img>
                    <div className="rentalInfo">
                      <div className="rentalTitle">{e.attributes.name}</div>
                      <div className="rentalDesc">
                        {e.attributes.unoDescription}
                      </div>
                      <div className="rentalDesc">
                        {e.attributes.dosDescription}
                      </div>
                      <div className="bottomButton">
                        <Button
                          text="Stay Here"
                        />
                        <div className="price">
                          <Icon fill="#808080" size={10} svg="matic" /> {e.attributes.pricePerDay} / Day
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
       </div>
       <div className="rentalsContentR">
        <RentalsMap locations={cords} setHighlight={setHighlight}/>
       </div>
     </div>

    </>
  );
};

export default Rentals;
