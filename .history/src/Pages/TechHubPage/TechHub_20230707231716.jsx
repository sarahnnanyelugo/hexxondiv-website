import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Video from "../../assets/images/tech_vid.mp4";
import Logo from "../../assets/images/tech-hub.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import Switchapp from "../../assets/images/switchapp.svg";
import Silverbird from "../../assets/images/silverbird.png";
import Educare from "../../assets/images/educare.png";
import Powerjet from "../../assets/images/powerjet.png";
import Service1 from "../../assets/images/service_image1.jpeg";
import Service2 from "../../assets/images/service_image2.jpg";
import {
  EffectCards,
  Autoplay,
  Pagination,
  EffectFade,
  // Parallax,
  // Navigation,
} from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./tech-hub.scss";
import Framework from "./Framework/Framework";
import Footer from "../../components/Footer/Footer";
import FrameWorks from "./FrameWorks/FrameWorks";
function TechHub() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <div className="col-md-12 page-wrapper">
        <div id="outer" className="col-md-12">
          <div id="home-top-video">
            <video
              className="viddeo "
              width="100%"
              autoplay="true"
              loop="true"
              muted="true"
              playsinline=""
              src={Video}
            ></video>
          </div>
        </div>
        <div className="frameworks-div">
          {/* <Framework /> */}
          <FrameWorks />
        </div>
        <div className="framework-cova">
          <div class="book">
            <div class="book-cover">
              <div>
                <h1>Mrs. Dalloway</h1>
                <div class="separator"></div>
                <h2>by Virginia Woolf</h2>
              </div>
            </div>
            <div class="book-content">
              <h3>An Excerpt from Chapter One</h3>

              <p>Mrs. Dalloway said she would buy the flowers herself.</p>

              <p>
                For Lucy had her work cut out for her. The doors would be taken
                off their hinges; Rumpelmayer's men were coming. And then,
                thought Clarissa Dalloway, what a morning--fresh as if issued to
                children on a beach.
              </p>

              <p>
                What a lark! What a plunge! For so it had always seemed to her,
                when, with a little squeak of the hinges, which she could hear
                now, she had burst open the French windows and plunged at
                Bourton into the open air. How fresh, how calm, stiller than
                this of course, the air was in the early morning; like the flap
                of a wave; the kiss of a wave; chill and sharp and yet (for a
                girl of eighteen as she then was) solemn, feeling as she did,
                standing there at the open window, that something awful was
                about to happen; looking at the flowers, at the trees with the
                smoke winding off them and the rooks rising, falling; standing
                and looking until Peter Walsh said, "Musing among the
                vegetables?"--was that it?--"I prefer men to cauliflowers"--was
                that it? He must have said it at breakfast one morning when she
                had gone out on to the terrace--Peter Walsh. He would be back
                from India one of these days, June or July, she forgot which,
                for his letters were awfully dull; it was his sayings one
                remembered; his eyes, his pocket-knife, his smile, his
                grumpiness and, when millions of things had utterly
                vanished--how strange it was!--a few sayings like this about
                cabbages.
              </p>

              <p>
                She stiffened a little on the kerb, waiting for Durtnall's van
                to pass. A charming woman, Scrope Purvis thought her (knowing
                her as one does know people who live next door to one in
                Westminster); a touch of the bird about her, of the jay,
                blue-green, light, vivacious, though she was over fifty, and
                grown very white since her illness. There she perched, never
                seeing him, waiting to cross, very upright.
              </p>

              <p>
                For having lived in Westminster--how many years now? over
                twenty,--one feels even in the midst of the traffic, or waking
                at night, Clarissa was positive, a particular hush, or
                solemnity; an indescribable pause; a suspense (but that might be
                her heart, affected, they said, by influenza) before Big Ben
                strikes. There! Out it boomed. First a warning, musical; then
                the hour, irrevocable. The leaden circles dissolved in the air.
                Such fools we are, she thought, crossing Victoria Street. For
                Heaven only knows why one loves it so, how one sees it so,
                making it up, building it round one, tumbling it, creating it
                every moment afresh; but the veriest frumps, the most dejected
                of miseries sitting on doorsteps (drink their downfall) do the
                same; can't be dealt with, she felt positive, by Acts of
                Parliament for that very reason: they love life. In people's
                eyes, in the swing, tramp, and trudge; in the bellow and the
                uproar; the carriages, motor cars, omnibuses, vans, sandwich men
                shuffling and swinging; brass bands; barrel organs; in the
                triumph and the jingle and the strange high singing of some
                aeroplane overhead was what she loved; life; London; this moment
                of June.
              </p>

              <p>
                For it was the middle of June. The War was over, except for some
                one like Mrs. Foxcroft at the Embassy last night eating her
                heart out because that nice boy was killed and now the old Manor
                House must go to a cousin; or Lady Bexborough who opened a
                bazaar, they said, with the telegram in her hand, John, her
                favourite, killed; but it was over; thank Heaven--over. It was
                June. The King and Queen were at the Palace. And everywhere,
                though it was still so early, there was a beating, a stirring of
                galloping ponies, tapping of cricket bats; Lords, Ascot,
                Ranelagh and all the rest of it; wrapped in the soft mesh of the
                grey-blue morning air, which, as the day wore on, would unwind
                them, and set down on their lawns and pitches the bouncing
                ponies, whose forefeet just struck the ground and up they
                sprung, the whirling young men, and laughing girls in their
                transparent muslins who, even now, after dancing all night, were
                taking their absurd woolly dogs for a run; and even now, at this
                hour, discreet old dowagers were shooting out in their motor
                cars on errands of mystery; and the shopkeepers were fidgeting
                in their windows with their paste and diamonds, their lovely old
                sea-green brooches in eighteenth-century settings to tempt
                Americans (but one must economise, not buy things rashly for
                Elizabeth), and she, too, loving it as she did with an absurd
                and faithful passion, being part of it, since her people were
                courtiers once in the time of the Georges, she, too, was going
                that very night to kindle and illuminate; to give her party. But
                how strange, on entering the Park, the silence; the mist; the
                hum; the slow-swimming happy ducks; the pouched birds waddling;
                and who should be coming along with his back against the
                Government buildings, most appropriately, carrying a despatch
                box stamped with the Royal Arms, who but Hugh Whitbread; her old
                friend Hugh--the admirable Hugh!
              </p>

              <p>
                "Good-morning to you, Clarissa!" said Hugh, rather
                extravagantly, for they had known each other as children. "Where
                are you off to?"
              </p>

              <p>
                "I love walking in London," said Mrs. Dalloway. "Really it's
                better than walking in the country."
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 swipper-container flexy">
          <div className="col-md-4 offset-md-1 swipes">
            {" "}
            <div className="col-md-11 ">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={pagination}
                // eslint-disable-next-line no-undef
                modules={[EffectCards, Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                // eslint-disable-next-line react/jsx-no-duplicate-props
              >
                <SwiperSlide>
                  <div className="logo-slide">
                    <img className="   logo" src={Educare} alt="Scholar" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="logo-slide">
                    <center>
                      {" "}
                      <img className="   logo" src={Silverbird} alt="Scholar" />
                    </center>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="logo-slide">
                    <center>
                      {" "}
                      <img className="   logo" src={Powerjet} alt="Scholar" />
                    </center>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="logo-slide">
                    <center>
                      {" "}
                      <img className="   logo" src={Switchapp} alt="Scholar" />
                    </center>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="logo-slide">
                    <h4>slider5</h4>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-md-4 offset-md-1 swipes2">
            <h1>How we’ve helped other businesses</h1>
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              // pagination={{
              //   clickable: true,
              // }}
              pagination={pagination}
              modules={[EffectFade, Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div style={{ backgroundColor: "#fff", height: "500px" }}>
                  <h1>"</h1>
                  <p>
                    Partnering with Hexxondiv Tech Hub created a better customer
                    experience by making lightning payments simple. They take
                    care of all of the backend so we can focus on creating the
                    most comfortable shoes in the world.
                  </p>
                  <h5>Raymond Durk</h5>
                  <span>Head of Experience at Atoms</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ backgroundColor: "#fff", height: "500px" }}>
                  {" "}
                  <h1>"</h1>
                  <p>
                    We integrated easily with Hexxondiv Tech Hub's API to accept
                    bitcoin transactions both on- and off-chain with minimal
                    fuss.
                  </p>
                  <h5>Rusty Nash</h5>
                  <span>CEO of Gift Off</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ backgroundColor: "#fff" }}>
                  <h1>"</h1>
                  <p>
                    Integration with Hexxondiv Tech Hub' was a snap and the
                    support we received on all aspects was outstanding.
                  </p>
                  <h5>Shaun Gilchris</h5>
                  <span>Founder of BitcoinAverage</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ backgroundColor: "#fff", height: "500px" }}>
                  {" "}
                  <h1>"</h1>
                  <p>
                    Hexxondiv Tech Hub' made it possible to pay for tickets to
                    the world’s largest bitcoin event, our Bitcoin 2019
                    conference, in bitcoin. They made it simple for everyone
                    involved.
                  </p>
                  <h5>David Bailey</h5>
                  <span>CEO of BTC Inc.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ backgroundColor: "#fff", height: "500px" }}>
                  {" "}
                  <h1>"</h1>
                  <p>
                    Partnering with Hexxondiv Tech Hub created a better customer
                    experience by making lightning payments simple. They take
                    care of all of the backend so we can focus on creating the
                    most comfortable shoes in the world.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="col-md-10 offset-md-1 flexy services-container">
          <div className="col-md-6">
            <h1>Services</h1>
            <img className="" src={Service1} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-5 detail-section offset-md-1">
            <h1>Dedicated Development Teams</h1>
            <p>
              Hire a team of Developers, Designers, Quality Assurance
              Specialists, DevOps Engineers, and other experts you may need to
              work hand-by-hand on your digital product.
            </p>
            <Link to={"/team-hire"} className="features-link">
              View Managed Teams →
            </Link>
          </div>
        </div>
        <div className="col-md-10 offset-md-1 flexy services-container">
          <div className="col-md-5 detail-section offset-md-">
            <h1>We help businesses create unique user experiences</h1>
            <p>
              We help you grow by offering unlimited Webflow design &
              development for a fixed monthly fee - from building the site from
              scratch to fixing and tweaking even the tiniest detail on your
              page.
            </p>
            <p>
              Creating unique customer experiences will allow you to stand out
              from the crowd and generate quality leads. Having Flowout at your
              side will help you get your business off the ground or grow faster
              than ever before.
            </p>
            <Link to="" className="link">
              View HubSpot →
            </Link>
          </div>
          <div className="col-md-6 offset-md-1">
            <img className="" src={Service2} alt="Scholar" width="100%" />
          </div>
        </div>
        <Footer bg="#092540" logo={Logo} />{" "}
      </div>
    </>
  );
}

export default TechHub;
