

import { Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const { TextArea } = Input;



const EditForm = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const navigator = useNavigate();
    const params    = useParams();

console.log(params);

    const onFinish = (values) => {
        setLoading(true);
        axios.put(`https://68b917c2b71540504329f30a.mockapi.io/api/products/${product.id}`, values).then(function (response) {

            navigator('/products');

        }).catch(function (error) {
            console.log(error);

        }).finally(() => {
            setLoading(false);
        });



    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    useEffect(() => {
        setLoading(true);
        axios.get(`https://68b917c2b71540504329f30a.mockapi.io/api/products/${params.id}`).then(function (response) {
            setProduct(response.data);
        }).catch(function (error) {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);



    useEffect(() => {
        if (product) {
            form.setFieldsValue({
                name:   (product.name) ? product.name : '',
                price: product.price || '',
                image: product.image || '',
                rating: product.rating || '',
                description: product.description || '',
            });
        }
    }, [product, form]);

    return (
        //create a card to hold a form  
        <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-2xl font-bold mb-4">Update a Product</h2>


                        <Form
                            form={form}
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter product name!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'This field is requied!' }]}
                >
                    <InputNumber min={1} max={500} />
                </Form.Item>


                <Form.Item
                    label="Image URL"
                    name="image"
                    rules={[{ required: true, message: 'Please enter product name!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Rating"
                    name="rating"
                    rules={[{ required: true, message: 'This field is requied!' }]}
                >
                    <InputNumber min={1} max={5} />
                </Form.Item>


                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'This field is requied!' }]}
                >
                    <TextArea rows={4} placeholder="maxLength is 6" />
                </Form.Item>



                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>



        </div>
    )
}

export default EditForm