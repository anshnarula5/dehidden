import React from "react";
import Card from "./Card";
import item1 from "../assets/item1.svg";
import item2 from "../assets/item2.svg";
import item3 from "../assets/item3.svg";
import item4 from "../assets/item4.svg";

const Right = () => {
  return (
    <div className="right">
      <div className="cards-container">
        <a href="https://ipfs.io/ipfs/bafkreiafqbmdalkexv3etj3tb3jzayhtro53drjotkole6cmw4peqnfxra">
          <Card
            img={item1}
            header="View on IPFS/ ARWEAVE"
            text="See the unlockables for this NFT on the link provided"
          />
        </a>
        <a href="https://www.instagram.com/ar/253254086623541/">
          <Card
            img={item2}
            header="View AR experience"
            text="Instantly get acccess to the blend file"
          />
        </a>
        <a href="https://ipfs.io/ipfs/QmbbqvPsmWoeDhSLoKuPjh1Esdkf2MLHKGUJHCaZLQgeja?filename=Shiba">
          <Card
            img={item3}
            header="Download 3D Model"
            text="See the unlockables for this NFT on the link provided"
          />
        </a>
        <a href="https://discord.com/invite/mTw9FaE7J2">
          <Card
            img={item4}
            header="Join the community"
            text="Cusstomise your NFTs specification"
          />
        </a>
      </div>
    </div>
  );
};

export default Right;
