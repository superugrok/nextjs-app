import { GetServerSideProps } from "next";
import { Fetch } from "@Utils/fetch";
import { getBackboneComponent } from "@Peoples/BackboneElement";
import "@Peoples/styles/app.scss";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { people } = context.query;
  const api = `https://swapi.dev/api/people/${people && people[1]}`;
  const data = await Fetch(api);

  if (!people || !data) return { notFound: true };

  return {
    props: { page: people[0], data, people: people[1] },
  };
};

const PeoplesIds = ({ data, page, people }) => {
  return (
    <div className="peoples">
      <span className="peoples__hover">Skywars people number {people}</span>
      <span className="peoples__details">
        {getBackboneComponent(
          `Backbone says: ${data.name} is ${data.gender} and his mass is ${data.mass}kg, hair color is ${data.hair_color} and height ${data.height}. 
          So, ${data.eye_color} eyes are awesome too!`
        )}
      </span>
      <Link className="peoples__link" href={`/peoples/${page}`}>
        Back
      </Link>
    </div>
  );
};

export default PeoplesIds;
