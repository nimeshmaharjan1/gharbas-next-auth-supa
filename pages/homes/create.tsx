import axios from "axios";
import React from "react";
import ListingForm from "../../components/homes/ListingForm";

const CreateHome = () => {
  const addHome = async (data: any) => {
    // await axios.post("/api/homes", data);
    console.log({ data });
  };
  return (
    <div className="max-w-screen-sm mx-auto">
      <h1 className="text-xl font-medium text-gray-800">List your home</h1>
      <p className="text-gray-500">
        Fill out the form below to list a new home.
      </p>
      <div className="mt-8">
        <ListingForm
          buttonText="Add home"
          redirectPath="/"
          onSubmit={addHome}
        />
      </div>
    </div>
  );
};

export default CreateHome;
