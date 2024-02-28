import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Input, message } from "antd";

import { app } from "../../config";

const onFinish = (values: any) => {
	const { email, password } = values;

	const auth = getAuth(app);
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential: any) => {
			// Logged in
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;

			// const errorMessage = error.message;
			// console.log(errorCode, errorMessage);
			if (errorCode == "auth/email-already-in-use") {
				message.error("Sing in error.");
			}
			// ..
		});
};

const onFinishFailed = (errorInfo: any) => {
	console.log("Failed:", errorInfo);
};

type FieldType = {
	username?: string;
	password?: string;
	email?: string;
};

export default function Signin() {
	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>

			<Form.Item<FieldType>
				label="Email"
				name="email"
				rules={[
					{
						required: true,
						type: "email",
						message: "Please input your email!",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item<FieldType>
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						min: 6,
						message: "Please input more than 6 characters.",
					},
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Sign in
				</Button>
			</Form.Item>
		</Form>
	);
}
