import axios from "axios";

//taken function fro ShowcaseDisplay.tsx
const fetchAllPreviewProjectsData = async (): Promise<
  {
    id: number,
    name: string;
    images: { id: number; name: string }[];
    description: string;
  }[]
> => {
  try {
    const projectsPreviewData: {
      id: number,
      name: string;
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
  id: number
): Promise<
{
  id: number,
  name: string;
  images: { id: number; name: string }[];
  description: string;
}[]
> => {
try {
  console.log(id);
  const projectsPreviewData: {
    id: number;
    name: string;
    images: { id: number; name: string }[];
    description: string;
  }[] = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`
  );

  return projectsPreviewData;
} catch (err) {
  console.error(err);
  throw err; //clears undefined return warning
}
};

export { fetchAllPreviewProjectsData, fetchNameFullProjectData};
