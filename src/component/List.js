import React from 'react';
import { Select } from 'antd';
import { Input, Space, Checkbox } from 'antd';
import TableList from '../component/TableList'
import { AudioOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { Option } = Select;
const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const onSearch = value => console.log(value);
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
function List() {
    return (
        <div>
            <div className="containerlist">
                <div className="contentlist_content">

                    <div className="contentlist_content_head">
                        <h3>BÀI VIẾT</h3>
                    </div>
                    <div className="contentlist_content_input">
                        <Select
                            showSearch
                            style={{ width: 250 }}
                            placeholder="Danh sách cha"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">Not Identified</Option>
                            <Option value="2">Closed</Option>
                            <Option value="3">Communicated</Option>
                            <Option value="4">Identified</Option>
                            <Option value="5">Resolved</Option>
                            <Option value="6">Cancelled</Option>
                        </Select>,
                        <Select
                            showSearch
                            style={{ width: 250 }}
                            placeholder="Trạng thái"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">Not Identified</Option>
                            <Option value="2">Closed</Option>
                            <Option value="3">Communicated</Option>
                            <Option value="4">Identified</Option>
                            <Option value="5">Resolved</Option>
                            <Option value="6">Cancelled</Option>
                        </Select>,
                        <Space direction="vertical">
                            <Search placeholder="Tìm kiếm..." onSearch={onSearch} style={{ width: 250 }} />

                        </Space>,

                    </div>
                    <div className="contentlist_content_add">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <a>
                            Thêm mới bài viết
                    </a>
                    </div>
                </div>
                <div class="postcheck">
                    {/* <div class="posthead">
                        <Checkbox onChange={onChange}></Checkbox>

                        <p id="img">
                            Hình ảnh
                  </p>
                        <p id="title1">
                            Tiêu đề
                  </p>
                        <p id="author">
                            Tác giả
                        </p>
                        <p id="category">
                            Danh mục
                        </p>
                        <p id="date">
                   Ngày Tạo
                        </p>
                        <p id="status">
                          Trạng thái
                        </p>
                    </div> */}
                    <TableList/>
                </div>
            </div>
        </div>
    )
}

export default List
