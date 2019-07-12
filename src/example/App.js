import React from "react";
import KmkCarousel from "../index";

const items = [
  {
    href: "/GithubIssueExplorer",
    image: "https://i.imgur.com/3kZkUnq.png",
    header: "Github Issue Explorer",
    description: `Quick check on a Github repo's issues. Additional features such as inifite scrolling will be added soon`,
    meta: "GithubAPI React Node.js Express.js",
    github: "https://github.com/kttkjl/GitIssuesExplorer"
  },
  {
    href: "https://hsweeth.herokuapp.com",
    image: "https://i.imgur.com/jDKfXUf.png",
    header: "Home Sweet Home: Smart thermostats",
    description: `Smart thermostat system with cloud-based architecture`,
    meta: "MongoDB React Express.js",
    github: "https://github.com/PeimanD/HSH_FrontEnd"
  },
  {
    href: "https://aws.koumakan.work/stb/landing",
    image: "https://i.imgur.com/vhtlkQX.png",
    header: "Shoot the Bullet",
    description: `Multiplayer 3D bullet hell game made with Three.js, MMD and Socket.io. Features a jukebox and screenshoting capability with imgur`,
    meta: "Socket.io Three.js WebGL MMD"
  },
  {
    href: "/works/babble",
    image: "https://i.imgur.com/YSyBlq4.png",
    header: "Babble.js",
    description: `Create a flowing conversation, with voice detection and immediate replayability - utilizing WebAudio API. Live demo under NDA`,
    meta: "React WebAudioAPI Node.js AWS Express.js"
  },
  {
    href: "https://github.com/kttkjl/LocationClient",
    image: "https://i.imgur.com/qKa0rXN.png",
    header: "LocationClient",
    description: `Android client that tracks your current location and updates a node server with location data using socket.io`,
    meta: "Android Socket.io Express.js"
  },
  {
    image: "https://i.imgur.com/zGOuROz.png",
    href: "/COMP4711/memoryGame",
    header: "Memory Game",
    description:
      "Memory game with boxes, and simple SQL database for scores, mobile friendly",
    meta: "VanillaJS mariaDB Express.js Bootstrap"
  },
  {
    image: "https://i.imgur.com/lh9fYBi.jpg",
    header: "Webnifico : Front-end dev view",
    description:
      "Developer front-end view for testing production site functionalities - Cannot show due to NDA",
    meta: "RubyOnRails React Webpack Docker"
  },
  {
    href: "https://twitter.com/RaceToZero2017",
    image:
      "https://pbs.twimg.com/profile_banners/867177052151173121/1495651990/1500x500",
    header: "RaceToZero",
    description:
      "City of Vancouver project, a JS based game to raise food waste awareness, with twitter API to tweet the new highest scores when the database is updated",
    meta: "mySQL HTML CSS JS PHP"
  }
];

const App = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* <div> */}
      <KmkCarousel items={items} />
      {/* <KmkCarousel /> */}
    </div>
  );
};
export default App;
