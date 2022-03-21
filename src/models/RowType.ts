import type { ClassType } from './ClassType';
import type { CTAType } from './CTAType';

interface ItemType {
	edges: ClassType[];
}

export interface RowType {
	cursor: string;
	node: {
		__typename?: string;
		cta?: CTAType;
		id?: string;
		slug?: string;
		title: string;
		items: ItemType;
	};
}
