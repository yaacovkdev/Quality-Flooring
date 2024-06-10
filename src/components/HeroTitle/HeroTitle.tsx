"use client";

import "./HeroTitle.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import default_img from "../../assets/images/cleanroom.jpg";

export default function HeroTitle() {
  const [heroImages, setHeroImages] = useState({
    id: -1,
    text: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseId = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/images/type/hero`
        );

        const randomIndex = Math.floor(Math.random() * responseId.data.length);

        const responseHeroText = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/images/id/${responseId.data[randomIndex].id}/text`
        );

        setHeroImages({
          id: responseId.data[randomIndex].id,
          text: responseHeroText.data.body,
        });

        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  const caption = heroImages.text.length
    ? heroImages.text
    : 'Best <span class="normal-font">feeling for your feet!</span>';
  return (
    isLoading || (
      <div className="hero-title">
        <div className="hero-content default-shadow">
          {<h1 dangerouslySetInnerHTML={{ __html: caption }}></h1>}

          <Image
            width={1280}
            height={620}
            src={
              heroImages.id === -1
                ? default_img
                : `${process.env.NEXT_PUBLIC_API_URL}/images/id/${heroImages.id}`
            }
            alt="cozy"
          />
        </div>
      </div>
    )
  );
}
