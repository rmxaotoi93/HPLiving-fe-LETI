import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateHouse({ houseId, handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeRoom, setTypeRoom] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [flatSize, setFlatSize] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/houses/${houseId}`)
      .then((res) => {
        console.log(res.data.data);
        setTitle(res.data.data.title);
        setDescription(res.data.data.description);
        setTypeRoom(res.data.data.typeRoom);
        setImages(res.data.data.images);
        setPrice(res.data.data.price);
        setStatus(res.data.data.status);
        setLocation(res.data.data.location);
        setFlatSize(res.data.data.flatSize);
      });
  }, []);
  const updateHouse = async () => {
    const oldData = {
      title: title,
      description: description,
      typeRoom: typeRoom,
      images: images,
      price: price,
      status: status,
      location: location,
      flatSize: flatSize,
    };
    const token = localStorage.getItem("token");
    console.log(houseId);
    const updateHouse = await axios.put(
      process.env.REACT_APP_SERVER + `/houses/${houseId}`,
      oldData,

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(houseData),
      }
    );
    console.log(updateHouse);
    handleClose();
    window.location.reload();
  };
  return (
    <div className="post-house">
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label htmlFor="typeRoom">Type of room</label>
        <input
          type="text"
          name="typeRoom"
          value={typeRoom}
          onChange={(e) => setTypeRoom(e.target.value)}
        />
        <br />

        <label htmlFor="images">Image</label>
        <input
          type="text"
          name="images"
          value={images}
          onChange={(e) => setImages(e.target.value)}
        />
        <br />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <label htmlFor="flatSize">Flat Size</label>
        <input
          type="number"
          name="flatSize"
          value={flatSize}
          onChange={(e) => setFlatSize(e.target.value)}
        />
        <br />

        <label htmlFor="status">Status</label>
        <input
          type="text"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <br />

        <label htmlFor="location">District</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <Button onClick={updateHouse}>Update</Button>
      </form>
    </div>
  );
}
