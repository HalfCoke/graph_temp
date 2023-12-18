function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x)
}

function getValue(obj) {
    let right = 0;
    if (obj.name.indexOf('全国重点实验室') !== -1 || obj.name.indexOf('前沿科学中心') !== -1) {
        right = 8
    } else if (obj.name.indexOf('教育部重点实验室') !== -1) {
        right = 4
    } else {
        right = 4
    }
    if (obj.children && obj.children.length !== 0) {
        for (let i = 0; i < obj.children.length; i++) {
            right += getValue(obj.children[i])
        }
    }
    obj.right = right
    return right;
}

function size(obj) {
    obj.size = obj.right
    obj.value = obj.right
    if (obj.children && obj.children.length !== 0) {
        for (let i = 0; i < obj.children.length; i++) {
            size(obj.children[i])
        }
    }
}



var DATA_PATH = './all_data.json';

var chartDom = document.getElementById('chart-container');
var myChart = echarts.init(chartDom);
var option;


$.get(
    DATA_PATH,
    function (data) {
        getValue(data)
        size(data)
        console.log(data)
        const treemapOption = {
            series: [
                {
                    type: 'treemap',
                    id: 'echarts-package-size',
                    animationDurationUpdate: 1000,
                    roam: false,
                    nodeClick: undefined,
                    data: data.children,
                    universalTransition: true,
                    label: {
                        show: true,
                        overflow: 'truncate'
                    },
                    breadcrumb: {
                        show: false
                    }
                }
            ]
        };
        const sunburstOption = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'sunburst',
                    id: 'echarts-package-size',
                    radius: ['20%', '90%'],
                    animationDurationUpdate: 1000,
                    nodeClick: 'rootToNode',
                    data: data.children,
                    universalTransition: true,
                    roam: true,
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,.5)'
                    },
                    label: {
                        show: true,
                        minAngle: 3
                    },
                    labelLayout: {
                        hideOverlap: true
                    },

                }
            ]
        };
        let currentOption = treemapOption;
        myChart.setOption(currentOption);
        setInterval(function () {
            currentOption =
                currentOption === treemapOption ? sunburstOption : treemapOption;
            myChart.setOption(currentOption);
        }, 3000);
    }
);

option && myChart.setOption(option);
