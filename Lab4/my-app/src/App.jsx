import React from "react";
import { Layout, Menu, Row, Col, Table, Form, Input, Radio, Select, Checkbox, Button, Typography, Grid, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";


const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;
const { useBreakpoint } = Grid;

export default function App() {
  const screens = useBreakpoint();

  const columns = [
    { title: "№", dataIndex: "id", key: "id", rowScope: "row" },
    { title: "Имя", dataIndex: "firstName", key: "firstName" },
    { title: "Фамилия", dataIndex: "lastName", key: "lastName" },
    { title: "Группа", dataIndex: "group", key: "group" },
    { title: "Оценка", dataIndex: "grade", key: "grade" },
  ];

  const data = [
    { id: 1, firstName: "Иван", lastName: "Иванов", group: "А-101", grade: 5 },
    { id: 2, firstName: "Петр", lastName: "Петров", group: "А-102", grade: 4 },
    { id: 3, firstName: "Сергей", lastName: "Сидоров", group: "А-103", grade: 5 },
    { id: 4, firstName: "Анна", lastName: "Кузнецова", group: "А-101", grade: 3 },
    { id: 5, firstName: "Мария", lastName: "Соколова", group: "А-102", grade: 4 },
    { id: 6, firstName: "Дмитрий", lastName: "Орлов", group: "А-103", grade: 5 },
  ];

  return (
    <Layout style={{ minHeight: "100vh", width: "100%", maxWidth: "100vw" }}>
      {/* Шапка */}
      <Header 
        style={{
          background: "linear-gradient(90deg, #1a1a1a, #333, #1a1a1a)",
          padding: "0 12px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          boxSizing: "border-box"
        }}
        >
        <Row justify="space-between" align="middle" style={{ width: "100%", flexWrap: "wrap" }}>
          <Col>
            <Row align="middle" gutter={12}>
              <Col>
                <img src="webPicture.png" alt="Логотип" style={{ width: 50 }} />
              </Col>
              <Col>
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    fontSize: screens.xs ? "14px" : undefined,
                    maxWidth: screens.xs ? "150px" : "none",
                    overflow: screens.xs ? "hidden" : "visible",
                    textOverflow: screens.xs ? "ellipsis" : "unset"
                  }}
                >
                  WebProgramming
                </span>
              </Col>
            </Row>
          </Col>
          <Col>
            {!screens.xs ? (
            <Menu
              theme="dark"
              mode="horizontal"
              style={{
                lineHeight: "64px",
                background: "#444",
                flex: 1,
                minWidth: 0,
                display: "flex",
                justifyContent: "flex-end",
                overflow: "hidden",
                flexWrap: "nowrap",
                gap: "8px",
              }}
              items={[
                {
                  key: "1",
                  label: (
                    <span
                      style={{
                        color: "#fff",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        transition: "background 0.3s ease",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={e => (e.target.style.background = "#555")}
                      onMouseLeave={e => (e.target.style.background = "transparent")}
                    >
                      Ссылка 1
                    </span>
                  ),
                },
                {
                  key: "2",
                  label: (
                    <span
                      style={{
                        color: "#fff",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        transition: "background 0.3s ease",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={e => (e.target.style.background = "#555")}
                      onMouseLeave={e => (e.target.style.background = "transparent")}
                    >
                      Ссылка 2
                    </span>
                  ),
                },
                {
                  key: "3",
                  label: (
                    <span
                      style={{
                        color: "#fff",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        transition: "background 0.3s ease",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={e => (e.target.style.background = "#555")}
                      onMouseLeave={e => (e.target.style.background = "transparent")}
                    >
                      Ссылка 3
                    </span>
                  ),
                },
              ]}
            />
          ) : (
            <Dropdown
              menu={{
                items: [
                  { key: "1", label: "Ссылка 1" },
                  { key: "2", label: "Ссылка 2" },
                  { key: "3", label: "Ссылка 3" },
                ],
              }}
              placement="bottomRight"
              arrow
            >
              <MenuOutlined style={{ fontSize: 24, color: "white", cursor: "pointer", marginLeft: 8 }} />
            </Dropdown>
          )}
          </Col>
        </Row>
      </Header>

      {/* Контент */}
      <Content 
        style={{ 
          flex: 1,
          width: "100%",
          maxWidth: "100vw",
          minHeight: "calc(100vh - 64px)", 
          padding: "12px",
          boxSizing: "border-box",
          background: "#f5f5f5",
          overflow: "hidden"
        }}
      >
        <Row gutter={[16, 16]} style={{ width: "100%", maxWidth: "100vw" }}>
          {/* Ссылки */}
          <Col xs={24} md={6} lg={6}>
            <Title level={3} style={{ marginBottom: 12 }}>Список ссылок</Title>
            <div style={{ wordWrap: "break-word", overflowWrap: "break-word" }}>
              <ul>
                <li><a href="http://kubsu.ru/">http://kubsu.ru/</a></li>
                <li><a href="https://kubsu.ru/">https://kubsu.ru/</a></li>
                <li><img src="/image.jpg" alt="Цветок"
                    style={{ maxWidth: "100%", height: "auto", display: "block", margin: "10px auto", borderRadius: "6px" }}/></li>
                <li><a href="Lab1/General/InGeneral/index.html">/index.html</a></li>
                <li><a href="/">/</a></li>
                <li><a href="#form">#form</a></li>
                <li><a href="https://thecode.media/metrica/?utm_source=habr&utm_medium=cpc&utm_campaign=test2025">thecode.media</a></li>
                <li><a href="https://www.amazon.com/stores/page/ADB3739F-CC98-4809-9E1F-C36731141002?ingress=3&id=123">Amazon Store</a></li>
                <li><a href="page2.html">page2.html</a></li>
                <li><a href="about/page3.html">about/page3.html</a></li>
                <li><a href="../globIndex1.html">../globIndex1.html</a></li>
                <li><a href="../../globIndex.html">../../globIndex.html</a></li>
                <li><a href="https://developer.mozilla.org/ru/" target="_blank">Документация MDN</a></li>
                <li><a href="https://ru.wikipedia.org/wiki/HTML#История" target="_blank">История HTML</a></li>
                <li><a href="">Пустой href</a></li>
                <li><a>Без href</a></li>
                <li><a href="https://example.com/hidden" rel="nofollow">nofollow ссылка</a></li>
                <li><a href="https://example.com/noindex" rel="noindex">noindex ссылка</a></li>
                <li>
                  Нумерованный список ссылок:
                  <ol>
                    <li><a href="https://html.spec.whatwg.org/">HTML Spec</a></li>
                    <li><a href="https://www.w3.org/TR/selectors-4/">CSS Selectors Level 4</a></li>
                    <li><a href="https://httpwg.org/specs/">HTTP Specs</a></li>
                  </ol>
                </li>
                <li><a href="ftp://demo:demo@speedtest.tele2.net/1MB.zip">FTP 1MB.zip</a></li>
              </ul>
            </div>
          </Col>

          {/* Таблица */}
          <Col xs={24} md={10} lg={10}>
            <Title level={3} style={{ marginBottom: 12 }}>Пример таблицы</Title>
            <div style={{ background: "white", padding: "10px", borderRadius: 6 }}>
              {!screens.xs && (
                <div style={{ overflowX: "auto" }}>
                  <Table
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                    bordered
                    size="small"
                    rowKey="id"
                    scroll={{ x: true }}
                  />
                </div>
              )}
              {screens.xs && (
                <div>
                  {data.map(item => (
                    <div
                      key={item.id}
                      style={{
                        border: "1px solid #ddd",
                        marginBottom: "8px",
                        padding: "8px",
                        borderRadius: "6px",
                        background: "#fafafa"
                      }}
                    >
                      <p><b>№:</b> {item.id}</p>
                      <p><b>Имя:</b> {item.firstName}</p>
                      <p><b>Фамилия:</b> {item.lastName}</p>
                      <p><b>Группа:</b> {item.group}</p>
                      <p><b>Оценка:</b> {item.grade}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Col>

          {/* Форма */}
          <Col xs={24} md={8} lg={8}>
            <Title level={3} style={{ marginBottom: 12 }}>Форма</Title>
            <div style={{ background: "white", padding: "10px", borderRadius: 6 }}>
              <Form layout="vertical">
                <Form.Item label="ФИО">
                  <Input placeholder="Иванов Иван Иванович" />
                </Form.Item>
                <Form.Item label="Телефон">
                  <Input placeholder="+7 999 123-45-67" />
                </Form.Item>
                <Form.Item label="Email">
                  <Input type="email" placeholder="email@gmail.com" />
                </Form.Item>
                <Form.Item label="Дата рождения">
                  <Input type="date" />
                </Form.Item>
                <Form.Item label="Пол">
                  <Radio.Group>
                    <Radio value="male">Мужской</Radio>
                    <Radio value="female">Женский</Radio>
                    <Radio value="other">Другое</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Любимый язык программирования">
                  <Select mode="multiple" defaultValue={["C", "JavaScript"]}>
                    <Option value="C">C</Option>
                    <Option value="C++">C++</Option>
                    <Option value="JavaScript">JavaScript</Option>
                    <Option value="Python">Python</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Биография">
                  <Input.TextArea rows={4} placeholder="Биография" />
                </Form.Item>
                <Form.Item>
                  <Checkbox>С контрактом ознакомлен(а)</Checkbox>
                </Form.Item>
                <Button type="primary" block>
                  Сохранить
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Бокс */}
        <Row justify="center" style={{ margin: "20px 0" }}>
          <Col 
            style={{ 
              background: "#000", 
              padding: "12px 20px", 
              borderRadius: 8, 
              display: "flex", 
              alignItems: "center", 
              gap: 10 
              }}
            >
            <img src="webPicture.png" alt="Web Logo" style={{ width: 50 }} />
            <span style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Web-Programming</span>
          </Col>
        </Row>
      </Content>

      {/* Футер */}
      <Footer 
        style={{ 
          textAlign: "center", 
          background: "#333", 
          color: "#fff", 
          width: "100%", 
          margin: 0, 
          padding: "20px",
          }}
        >
        © 2025 Учебный сайт. Все права защищены.
      </Footer>
    </Layout>
  );
}