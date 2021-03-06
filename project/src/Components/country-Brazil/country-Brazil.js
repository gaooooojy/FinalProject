import React from 'react';
import ReactECharts from 'echarts-for-react';

const Brazil = () => {
    var timeData = ['2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09',
        '2020-10','2020-11','2020-12','2020-13','2020-14','2020-15','2020-16','2020-17','2020-18','2020-19','2020-20',
        '2020-21','2020-22','2020-23','2020-24','2020-25','2020-26','2020-27','2020-28','2020-29','2020-30','2020-31',
        '2020-32','2020-33','2020-34','2020-35','2020-36','2020-37','2020-38','2020-39','2020-40','2020-41','2020-42',
        '2020-43','2020-44','2020-45','2020-46','2020-47','2020-48','2020-49','2020-50','2020-51','2020-52','2020-53',
        '2021-01','2021-02','2021-03','2021-04','2021-05','2021-06','2021-07','2021-08','2021-09',
        '2021-10','2021-11','2021-12','2021-13','2021-14','2021-15','2021-16','2021-17','2021-18','2021-19','2021-20',
        '2021-21','2021-22','2021-23','2021-24','2021-25','2021-26','2021-27','2021-28','2021-29','2021-30']

    const option = {
        title: {
            text: 'Situation in Brazil with Confirmed Cases and Deaths (weekly)',
            left: 'center'
        },

        legend: {
            data: ['Confirmed Cases', 'Deaths' ],
            top: '10%'
        },

        toolbox: {
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
                restore: {},
                saveAsImage: {},
            },
            right: '5%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid: {
            left: '10%',
            right: '0%',
            bottom: '5%',
            top: '20%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: timeData,
                minInterval: 3,
                name: 'year-week',
                nameLocation: 'center',
                nameTextStyle: {
                    fontSize: 15,
                    fontWeight: "bolder",
                    padding: [14, 4, 4, 4]
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                type: 'bar',
                name: 'Confirmed Cases',
                emphasis: {
                    focus: 'series'
                },
                data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 23, 175, 1346, 2710, 6874, 11039, 16485, 23234, 39259, 61552, 78381,
                    122131, 151638, 176909, 175866, 217414, 259105, 258912, 261626, 233708, 320702, 314586, 301745,
                    304775, 265586, 256528, 275210, 192934, 214174, 187680, 182980, 179693, 140362, 158784, 151577,
                    118410, 198978, 208308, 243339, 288800, 298412, 361667, 220666, 249461, 397866, 380158, 359623,
                    357929, 318757, 318631, 328450, 391841, 464664, 467944, 527917, 526089, 439986, 504207, 455887,
                    395728, 410106, 430461, 376544, 460905, 424161, 475462, 465704, 508962, 498870, 349210, 337163,
                    269603, 312089, 249695
                ]
            },
            {
                type: 'bar',
                name: 'Deaths',
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "rgba(153, 21, 21, 1)"
                },
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 111, 350, 737, 1239, 1743, 2820, 4098, 4995, 6548, 6648,
                    7141, 6877, 7285, 7005, 7245, 7233, 7388, 7516, 7100, 6945, 6803, 6892, 6084, 5822, 4975, 5270, 4846,
                    4611, 4136, 3417, 3229, 2940, 2323, 3401, 3385, 3650, 4108, 4461, 5889, 3848, 4879, 7562, 6719, 7365,
                    7435, 7071, 7603, 7370, 8577, 10678, 12888, 16139, 18441, 18886, 21865, 20065, 17254, 16686, 14607,
                    11486, 13493, 12849, 12347, 13997, 15424, 10649, 10943, 9816, 7981, 7710, 6910

                ]
            }

        ]
    };
    return <ReactECharts option={option} style={{ height: 600 , width: "1000px"}}/>;
};
export default Brazil;
