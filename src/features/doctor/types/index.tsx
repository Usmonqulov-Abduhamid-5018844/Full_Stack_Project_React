export interface DoctorFile {
  id: number;
  passport_file: string;
  diplom_file: string;
  yatt_file: string;
  sertifikat_file: string;
  tibiy_varaqa_file: string;
  doctor_id: number;
  created_at: string; 
  updated_at: string; 
}

export interface Wallet {
  id: number;
  doctor_id: number;
  balance: string;
  created_at: string;
  updated_at: string;
}

export interface DoctorSchedule {
  id: number;
  doctor_id: number;
  day_of_week: string;
  start_time: string; 
  end_time: string;
  is_available: boolean;
}
export interface Specialization {
  name: string;
}


export interface Doctor {
  id: number;
  first_name: string;
  last_name: string;
  bio: string;
  verified: boolean;
  reyting: number;
  reyting_count: number;
  experience_years: number;
  step: string;
  phone: string;
  role: string;
  date_of_birth: string;
  gender: string;
  image: string;
  isActive: boolean;
  region: string;
  Doctor_specialization: {
    specialization: Specialization;
  }[];
  Doctor_file: DoctorFile[];
  Wellet: Wallet[];
  doctor_schedules: DoctorSchedule[];
}

export interface DoctorResponse {
  data: Doctor;
}
