import React from 'react';
import { Doughnut } from "react-chartjs-2";

function Chart() {
    return (
        <div>
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
        </div>
    )
}

export default Chart
