import React from "react";

export default function StudentTable({
  toggleModalForm,
  toggleModalDetail,
  students,
  handleDelete,
}) {
  return (
    <>
      <h1 className="text-center m-3 text-cstm">List of Student</h1>
      <div className="table-responsive mt-3">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col" colSpan="8">
                <button
                  // Buka modal form untuk menambah data baru
                  onClick={() => toggleModalForm(false)}
                  className="btn btn-primary float-start fw-bold"
                >
                  <i className="bi bi-person-fill-add"></i> Add New
                </button>
              </th>
            </tr>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">NIM</th>
              <th scope="col">Class</th>
              <th scope="col">Gender</th>
              <th scope="col">Action 1</th>
              <th scope="col">Action 2</th>
              <th scope="col">Action 3</th>
            </tr>
          </thead>
          <tbody>
            {
            // Map data mahasiswa jika ada, dan tampilkan di tabel
            students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.nim}</td>
                  <td>{student.class}</td>
                  <td>{student.gender}</td>
                  <td>
                    <button
                      // Buka modal detail mahasiswa berdasarkan ID
                      onClick={() => toggleModalDetail(student.id)}
                      className="btn btn-outline-primary w-100"
                    >
                      <i className="bi bi-info-circle"></i> Info
                    </button>
                  </td>
                  <td>
                    <button
                      // Buka modal form untuk edit data mahasiswa
                      onClick={() => toggleModalForm(true, student)}
                      className="btn btn-outline-warning w-100"
                    >
                      <i className="bi bi-pencil-square"></i> Edit
                    </button>
                  </td>
                  <td>
                    <button
                      // Hapus data mahasiswa berdasarkan ID
                      onClick={() => handleDelete(student.id)}
                      className="btn btn-outline-danger w-100"
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              // Jika tidak ada data mahasiswa, tampilkan pesan "No students found."
              <tr>
                <td colSpan="8" className="text-center">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
