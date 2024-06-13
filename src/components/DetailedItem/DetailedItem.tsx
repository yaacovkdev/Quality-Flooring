import "./DetailedItem.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {fetchNameFullProjectData} from "@/util/ProjectData";

export default function DetailedItem(props: { projectId: number }) {
  console.log("hi?", props.projectId);
  const [projectInfo, setProjectInfo] = useState<{
    id: number;
    name: string;
    images: {
      id: number;
      name: string;
    }[];
    description: string;
  }>({id: 0, name: "", images: [], description: "" });

  useEffect(() => {
    const getFullProjectData = async () => {
      try {
        const response = await fetchNameFullProjectData(props.projectId);
        console.log(response.data);

        setProjectInfo(response.data);
        console.log("data set");
      } catch (err) {
        console.error(err);
      }
    };
    getFullProjectData();
  }, []);

  console.log(projectInfo.images);

  for(let i = 0; i < projectInfo.images.length; i++){
    console.log("hello", projectInfo.images[i].id);
  }

  return (
    <div className="detailed-item">
      <div className="display-content detailed-item__content">
        <div className="detailed-item__images">
          {projectInfo.images.length !== 0 && 
            projectInfo.images.map((projimg) => 
            (
              
              <Image
                className="default-shadow"
                key={projimg.id}
                width={500}
                height={667}
                src={`${process.env.NEXT_PUBLIC_API_URL}/images/id/${projimg.id}`}
                alt={projimg.name}
              />
            )
            )}
        </div>
        <div className="detailed-item__title">
          <h1>{projectInfo.name}</h1>
        </div>
        <div className="detailed-item__body">{projectInfo.description}</div>
      </div>
    </div>
  );
}
