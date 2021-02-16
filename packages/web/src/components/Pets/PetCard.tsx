import React, { Fragment } from "react";

interface Props {
    name: string,
    race: string,
    age: number
}

const PetCard = (props: Props) => {
  return (
    <Fragment>
        <div className="block py-1 mb-2 border-b-2 border-gray-800 ">
            <h3 className="font-bold text-gray-700 dark:text-gray-100 hover:underline">{props.name}</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-medium">Race: </span>{props.race}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"><span  className="font-medium">Age: </span>{props.age}</p>   
        </div>
    </Fragment>
  );
};

export default PetCard;
