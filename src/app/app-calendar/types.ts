export interface AvailableTime {
  date: number;
  times: string[]; // ids css
}

export interface BookedClass {
  time: string; // ids css
  studentId: string;
}

export interface BookedTime {
  date: Date;
  class: BookedClass[];
}
