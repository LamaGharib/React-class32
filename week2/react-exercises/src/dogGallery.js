import React, { useState } from "react";

export const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    try {
      const results = await fetch("https://dog.ceo/api/breeds/image/random");
      const dogPhoto = await results.json();

      setDogPhotos((prevArray) => [...prevArray, dogPhoto.message]);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {dogPhotos.length !== 0 ? (
        dogPhotos.map((dogPhoto, index) => {
          return <DogPhoto key={index} dogPhotos={dogPhoto} />;
        })
      ) : (
        <h1>Get your first dog by clicking the button!</h1>
      )}
      <Button getDogPhoto={getDogPhoto} />
    </>
  );
};

const DogPhoto = ({ dogPhotos }) => {
  return (
    <div>
      <img src={dogPhotos} alt={"dog"} />
    </div>
  );
};
const Button = ({ getDogPhoto }) => {
  return <button onClick={() => getDogPhoto()}>Get a dog!</button>;
};
