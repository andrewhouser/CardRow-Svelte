import type { TeacherType } from './TeacherType';

export interface ClassDataType {
	__typename: string;
	badges?: { type: string }[];
	durationInSeconds: number;
	id: string;
	largeCoverUrl: string;
	sku: string;
	studentCount: number;
	teacher: TeacherType;
	title: string;
	url: string;
	viewer: {
		hasSavedClass?: boolean;
	};
}
