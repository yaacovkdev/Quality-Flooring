import "./ShowcaseItem.scss";
import Image from "next/image";
import Link from "next/link";

function ShowcaseItem(props: {
  id: number,
  title: string;
  imageId: number;
  description: string;
}) {
  return (
    <div className="showcase-item default-shadow">
      <Link className="showcase-item__interractive" href={`/show/${props.id}`}>
        <div className="showcase-item__link">
          <h2>{props.title}</h2>
          <div className="showcase-item__content">
            <div className="showcase-item__part showcase-item__part--img">
              <Image
                width={100}
                height={220}
                src={`${process.env.NEXT_PUBLIC_API_URL}/images/id/${props.imageId}`}
                alt={props.title}
                priority={true}
              />
            </div>
            <div className="showcase-item__part showcase-item__part--text">
              <p>{props.description.slice(0, 100)}...<span className="click-info-text">Click for Project Gallery!</span></p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShowcaseItem;
