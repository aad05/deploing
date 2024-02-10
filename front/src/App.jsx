import { Button, Card, Checkbox, Form, Input, Select, Tabs } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("gardening");

  useEffect(() => {
    axios({
      url: `http://localhost:8080/${type}`,
    }).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, [type]);

  const onFinish = async (e) => {
    console.log(e);
    await axios({
      url: `http://localhost:8080/${e.type}`,
      method: "POST",
      data: e,
    });
  };

  const items = [
    {
      key: "1",
      label: "Rendering",
      children: (
        <div>
          <Select
            defaultValue="gardening"
            style={{
              width: 200,
              marginBottom: "50px",
            }}
            onChange={(e) => {
              console.log(e);
              setType(e);
            }}
            options={[
              {
                value: "gardening",
                label: "Gardening",
              },
              {
                value: "homepot",
                label: "Home Pot",
              },
              {
                value: "domestic",
                label: "Domestic",
              },
            ]}
          />
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
            }}
          >
            {data.map(({ image, title, description, _id }) => (
              <Card key={_id} title={title}>
                <img src={image} style={{ width: "100%" }} />
                <p>{title}</p>
                <p>{description}</p>
              </Card>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Actions",
      children: (
        <div>
          <Form
            onFinish={onFinish}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Image"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Please input your image!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your title!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your description!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Select type"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Please input your type!",
                },
              ]}
            >
              <Select
                options={[
                  {
                    value: "gardening",
                    label: "Gardening",
                  },
                  {
                    value: "homepot",
                    label: "Home Pot",
                  },
                  {
                    value: "domestic",
                    label: "Domestic",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default App;
