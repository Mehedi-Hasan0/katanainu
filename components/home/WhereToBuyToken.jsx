"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { FaCopy } from "react-icons/fa6";
import { useState } from "react";
import { kataTokenStorePartner } from "@/data";
import Image from "next/image";

const tokenStore = [
  {
    place: "uniswap",
    code: "0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15",
  },
  {
    place: "pancake swap",
    code: "0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205",
  },
];

const WhereToBuyToken = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
  };
  return (
    <section className="main-container section-margin">
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
        <h3 className="uppercase text-gradient font-bold tracking-[2px] text-xl sm:text-2xl md:text-3xl font-jost text-center">
          Where Can I Buy $KATA Token?
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-[#d3d3d3] font-medium text-center max-w-[960px]">
          Pancake Swap and Uniswap are the easiest outlets for purchasing the
          KATANA INU Token. Copy and Paste the correct contract below when
          adding the token to your ETH or BSC Wallet, and when purchasing $KATA
          on Uniswap or Pancake Swap. To swap any token for $KATA, just
          copy-paste the correct Contract into Pancake Swap or Uniswap, and swap
          for $KATA. Be careful not to send funds to this address directly, as
          you may lose your tokens.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
        {tokenStore.map((store, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 justify-center items-center sm:gap-6 md:gap-8 flex-1 border-[2px] border-[#202020] rounded-lg p-5 bg-black"
          >
            <Link
              href="https://app.uniswap.org/#/swap?inputCurrency=0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15&chain=mainnet"
              target="_blank"
              rel="noreferer"
            >
              <Button
                variant="customAnimated"
                className="py-8 px-10 font-grind text-base md:text-lg lg:text-xl"
              >
                {store.place}
              </Button>
            </Link>
            <p
              onClick={() => copyCode(store.code, i)}
              className="text-wrap text-white break-all text-center cursor-pointer"
            >
              {store.code}
              <FaCopy color="#fff" size={20} className="inline ml-2 mr-3" />
              <span className="inline">{copiedIndex === i && "Copied"}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden">
        <ul className="flex flex-row flex-wrap items-center justify-center md:flex-nowrap">
          {kataTokenStorePartner.map((store, i) => (
            <li key={i} className="mx-4 my-2">
              <Link href={store.link}>
                <Image
                  src={store.imgUrl}
                  alt={store.storeName}
                  width={154}
                  height={51}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhereToBuyToken;
