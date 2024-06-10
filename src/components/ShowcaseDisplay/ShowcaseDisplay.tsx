"use client";

import React, { useEffect, useState } from "react";
import "./ShowcaseDisplay.scss";
import ShowcaseItem from "../ShowcaseItem/ShowcaseItem";
import { fetchAllPreviewProjectData } from "@/util/ProjectData";

export default function ShowcaseDisplay() {
  const [projects, setProjectNames] = useState<
    {
      project_name: string;
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
        const response = await fetchAllPreviewProjectData();

        setProjectNames(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  let showcase_id = 0;
  console.log(projects);
  return (
    <div className="showcase-main">
      <div className="showcase-content display-content default-shadow">
        {projects.length > 0 &&
          projects.map((project) => (
            <ShowcaseItem
              key={++showcase_id}
              title={project.project_name}
              imageId={project.images[0].id}
              description={project.description}
            />
          ))}
      </div>
    </div>
  );
}
