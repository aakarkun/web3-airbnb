import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from '../images/frontpagebg.png';
import logo from '../images/airbnb.png';
import { ConnectButton, Select, DatePicker, Input, Icon, Button } from 'web3uikit';
import { useState } from "react";

const Home = () => {

  // Defining all the state variables
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New South Wales");
  const [guests, setGuests] = useState(2);

  return (
    <>
      {/* Home page background and top Gradient container */}
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containerGradient"></div>
      </div>

      {/* Top Banner */}
      <div className="topBanner">
        {/* Logo */}
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>

        {/* Navigation tabs */}
        <div className="tabs">
          <div className="selected">Places To Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        {/* Connect Wallet Button for Web3 connection - using web3uikit  */}
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      {/* Search section */}
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select 
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
              options={[
                {
                  id: "nsw",
                  label: "New South Wales"
                },
                {
                  id: "qld",
                  label: "Queensland"
                },
                {
                  id: "tas",
                  label: "Tasmania"
                },
                {
                  id: "vic",
                  label: "Victoria"
                }
              ]}
            />
          </div>
          <div className="vl"></div>
          <div className="inputs">
            Check-In
            <DatePicker
              id="CheckIn"
              onChange={(event) => setCheckIn(event.date)}
            />
          </div>
          <div className="vl"></div>
          <div className="inputs">
            Check-Out
            <DatePicker
              id="CheckOut"
              onChange={(event) => setCheckOut(event.date)}
            />
          </div>
          <div className="vl"></div>
          <div className="inputs">
            Guests
            <Input
              value={2}
              name="AddGuests"
              type="number"
              placeholder="1, 2, 3, ..."
              onChange={(event) => setGuests(Number(event.target.value))}
            />
          </div>
          <Link to={"/rentals"} state={{
              destination: destination,
              checkIn: checkIn,
              checkOut: checkOut,
              guests: guests
            }}>
            <div className="searchButton">
              <Icon fill="#ffffff" size={14} svg="search" />
            </div>
          </Link>
        </div>
      </div>

      {/* Random location display section */}
      <div className="randomLocation">
        <div className="title">Feel Adventurous</div>
        <div className="text">
          Let us decide and discover new places to stay, live, work or just relax.
        </div>
        <Button
          text="Explore A Location"
          onClick={() => console.log(checkOut)}
        />
      </div>

    </>
  );
};

export default Home;
