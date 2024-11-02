import React from "react";

export default function StudentDetail({ toggleModal, student }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Student Detail</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            // Menutup modal saat tombol diklik
            onClick={toggleModal}
          ></button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Name:</strong> {student?.name || "N/A"}
          </p>
          <p>
            <strong>NIM:</strong> {student?.nim || "N/A"}
          </p>
          <p>
            <strong>Class:</strong> {student?.class || "N/A"}
          </p>
          <p>
            <strong>Year:</strong> {student?.year || "N/A"}
          </p>
          <p>
            <strong>Gender:</strong> {student?.gender || "N/A"}
          </p>
          <p>
            <strong>Birth Date:</strong> {student?.birthDate || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {student?.address || "N/A"}
          </p>
          <p>
            <strong>Guardian Name:</strong> {student?.guardian_name || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

