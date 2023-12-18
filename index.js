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
    obj.id = obj.name
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

let color = [
    '#4B67B8',
    '#F5C15F',
    '#48946A',
    '#DB7AC1',
    '#DF645F',
    '#90C173',
    '#73B6D6',
    '#895BA6',
    '#F07F52',
    '#c09f7e',
    '#ef6364',
    '#778ccc'

]
$.get(
    DATA_PATH,
    function (data) {
        function getLevelOption() {
            return [
                {
                    itemStyle: {
                        // borderColor: '#c2c2c2',
                        borderWidth: 0,
                        gapWidth: 1
                    },
                    upperLabel: {
                        show: false
                    }
                },
                {
                    itemStyle: {
                        borderColorSaturation: 0.8,
                        borderWidth: 5,
                        gapWidth: 1
                    },
                    upperLabel: {
                        show: true,
                        height: 20
                    }
                },
                {
                    itemStyle: {
                        borderColorSaturation: 0.7
                    }
                },
                {
                    itemStyle: {
                        borderColorSaturation: 0.6
                    }
                }
            ];
        }
        getValue(data)
        size(data)
        console.log(data)
        const treemapOption = {
            color: [
                '#4B67B8',
                '#F5C15F',
                '#48946A',
                '#DB7AC1',
                '#DF645F',
                '#90C173',
                '#73B6D6',
                '#895BA6',
                '#F07F52',
                '#c09f7e',
                '#ef6364',
                '#778ccc'

            ],
            colorMappingBy: 'id',
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
                        align: 'left',
                        padding: 1,
                        fontsize: 10,
                        position: 'left'
                    },
                    breadcrumb: {
                        show: false
                    },
                    upperLabel: {
                        show: false
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
            color: [
                '#778ccc',
                '#4B67B8',
                '#F5C15F',
                '#DB7AC1',
                '#48946A',
                '#ef6364',
                '#90C173',
                '#73B6D6',
                '#895BA6',
                '#F07F52',
                '#c09f7e',
                '#DF645F',
            ],
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
        let currentOption = sunburstOption;
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


