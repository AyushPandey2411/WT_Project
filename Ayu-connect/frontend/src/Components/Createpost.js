import React, { useState, useEffect } from "react";
import "./Createpost.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Createpost() {
  const [body, setBody] = useState("");
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  const navigate = useNavigate()

  // Toast functions
  const notifyA = (msg) => toast.error(msg)
  const notifyB = (msg) => toast.success(msg)


  useEffect(() => {

    // saving post to mongodb
    if (url) {

      fetch("http://localhost:5000/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          body,
          pic: url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            notifyA(data.error)
          } else {
            notifyB("Successfully Posted")
            navigate("/")
          }
        })
        .catch(err => console.log(err))
    }

  }, [url])


  // posting image to cloudinary
  const postDetails = () => {

    console.log(body, image)
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "insta-clone")
    data.append("cloud_name", "ayucloud")
    fetch("https://api.cloudinary.com/v1_1/ayucloud/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(err => console.log(err))
    console.log(url)

  }


  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className="createPost">
      {/* //header */}
      <div className="post-header">
        <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
        <button id="post-btn" onClick={() => { postDetails() }}>Share</button>
      </div>
      {/* image preview */}
      <div className="main-div">
        <img
          id="output"
          src="data:image/jpeg;base64,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"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            loadfile(event);
            setImage(event.target.files[0])
          }}
        />
      </div>
      {/* details */}
      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <h5>Ramesh</h5>
        </div>
        <textarea value={body} onChange={(e) => {
          setBody(e.target.value)
        }} type="text" placeholder="Write a caption...."></textarea>
      </div>
    </div>
  );
}