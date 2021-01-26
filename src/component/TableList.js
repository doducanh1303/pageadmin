import { Table } from 'antd';
import React from 'react';

const columns = [
  {
    title:'Hình ảnh',
    dataIndex: 'img',
  },
  {
   title:'Tiêu đề ',
    dataIndex: 'title',
  },
  {
    title:'',
    dataIndex: '', 
  },
  {
    title:'',
    dataIndex: '', 
  },
  {
    title:'',
    dataIndex: '', 
  },
  {
    title:'',
    dataIndex: '', 
  },
  {
   title:'Tác giả',
    dataIndex: 'author',
  },
  {
      title:'Danh mục',
      dataIndex: 'category'
  },
  {
      title:'Ngày tạo',
      dataIndex: 'date'
  },
  {
      title:'Trạng thái',
      dataIndex: 'status'


  }
];

const data = [
    {
        img:<img src="../img/1.jpg" width="40" style={{borderRadius:"20px"}}/>,
        title: "Phascolarctos cinereus",
        author: "isherbourne0@illinois.edu",
        category: "java",
        date: "5/27/2020",
        status:<div class="trangthai" style={{backgroundColor:"#87d068"}}>
          <p>Đang hoạt động</p>
        </div>

    },
    {
        img:<img src="../img/1.jpg" width="40" style={{borderRadius:"20px"}}/>,
        title: "Phascolarctos cinereus",
        author: "isherbourne0@illinois.edu",
        category: "java",
        date: "5/27/2020",
        status:<div class="trangthai" style={{backgroundColor:"#87d068"}}>
        <p>Đang hoạt động</p>
      </div>

    },
    {
        img:<img src="../img/1.jpg" width="40" style={{borderRadius:"20px"}}/>,
        title: "Phascolarctos cinereus",
        author: "isherbourne0@illinois.edu",
        category: "java",
        date: "5/27/2020",
        status:<div class="trangthai" style={{backgroundColor:"#87d068"}}>
        <p>Đang hoạt động</p>
      </div>

    },
    {
        img:<img src="../img/1.jpg" width="40" style={{borderRadius:"20px"}}/>,
        title: "Phascolarctos cinereus",
        author: "isherbourne0@illinois.edu",
        category: "java",
        date: "5/27/2020",
        status:<div class="trangthai" style={{backgroundColor:"#87d068"}}>
        <p>Đang hoạt động</p>
      </div>

    },
    {
        img:<img src="../img/1.jpg" width="40" style={{borderRadius:"20px"}}/>,
        title: "Phascolarctos cinereus",
        author: "isherbourne0@illinois.edu",
        category: "java",
        date: "5/27/2020",
        status:<div class="trangthai" style={{backgroundColor:"#87d068"}}>
        <p>Đang hoạt động</p>
      </div>

    },
    {
        img:<img src="../img/1.jpg" width="40" style={{borderRadius:"20px"}}/>,
        title: "Phascolarctos cinereus",
        author: "isherbourne0@illinois.edu",
        category: "java",
        date: "5/27/2020",
        status:<div class="trangthai" style={{backgroundColor:"#87d068"}}>
        <p>Đang hoạt động</p>
      </div>

    },
    {
        img:<img src="../img/1.jpg" width="40" style={{borderRadius:"20px"}}/>,
        title: "Phascolarctos cinereus",
        author: "isherbourne0@illinois.edu",
        category: "java",
        date: "5/27/2020",
        status:<div class="trangthai" style={{backgroundColor:"#87d068"}}>
        <p>Đang hoạt động</p>
      </div>

    },
    {
        img:<img src="../img/1.jpg" width="40" style={{borderRadius:"20px"}}/>,
        title: "Phascolarctos cinereus",
        author: "isherbourne0@illinois.edu",
        category: "java",
        date: "5/27/2020",
        status:<div class="trangthai" style={{backgroundColor:"#87d068"}}>
        <p>Đang hoạt động</p>
      </div>

    },

];


class TableList extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
  
      ],
    };
    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
  }
}
export default TableList;