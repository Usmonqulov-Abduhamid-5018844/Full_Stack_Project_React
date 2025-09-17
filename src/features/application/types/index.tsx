export interface Specialization {
  name: string;
}

export interface DoctorFile {
  id: number;
  passport_file: string;
  diplom_file: string;
  yatt_file: string;
  sertifikat_file: string;
  tibiy_varaqa_file: string;
  created_at: string;
  updated_at: string;
}

export interface Wellet {
  id: number;
  balance: string;
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
  Doctor_file: DoctorFile[];
  Wellet: Wellet[];
  Doctor_specialization: {
    specialization: Specialization;
  }[];
}

export interface DoctorsList {
  total: number;
  page: number;
  limit: number;
  data: Doctor[];
}

export interface DoctorProps {
  data: DoctorsList;
}


    

export type EStatus = "finish" | "block"
