import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function PostHouse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeRoom, setTypeRoom] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");

  const postingHouse = async () => {
    const houseData = {
      title: title,
      description: description,
      typeRoom: typeRoom,
      images: images,
      price: price,
      status: status,
      location: location,
    };
    const newHouse = await fetch("http://localhost:3001/houses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(houseData),
    });
    alert("create successful");
  };
  return (
    <div className="post-house">
      <form onSubmit={postingHouse}>
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
          type="file"
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

        {/* <label htmlFor="status">Status</label>
        <input
          type="text"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <br /> */}

        <label htmlFor="location">District</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <Button type="submit">Post</Button>
      </form>
    </div>
  );
}
