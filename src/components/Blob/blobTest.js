"use client";
import { useEffect } from "react";
import KUTE from "kute.js";

function BlobTest() {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []); // Run only once on component mount

  return (
    <section className="h-[100vh] bg-black">
      <div className="rotate-180"></div>
      <div className="">
        <h1>Testing blobs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias,
          repellat debitis ipsum id sed, corporis ratione dolorum, doloribus
          voluptas animi earum eius hic iure iusto nulla quod autem iste?
        </p>
      </div>
      <div className="rotate-180"></div>
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        // xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(419.7037320571209 294.7398918639826)">
          <path
            id="blob1"
            d="M149.4 -250.3C192.9 -233.8 226.8 -192.1 262.8 -146.2C298.8 -100.3 336.9 -50.2 337.6 0.4C338.3 51 301.7 102 258.7 135.8C215.7 169.7 166.5 186.3 122.3 202C78.1 217.7 39.1 232.3 -8.8 247.6C-56.7 262.8 -113.3 278.6 -162.6 265.9C-211.8 253.1 -253.5 211.8 -269.2 162.7C-284.9 113.7 -274.4 56.8 -260.1 8.3C-245.9 -40.3 -227.7 -80.7 -206.7 -120.5C-185.7 -160.3 -161.9 -199.7 -126.9 -221.2C-92 -242.7 -46 -246.3 3.5 -252.4C53 -258.5 106 -266.9 149.4 -250.3"
            fill="#EB0028"
          ></path>
        </g>

        <g transform="translate(431.460456759606 269.9993985529914)">
          <path
            id="blob2"
            d="M162 -276.9C198.9 -259.2 210.3 -193.6 235.6 -139.5C260.8 -85.3 299.9 -42.7 314.5 8.4C329.1 59.5 319.1 119 292 170C264.9 220.9 220.7 263.3 169.2 294.4C117.7 325.5 58.8 345.2 1.8 342.1C-55.2 338.9 -110.3 312.8 -149.9 274.8C-189.4 236.8 -213.4 186.9 -237.3 139.1C-261.2 91.3 -285.1 45.7 -284.1 0.6C-283.1 -44.5 -257.2 -89 -234 -138.1C-210.8 -187.1 -190.4 -240.8 -151.9 -257.6C-113.3 -274.4 -56.7 -254.4 2.9 -259.5C62.5 -264.5 125 -294.6 162 -276.9"
            fill="#EB0028"
          ></path>
        </g>
      </svg>

      {/* <script>
        const tween = KUTE.fromTo(
            '#blob1',
            {path:'#blob1'},
            {path:'#blob2'},
            {repeat:999, duration:3000, yoyo:true}
        )

        tween.start()
        {/* KUTE.fromTo('#rectangle', {path: '#rectangle' }, { path: '#star' }).start(); */}
    </section>
  );
}

export default BlobTest;
