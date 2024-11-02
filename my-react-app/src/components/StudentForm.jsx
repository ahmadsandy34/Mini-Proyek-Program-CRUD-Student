import React from "react";

export default function StudentForm({
  toggleModal,
  isEdit,
  onSubmit,
  onChange,
  student,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            { //Menampilkan judul form berdasarkan mode edit atau tambah data
            isEdit ? "Edit Student" : "New Student Form "}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            // Menutup modal ketika tombol diklik
            onClick={() => toggleModal(false)}
          ></button>
        </div>
        <div className="modal-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                // Menangani perubahan pada input name
                onChange={onChange}
                // Nilai input diambil dari objek student jika ada, atau string kosong
                value={student.name || ""}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nim" className="form-label">
                NIM
              </label>
              <input
                type="text"
                name="nim"
                id="nim"
                inputMode="numeric"
                className="form-control"
                onChange={onChange}
                value={student.nim || ""}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="class" className="form-label">
                Class
              </label>
              <input
                type="text"
                name="class"
                id="class"
                className="form-control"
                onChange={onChange}
                value={student.class || ""}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="number"
                name="year"
                id="year"
                min="2000"
                max="2024"
                className="form-control"
                onChange={onChange}
                value={student.year || ""}
                placeholder="min: 2000, max: 2024"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                name="gender"
                id="gender"
                className="form-control"
                onChange={onChange}
                value={student.gender || ""}
                placeholder="male or female"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">
                Birth Date
              </label>
              <input
                type="date"
                name="birthDate"
                id="birthDate"
                className="form-control"
                onChange={onChange}
                value={student.birthDate || ""}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                name="address"
                id="address"
                minLength="20"
                className="form-control"
                onChange={onChange}
                value={student.address || ""}
                placeholder="min: 20 characters"
                required
              />
            </div>
            <div>
              <label htmlFor="guardian_name" className="form-label">
                Guardian Name
              </label>
              <input
                type="text"
                name="guardian_name"
                id="guardian_name"
                className="form-control"
                onChange={onChange}
                value={student.guardian_name || ""}
                required
              />
              <div className="modal-footer mt-5">
                {isEdit ? (
                  // Tampilkan tombol update saat mode edit
                  <button type="submit" className="btn btn-warning">
                    <i className="bi bi-pencil-square"></i> Update
                  </button>
                ) : (
                  // Tampilkan tombol submit saat mode tambah data
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-save"></i> Submit
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
