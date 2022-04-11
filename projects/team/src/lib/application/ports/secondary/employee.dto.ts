import { Url } from "url";
import { DepartmentDTO } from "./department.dto";

export interface EmployeeDTO {
  readonly image: string;
  readonly alt: string;
  readonly name: string;
  readonly position: string;
  readonly detail: string;
  readonly department: DepartmentDTO[];
  readonly order?;
  readonly id?;
}
