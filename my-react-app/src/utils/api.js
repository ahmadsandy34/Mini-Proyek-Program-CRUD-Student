import axios from "axios";

// Mengambil URL dasar API dan API Key dari variabel lingkungan
const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Fungsi untuk mengambil daftar semua mahasiswa
export const fetchStudents = async () => {
  try {
    // Mengirim permintaan GET ke endpoint /students
    const res = await axios.get(`${API_URL}/students`, {
      // Menyertakan API Key di header permintaan
      headers: {
        "api-key": API_KEY,
      },
    });
    // Mengembalikan respon data dari server
    return res.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

// Fungsi untuk mengambil detail mahasiswa berdasarkan ID
export const fetchStudentDetail = async (id) => {
  try {
    // Mengirim permintaan GET ke endpoint /students/{id}
    const res = await axios.get(`${API_URL}/students/${id}`, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Error fetching details for student ID ${id}:`, error);
    throw error;
  }
};

// Fungsi untuk menambahkan mahasiswa baru
export const newStudent = async (data) => {
  try {
    // Mengirim permintaan POST dengan data mahasiswa baru ke /students
    const res = await axios.post(`${API_URL}/students`, data, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};

// Fungsi untuk memperbarui data mahasiswa berdasarkan ID
export const updateStudent = async (data, id) => {
  try {
    // Mengirim permintaan PUT untuk memperbarui mahasiswa berdasarkan ID
    const res = await axios.put(`${API_URL}/students/${id}`, data, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Error updating student ID ${id}:`, error);
    throw error;
  }
};

// Fungsi untuk menghapus mahasiswa berdasarkan ID
export const deleteStudent = async (id) => {
  try {
    // Mengirim permintaan DELETE ke /students/{id}
    const res = await axios.delete(`${API_URL}/students/${id}`, {
      headers: {
        "api-key": API_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.error(`Error deleting student ID ${id}:`, error);
    throw error;
  }
};
