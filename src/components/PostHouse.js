import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function PostHouse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeRoom, setTypeRoom] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [flatSize, setFlatSize] = useState(0);

  const postingHouse = async () => {
    alert("create successful");
    const houseData = {
      title: title,
      description: description,
      typeRoom: typeRoom,
      images: images,
      price: price,
      status: status,
      location: location,
      flatSize: flatSize,
    };

    // var formData = new FormData();
    // formData.append("title", title);
    // formData.append("description", description);
    // formData.append("typeRoom", typeRoom);
    // formData.append("price", price);
    // formData.append("status", status);
    // formData.append("location", location);
    // formData.append("flatSize", flatSize);
    // for (const key of Object.keys(images)) {
    //   formData.append("images", images[key]);
    // }

    const newHouse = await axios.post(
      process.env.REACT_APP_SERVER + "/houses",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(houseData),
      }
    );
    console.log(newHouse);
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
          multiple
          name="images"
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
        <Button onClick={postingHouse}>Post</Button>
      </form>
    </div>
  );
}
