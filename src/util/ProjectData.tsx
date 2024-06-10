import axios from "axios";

//taken function fro ShowcaseDisplay.tsx
const fetchAllPreviewProjectData = async (): Promise<
  {
    project_name: string;
    images: { id: number; name: string }[];
    description: string;
  }[]
> => {
  try {
    const projectsPreviewData: {
      project_name: string;
      images: { id: number; name: string }[];
      description: string;
    }[] = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/?preview=`
    );

    return projectsPreviewData;
  } catch (err) {
    console.error(err);
    throw err; //clears undefined return warning
  }
};

const fetchNameFullProjectData = async (
  name: string
): Promise<
{
  name: string;
  images: { id: number; name: string }[];
  description: string;
}[]
> => {
try {
  const projectsPreviewData: {
    name: string;
    images: { id: number; name: string }[];
    description: string;
  }[] = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${name}`
  );

  return projectsPreviewData;
} catch (err) {
  console.error(err);
  throw err; //clears undefined return warning
}
};

export { fetchAllPreviewProjectData, fetchNameFullProjectData};
