import { User } from "./User";

export type Event = {
	id: string;
	name: string;
	date: string;
	roomId: string;
	attendeesList: User[];
};
