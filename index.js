function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x)
}

function getValue(obj) {
    let right = 0;
    let nation = 0
    let fsc = 0
    let moe = 0
    let eng = 0
    if (obj.name.indexOf('全国重点实验室') !== -1 || obj.name.indexOf('前沿科学中心') !== -1) {
        right = 12
        if (obj.name.indexOf('全国重点实验室') !== -1) {
            nation = 1
        }
        if (obj.name.indexOf('前沿科学中心') !== -1) {
            fsc = 1
        }
    } else if (obj.name.indexOf('教育部重点实验室') !== -1) {
        right = 8
        moe = 1
    } else if (obj.name.indexOf('工程研究中心') !== -1) {
        right = 8
        eng = 1
    } else {
        right = 15
    }
    if (obj.children && obj.children.length !== 0) {
        for (let i = 0; i < obj.children.length; i++) {
            let o = getValue(obj.children[i])
            right += o.right
            nation += o.nation&&o.nation>0 ? o.nation : 0
            fsc += o.fsc
            moe += o.moe
            eng += o.eng
        }
    }
    obj.right = right
    obj.fsc = fsc
    obj.nation = nation
    obj.eng = eng
    obj.moe = moe
    return obj;
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
                        gapWidth: 4
                    },
                    upperLabel: {
                        show: true,
                        height: 20
                    }
                },
                {
                    itemStyle: {
                        borderColorSaturation: 0.7,
                        borderWidth: 5,
                        gapWidth: 2
                    }
                },
                {
                    itemStyle: {
                        borderColorSaturation: 0.6
                    }
                }
            ];
        }

        function getTooltipFormatter(params) {
            let resultHtml = ''
            resultHtml += params.data.name
            if (params.data.name.indexOf('全国重点实验室') === -1
                && params.data.name.indexOf('前沿科学中心') === -1
                && params.data.name.indexOf('教育部重点实验室') === -1
                && params.data.name.indexOf('工程研究中心') === -1) {
                if (params.data.nation > 0) {
                    resultHtml += '<br>全国重点实验室：' + params.data.nation
                }
                if (params.data.fsc > 0) {
                    resultHtml += '<br>前沿科学中心：' + params.data.fsc
                }
                if (params.data.moe > 0) {
                    resultHtml += '<br>教育部重点实验室：' + params.data.moe
                }
                if (params.data.eng > 0) {
                    resultHtml += '<br>工程研究中心：' + params.data.eng
                }
            }
            return resultHtml
        }

        getValue(data)
        size(data)
        console.log('data:')
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
                    name: '农学',
                    id: 'echarts-package-size',
                    animationDurationUpdate: 1000,
                    roam: true,
                    nodeClick: 'zoomToNode',
                    zoomToNodeRatio: 0.64*0.64,
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
                        show: true,
                        left: 'center'
                    },
                    upperLabel: {
                        show: false
                    },
                    leafDepth: 3,
                    levels: getLevelOption(),
                    tooltip: {
                        formatter: (params) => getTooltipFormatter(params)
                    }
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
                '#F5C15F',
                '#4B67B8',
                '#48946A',
                '#DB7AC1',
                '#DF645F',
                '#90C173',
                '#73B6D6',
                '#895BA6',
                '#F07F52',
                '#c09f7e',
                '#ef6364',
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
                    tooltip: {
                        formatter: (params) => getTooltipFormatter(params)
                    }
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
let currentOption = twoOption.treemapOption;
$(document).ready(function () {
    $(document).on("dblclick", function (event) {
        currentOption =
            currentOption === twoOption.treemapOption ? twoOption.sunburstOption : twoOption.treemapOption;
        myChart.setOption(currentOption);
    })
})


