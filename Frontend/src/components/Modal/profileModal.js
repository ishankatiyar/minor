import axios from "axios";
import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ProfileModal({ show, onHide, profileData }) {
  const Logout = async () => {
    localStorage.clear();
    try {
      const response = await axios.delete("/logout", { withCredentials: true });
      if (response.data.success === false) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        window.location.href = "/";
      }
    } catch (err) {
      toast.error(`Error while Logging out: ${err}`);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">
          <FontAwesomeIcon
            icon={faUser}
            style={{
              cursor: "pointer",
              color: "#1e88e5",
              margin: "auto",
              textShadow: "0px 4px 15px rgba(30, 136, 229, 0.3)",
            }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="list-group text-center">
          {Object.keys(profileData).map((key, index) => (
            <li
              key={index}
              className="list-group-item"
              style={{
                background: "linear-gradient(135deg, #ffffff, #f0f4f8)",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                marginBottom: "10px",
              }}
            >
              <span className="fw-bold" style={{ color: "#1e88e5" }}>
                {key}:
              </span>{" "}
              {profileData[key]}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="dark"
          className="w-100"
          onClick={Logout}
          style={{
            background: "linear-gradient(90deg, #1e88e5, #43a047)",
            border: "none",
            boxShadow: "0px 6px 15px rgba(30, 136, 229, 0.4)",
            borderRadius: "30px",
          }}
        >
          Logout
        </Button>
      </Modal.Footer>

      {/* Additional Styles */}
      <style jsx>{`
        .list-group-item:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
          box-shadow: 0px 8px 20px rgba(30, 136, 229, 0.2);
        }
      `}</style>
    </Modal>
  );
}

export default ProfileModal;
