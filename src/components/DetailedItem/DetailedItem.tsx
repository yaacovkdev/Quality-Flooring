import React, { useEffect, useState } from "react";
import { fetchNameFullProjectData } from "@/util/ProjectData"
import axios from "axios";

export default function DetailedItem(props: { projectName: string }) {
  const [projectInfo, setProjectInfo] = useState({});

  useEffect(() => {
    const getFullProjectData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects/${props.projectName}`);
        setProjectInfo(response.data);
        console.log(response);
      } catch(err) {
        console.error(err);
      }
    }
    getFullProjectData();
  }, []);

  return (
    <div className="detailed-item">
      <div className="display-content detailed-item__content">
        <div className="detailed-item__title">
    
        </div>
        <div className="detailed-item__images">
          
        </div>
        <div className="detailed-item__body">

        </div>
      </div>
    </div>
  );
}
