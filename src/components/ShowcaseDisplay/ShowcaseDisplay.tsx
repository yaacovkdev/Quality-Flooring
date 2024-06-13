"use client";

import React, { useEffect, useState } from "react";
import "./ShowcaseDisplay.scss";
import ShowcaseItem from "../ShowcaseItem/ShowcaseItem";
import { fetchAllPreviewProjectsData } from "@/util/ProjectData";

export default function ShowcaseDisplay() {
  const [projects, setProjectNames] = useState<
    {
      id: number;
      name: string;
      images: {
        id: number;
        name: string;
      }[];
      description: string;
    }[]
  >([]);

  //collect data of all avalible collection texts and then post

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchAllPreviewProjectsData();

        setProjectNames(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  console.log(projects);
  return (
    <div className="showcase-main">
      <div className="showcase-content display-content default-shadow">
        {projects.length > 0 &&
          projects.map((project) => (
            <ShowcaseItem
              key={project.id}
              id={project.id}
              title={project.name}
              imageId={project.images[0].id}
              description={project.description}
            />
          ))}
      </div>
    </div>
  );
}
