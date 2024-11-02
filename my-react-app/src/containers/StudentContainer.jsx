import React, { Component } from "react";
import StudentTable from "../components/StudentTable";
import StudentForm from "../components/StudentForm";
import StudentDetail from "../components/StudentDetail";
import Navbar from "../components/Navbar";
import {
  fetchStudents,
  fetchStudentDetail,
  newStudent,
  updateStudent,
  deleteStudent,
} from "../utils/api";

// Komponen utama untuk menampilkan dan mengelola data mahasiswa
export default class StudentContainer extends Component {
  // Inisialisasi state komponen
  state = {
    // Status apakah dalam mode edit atau tidak
    isEdit: false,
    // Status modal form (tampilkan atau tidak)
    modalForm: false,
    // Status modal detail (tampilkan atau tidak)
    modalDetail: false,
    // Daftar data mahasiswa
    students: [],
    // Data mahasiswa yang sedang diakses/edit
    currentStudent: {},
  };

  // Menjalankan fetch data ketika component pertama kali di-render
  componentDidMount() {
    this.fetchStudentsData();
  }

  // Fungsi untuk mengambil data-data siswa dari API
  async fetchStudentsData() {
    try {
      const response = await fetchStudents();
      this.setState({
        // Simpan data-data mahasiswa ke state students
        students: Array.isArray(response.data) ? response.data : [],
      });
    } catch (err) {
      console.error(err);
    }
  }

  // Fungsi untuk membuka/tutup modal form, dan menentukan apakah form untuk edit atau tambah
  toggleModalForm = (isEdit = false, student = {}) => {
    this.setState({
      isEdit,
      // Toggle status modal form
      modalForm: !this.state.modalForm,
      // Jika mode edit, gunakan data mahasiswa yang dipilih
      currentStudent: isEdit ? student : {},
    });
  };

  // Fungsi untuk membuka modal detail mahasiswa dengan mengambil data mahasiswa berdasarkan ID
  openModalDetail = async (id) => {
    try {
      const studentDetail = await fetchStudentDetail(id);
      // Simpan detail mahasiswa ke state dan buka modal detail
      this.setState({ currentStudent: studentDetail.data, modalDetail: true });
    } catch (err) {
      console.error("Error fetching student details:", err);
    }
  };

  // Fungsi untuk menutup modal detail dan reset data mahasiswa
  closeModalDetail = () => {
    this.setState({ modalDetail: false, currentStudent: {} });
  };

  // Fungsi untuk meng-handle perubahan input form
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentStudent: {
        ...prevState.currentStudent,
        [name]: value, // Update value sesuai dengan nama input yang ditarget
      },
    }));
  };

  // Fungsi untuk meng-handle submit form, baik untuk tambah atau edit data
  handleSubmit = async (e) => {
    e.preventDefault();
    const { currentStudent, isEdit } = this.state;

    try {
      
      if (isEdit) {
        // Jika mode edit, update data mahasiswa yang ada
        await updateStudent(currentStudent, currentStudent.id);
        this.fetchStudentsData();
        
      } else {
        // Jika mode tambah, buat data mahasiswa baru
        const newStudentData = await newStudent(currentStudent);
        this.setState((prevState) => ({
          students: [...prevState.students, newStudentData.data],
        }));
      }
      // Reset state setelah submit
      this.setState({
        currentStudent: {},
        isEdit: false,
        modalForm: false,
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Fungsi untuk menghapus data mahasiswa berdasarkan ID
  handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      this.fetchStudentsData();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <StudentTable
          toggleModalForm={this.toggleModalForm}
          toggleModalDetail={this.openModalDetail}
          students={this.state.students}
          handleDelete={this.handleDelete}
        />

        {/* Render form modal jika modalForm bernilai true */}
        {this.state.modalForm && (
          <StudentForm
            isEdit={this.state.isEdit}
            toggleModal={this.toggleModalForm}
            onSubmit={this.handleSubmit}
            onChange={this.handleInputChange}
            student={this.state.currentStudent}
          />
        )}

        {/* Render detail modal jika modalDetail bernilai true */}
        {this.state.modalDetail && (
          <StudentDetail
            toggleModal={this.closeModalDetail}
            student={this.state.currentStudent}
          />
        )}
      </div>
    );
  }
}
