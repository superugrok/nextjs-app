"use client";

import { getBackboneComponent } from "./BackboneElement";
import Link from "next/link";

export const People = ({ people, data, page }) => {
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
