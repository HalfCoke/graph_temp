function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x)
}

function getValue(obj) {
    let right = 0;
    if (obj.name.indexOf('全国重点实验室') !== -1 || obj.name.indexOf('前沿科学中心') !== -1) {
        right = 20
    } else if (obj.name.indexOf('教育部重点实验室') !== -1) {
        right = 8
    } else if (obj.name.indexOf('工程研究中心') !== -1) {
        right = 2
    } else {
        right = 2
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

let twoOption = {};

$.get(
    DATA_PATH,
    function (data) {
        function getLevelOption() {
            return [
                {
                    itemStyle: {
                        borderColor: '#c2c2c2',
                        borderWidth: 0,
                        gapWidth: 1
                    },
                    upperLabel: {
                        show: false
                    }
                },
                {
                    itemStyle: {
                        // borderColor: 'rgb(80,80,80)',
                        borderColorSaturation: 0.8,
                        borderWidth: 2,
                        gapWidth: 1
                    }
                },
                {
                    colorSaturation: [0.6, 0.7],
                    itemStyle: {
                        borderWidth: 2,
                        // borderColor: 'rgb(155,155,155)',
                        gapWidth: 1,
                        borderColorSaturation: 0.7
                    }
                },
                {
                    // colorSaturation: [0.35, 0.5],
                    itemStyle: {
                        borderWidth: 2,
                        gapWidth: 1,
                        borderColorSaturation: 0.6
                    }
                }
            ];
        }
        getValue(data)
        size(data)
        console.log(data)
        const treemapOption = {
            leafDepth: 2,
            series: [
                {
                    type: 'treemap',
                    id: 'echarts-package-size',
                    animationDurationUpdate: 1000,
                    roam: true,
                    // nodeClick: undefined,
                    data: data.children,
                    universalTransition: true,
                    visibleMin: 300,
                    label: {
                        show: true,
                        overflow: 'break',
                        align: 'center',
                        padding: 1,
                        fontsize: 10,
                        position: 'inside'
                    },
                    breadcrumb: {
                        show: false
                    },
                    upperLabel: {
                        show: true,
                        height: 30
                    },
                    levels: getLevelOption(),
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
                        minAngle: 3,
                        overflow: 'truncate',
                        width: 100
                    },
                    labelLayout: {
                        hideOverlap: true
                    },

                }
            ]
        };

        twoOption.treemapOption = treemapOption
        twoOption.sunburstOption = sunburstOption
        let currentOption = treemapOption;
        myChart.setOption(currentOption);
        // setInterval(function () {
        //     currentOption =
        //         currentOption === treemapOption ? sunburstOption : treemapOption;
        //     myChart.setOption(currentOption);
        // }, 3000);
        console.log(twoOption)
    }
);

option && myChart.setOption(option);
let currentOption =  twoOption.treemapOption;
$(document).ready(function (){
    $(document).on("dblclick",function (event){
        currentOption =
                currentOption === twoOption.treemapOption ? twoOption.sunburstOption : twoOption.treemapOption;
        myChart.setOption(currentOption);
    })
})


