import { Course } from './course.model';

export interface User {
    email: string;
    courses?: Course[];
    coursesVoted?: Course[];
    isAdmin?: boolean;
}
