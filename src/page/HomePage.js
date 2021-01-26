import React from 'react';
import { Doughnut } from "react-chartjs-2";

function HomePage() {
    return (
        <div>
            <div className="container2">
                <p className="title">Trang Chủ</p>
                <marquee><h3>Chào mừng bạn đến với hệ thống quản lý W5D</h3></marquee>
                <div className="apphome">
                    <p className="text">Thống kê chung</p>

                    <div className="apphome_content">
                        <div className="apphome_content_small">

                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                            <div className="apphome_text">
                                <p>18</p>
                                <p>Bài Viết</p>
                            </div>

                        </div>
                        <div className="apphome_content_small" style={{ backgroundColor: '#8e44ad' }}>
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                            <div className="apphome_text">
                                <p>18</p>
                                <p>Bài Viết</p>
                            </div>
                        </div>
                        <div className="apphome_content_small" style={{ backgroundColor: '#e7505a' }}>
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                            <div className="apphome_text">
                                <p>18</p>
                                <p>Bài Viết</p>
                            </div>
                        </div>
                        <div className="apphome_content_small" style={{ backgroundColor: '#e3598dc' }}>
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                            <div className="apphome_text">
                                <p>18</p>
                                <p>Bài Viết</p>
                            </div>
                        </div>
                        <div className="apphome_content_small " style={{ backgroundColor: '#3598dc' }}>
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                            <div className="apphome_text">
                                <p>18</p>
                                <p>Bài Viết</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="statistical">
                    <p className="text">Thống dự án</p>
                    <div className="statistical_content">
                        <div className="statistical_content_small">
                            <i class="fa fa-internet-explorer" aria-hidden="true"></i>
                            <p className="statistical_content_text">THIẾT KẾ WEBSITE</p>

                            <div className="status">
                                <div className="status_content">
                                    <div className="deployment">

                                    </div>
                                    <p className="text_deployment">Đang triển khai</p>
                                </div>
                                <div className="status_content" >
                                    <div className="deployment" style={{ backgroundColor: "#36a2eb" }}>

                                    </div>
                                    <p className="text_deployment">Đang duy trì</p>
                                </div>
                                <div className="status_content">
                                    <div className="deployment" style={{ backgroundColor: "#ffce56" }}>

                                    </div>
                                    <p className="text_deployment">Đang kết thúc</p>
                                </div>
                                {/* <div className="status_content status_center">
                                  <div className="deployment" style={{backgroundColor:"#e5e5e5"}}>

                                  </div>
                                  <p className="text_deployment">Đang triển khai</p>
                              </div> */}

                                {/* bieudo */}
                                <Doughnut
                                    data={{
                                        datasets: [
                                            {
                                                label: "Population (millions)",
                                                backgroundColor: [
                                                    "#36a2eb",
                                                    "#ffce56",
                                                    "#ff6384",
                                                    "#e5e5e5"

                                                ],
                                                data: [2478, 5267, 734, 900]
                                            }
                                        ]
                                    }}
                                    option={{
                                        title: {
                                            display: true,
                                            text: "Predicted world population (millions) in 2050"
                                        }
                                    }}
                                />

                                <div className="report">
                                    <div className="report1">
                                        <p>Đang triển khai : <span>2</span></p>
                                        <p>Đang duy trì : <span>3</span></p>
                                    </div>
                                    <div className="report2">
                                        <p>Đã kết thúc : <span>2</span></p>
                                        <p>Đang hủy : <span>1</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="statistical_content_small">
                            <i class="fa fa-internet-explorer" aria-hidden="true"></i>
                            <p className="statistical_content_text">TÊN MIỀN</p>
                            <div className="status">
                                <div className="status_content">
                                    <div className="deployment">

                                    </div>
                                    <p className="text_deployment">Đang sử dụng</p>
                                </div>
                                <div className="status_content" >
                                    <div className="deployment" style={{ backgroundColor: "#36a2eb" }}>

                                    </div>
                                    <p className="text_deployment">Sắp hết hạn</p>
                                </div>
                                <div className="status_content">
                                    <div className="deployment" style={{ backgroundColor: "#ffce56" }}>

                                    </div>
                                    <p className="text_deployment">Đang hết hạn</p>
                                </div>

                            </div>
                            {/* bieudo   */}

                            <Doughnut
                                data={{
                                    datasets: [
                                        {
                                            label: "Population (millions)",
                                            backgroundColor: [
                                                "#36a2eb",
                                                "#ffce56",
                                                "#ff6384",

                                            ],
                                            data: [2478, 5267, 734]
                                        }
                                    ]
                                }}
                                option={{
                                    title: {
                                        display: true,
                                        text: "Predicted world population (millions) in 2050"
                                    }
                                }}
                            />
                            <div className="report">
                                <div className="report1">
                                    <p>Đang sử dụng : <span>1</span></p>
                                    <p>Sắp hết hạn : <span>0</span></p>
                                </div>
                                <div className="report2">
                                    <p>Đã hết hạn: <span>2</span></p>

                                </div>
                            </div>
                        </div>
                        <div className="statistical_content_small">
                            <i class="fa fa-internet-explorer" aria-hidden="true"></i>
                            <p className="statistical_content_text">HOSTING</p>
                            <div className="status">
                                <div className="status_content">
                                    <div className="deployment">

                                    </div>
                                    <p className="text_deployment">Đang triển khai</p>
                                </div>
                                <div className="status_content" >
                                    <div className="deployment" style={{ backgroundColor: "#36a2eb" }}>

                                    </div>
                                    <p className="text_deployment">Đang duy trì</p>
                                </div>
                                <div className="status_content">
                                    <div className="deployment" style={{ backgroundColor: "#ffce56" }}>

                                    </div>
                                    <p className="text_deployment">Đang kết thúc</p>
                                </div>

                            </div>
                            {/* bieudo */}

                            <Doughnut
                                data={{
                                    datasets: [
                                        {
                                            label: "Population (millions)",
                                            backgroundColor: [
                                                "#36a2eb",
                                                "#ffce56",


                                            ],
                                            data: [2478, 5267]
                                        }
                                    ]
                                }}
                                option={{
                                    title: {
                                        display: true,
                                        text: "Predicted world population (millions) in 2050"
                                    }
                                }}
                            />
                            <div className="report">
                                <div className="report1">
                                    <p>Đang sử dụng : <span>3</span></p>
                                    <p>Sắp hết hạn : <span>0</span></p>
                                </div>
                                <div className="report2">
                                    <p>Đã hết hạn: <span>2</span></p>

                                </div>
                            </div>
                        </div>
                        <div className="statistical_content_small">
                            <i class="fa fa-internet-explorer" aria-hidden="true"></i>
                            <p className="statistical_content_text">E-MAIL DOMAIN</p>
                            <div className="status">
                                <div className="status_content">
                                    <div className="deployment">

                                    </div>
                                    <p className="text_deployment">Đang triển khai</p>
                                </div>
                                <div className="status_content" >
                                    <div className="deployment" style={{ backgroundColor: "#36a2eb" }}>

                                    </div>
                                    <p className="text_deployment">Đang duy trì</p>
                                </div>
                                <div className="status_content">
                                    <div className="deployment" style={{ backgroundColor: "#ffce56" }}>

                                    </div>
                                    <p className="text_deployment">Đang kết thúc</p>
                                </div>

                            </div>
                            {/* bieudo */}

                            <Doughnut
                                data={{
                                    datasets: [
                                        {
                                            label: "Population (millions)",
                                            backgroundColor: [
                                                "#ffce56",
                                                "#ff6384",


                                            ],
                                            data: [2478, 5267]
                                        }
                                    ]
                                }}
                                option={{
                                    title: {
                                        display: true,

                                        text: "Predicted world population (millions) in 2050"
                                    },
                                    height: '300px'
                                }}
                            />
                            <div className="report">
                                <div className="report1">
                                    <p>Đang sử dụng : <span>1</span></p>
                                    <p>Sắp hết hạn : <span>0</span></p>
                                </div>
                                <div className="report2">
                                    <p>Đã hết hạn: <span>0</span></p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage

