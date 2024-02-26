import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values: any) => {
	console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
	console.log("Failed:", errorInfo);
};

type FieldType = {
	roomName?: string;
	floorPlan?: string;
	eventName: string;
	numberOfAttendees: number;
	dateOfEvent: string;
	listOfAttendees: string;
};

export default function CreateEvent() {
	return (
		<>
			<div className="container">
				<h1>CreateEvent</h1>
				<form action="">
					<input type="text" />
				</form>
			</div>
		</>
	);
}
