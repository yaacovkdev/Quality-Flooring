import "./DetailedItem.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import {fetchNameFullProjectData} from "@/util/ProjectData";

export default function DetailedItem(props: { projectName: string }) {
  const [projectInfo, setProjectInfo] = useState<{
    project_name: string;
    images: {
      id: number;
      name: string;
    }[];
    description: string;
  }>({ project_name: "", images: [], description: "" });

  useEffect(() => {
    const getFullProjectData = async () => {
      try {
        const response = await fetchNameFullProjectData(props.projectName);

        setProjectInfo(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getFullProjectData();
  }, []);

  return (
    <div className="detailed-item">
      <div className="display-content detailed-item__content">
        <div className="detailed-item__images">
          {projectInfo.images.length !== 0 &&
            projectInfo.images.map((projimg) => (
              <Image
                className="default-shadow"
                key={projimg.id}
                width={500}
                height={875}
                src={`${process.env.NEXT_PUBLIC_API_URL}/images/id/${projimg.id}`}
                alt={projimg.name}
              />
            ))}
        </div>
        <div className="detailed-item__title">
          <h1>{projectInfo.project_name}</h1>
        </div>
        <div className="detailed-item__body">{projectInfo.description}</div>
      </div>
    </div>
  );
}
